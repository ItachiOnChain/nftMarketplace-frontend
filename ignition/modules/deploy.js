// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTMarketplaceModule", (m) => {
  
  // Define the deployment of NFTMarketplace contract
  const nftMarketplace = m.contract("NFTMarketplace");

  // Return the deployed contract object
  return { nftMarketplace };
});
    