import React, { useState, useEffect, useContext} from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';
import axios from 'axios';
import {create as ipfsHttpClient} from 'ipfs-http-client';

//inernal import
import {NFTMarketplaceABI, NFTMarketplaceAddress} from "./constants";

//fetch smart contract
const fetchContract = (signerOrProvider) => new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
);

//connecting with smart contract
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
}

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
                method: "eth_Accounts",
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log("Error while checking for wallet connection", error);
        }
    }

    // Connect wallet function
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log("Error while connecting with wallet", error);
        }
    }
        

    // const checkContract = async () => {
    //     const contract = await connectingWithSmartContract();
    //     console.log(contract);
    // }

    return (
        <NFTMarketplaceContext.Provider value={{checkIfWalletIsConnected,titleData}}>
            {children}
        </NFTMarketplaceContext.Provider>  
    );
}