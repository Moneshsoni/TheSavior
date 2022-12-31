require("@nomiclabs/hardhat-waffle");
// require('dotenv').config({path: './.env'});
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the lis of accounts",async (taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
})
/** @type import('hardhat/config').HardhatUserConfig */
// const privetKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon",
  networks:{
    hardhat: {},
    polygon:{
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: 'T6ZRYP4Z6EM2QXUC8C4HCYIDWNSAAB4YZQ'
    }
  }
  
};
