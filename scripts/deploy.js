const hre = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const Contract = await hre.ethers.getContractFactory("LunchMoney");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(100000); // 100 seconds

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: contract.address,
    constructorArguments: [],
    contract: "contracts/LunchMoney.sol:LunchMoney",
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
