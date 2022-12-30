const hre = require('hardhat');
require("@nomiclabs/hardhat-etherscan");
const { mainModule } = require('process');
async  function main(){
    const CampignFactory = await hre.ethers.getContractFactory("CampignFactory");
    const campignFactory = await CampignFactory.deploy();
    await campignFactory.deployed();
    console.log("Factory deployed to:", campignFactory.address);

    // await run(`verify:verify`, {
    //     address: campignFactory.address,
    //     // constructorArguments: [priceFeedAddress],
    //   });
}

main().then(()=>  process.exit(0).catch((error)=>{
    console.log(error);
    process.exit(1);
}))
