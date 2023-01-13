const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("OurToken");
  const token = await Token.deploy(50); // 50 initial supply
  await token.deployed();
  console.log("token deployed to:", token.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(100000); // 100 seconds

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: token.address,
    constructorArguments: [50],
    contract: "contracts/OurToken.sol:OurToken",
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
