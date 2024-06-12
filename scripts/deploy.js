require('dotenv').config();
const hre = require('hardhat');

async function main() {
  const Nepla = await hre.ethers.getContractFactory('Nepla');
  const neplaToken = await Nepla.deploy(process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, process.env.TOKEN_INITIAL_SUPPLY, process.env.GENESIS_ADDRESS);

  await neplaToken.deployed();

  console.log(`NEPLA toekn contract has been deployed : ${neplaToken.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })