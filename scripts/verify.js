const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  await hre.run("verify:verify", {
    address: "0xB05cE70F1ee8B12dd732A71f0Ef4De2118F2d572",
    constructorArguments: [],
    contract: "contracts/LunchMoney.sol:LunchMoney",
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
