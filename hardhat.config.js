require("@nomiclabs/hardhat-waffle");
task("accounts", "Prints the lis of accounts",async (taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "hardhat",
  networks:{
    hardhat: {}
  }
  
};
