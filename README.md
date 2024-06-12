# NEPLA Token

## Features

- Name: NEPLA token
- Decimals : 18
- Symbol: NEPLA
- Type : ERC20
- Initial Supply : 2,000,000,000 (NEPLA)
- NodeJS, HardHat, OpenZeppelin
- Solidity Compiler : 0.8.26

## env.

```bash
npm install
cp .env.sample. env
vi .env
```

## Deploy

```bssh
npx hardhat run --network {ethereum||sepolia} "scripts/deploy.js"
```

## Verify

```bash
npx hardhat verify --constructor-args arguments.js --contract "contracts/NeplaErc20.sol:Nepla" --network {ethereum||sepolia} {CONTRACT_ADDRESS}
```
