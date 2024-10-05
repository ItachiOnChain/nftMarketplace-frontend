import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';
import axios from 'axios';

// Internal import
import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";

// Fetch smart contract
const fetchContract = (signerOrProvider) => new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
);

// Connecting with smart contract
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Error while connecting with contract", error);
    }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
    const titleData = 'Explore, acquire, and trade NFTs effortlessly';

    // -- USE STATE -- //
    const [currentAccount, setCurrentAccount] = useState("");

    // Check if wallet is connected
    const checkIfWalletIsConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No accounts found");
            }

        } catch (error) {
            console.log("Error while checking for wallet connection", error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    // Connect wallet function
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting with wallet", error);
        }
    };

    // Upload to IPFS using Pinata
    const uploadToIPFS = async (file) => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const response = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: "6892bf13c8a464c524c3",
                        pinata_secret_api_key: "829122627bc60468bcafe8aaaea9cf8cc44e1e80296e793743a219945b3d22ee",
                        "Content-Type": "multipart/form-data",
                    },
                });

                const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
                return ImgHash;
            } catch (error) {
                console.log("Error while uploading to Pinata", error);
            }
        }
    };

    // Create NFT function
    const createNFT = async (name, price, image, description, router) => {
        if (!name || !description || !price || !image) {
            return console.log("Data Is Missing");
        }

        const data = JSON.stringify({ name, description, image });

        try {
            // Add the data to Pinata
            const ImgHash = await uploadToIPFS(data);
            await createSale(ImgHash, price);
            router.push("/searchPage");
        } catch (error) {
            console.log("Error while creating NFT", error);
        }
    };

    // Create sale function
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListPrice();

            const transaction = !isReselling
                ? await contract.createToken(url, price, {
                    value: listingPrice.toString()
                })
                : await contract.reSellToken(id, price, {
                    value: listingPrice.toString()
                });

            await transaction.wait();
            console.log(transaction);
        } catch (error) {
            console.log("Error while creating sale", error);
        }
    };

    // Fetch NFTs
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItem();

            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                    const tokenURI = await contract.tokenURI(tokenId);
                    const { data: { image, name, description } } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    };
                })
            );

            return items;
        } catch (error) {
            console.log("Error while fetching NFTs", error);
        }
    };

    // Fetch my NFTs or listed NFTs
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();
            const data = type === "fetchItemsListed"
                ? await contract.fetchItemsListed()
                : await contract.fetchMyNFTs();

            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                    const tokenURI = await contract.tokenURI(tokenId);
                    const { data: { image, name, description } } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    };
                })
            );

            return items;
        } catch (error) {
            console.log("Error while fetching listed NFTs", error);
        }
    };

    // Buy NFT function
    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price
            });
            await transaction.wait();
        } catch (error) {
            console.log("Error while buying NFT", error);
        }
    };

    return (
        <NFTMarketplaceContext.Provider value={{
            checkIfWalletIsConnected,
            connectWallet,
            currentAccount,
            uploadToIPFS,
            createNFT,
            createSale,
            fetchNFTs,
            fetchMyNFTsOrListedNFTs,
            buyNFT,
            titleData
        }}>
            {children}
        </NFTMarketplaceContext.Provider>
    );
};
