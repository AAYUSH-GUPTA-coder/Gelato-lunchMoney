# Gelato-lunchMoney
This repo is a part of the Tutorial. You can learn about this dapp and Gelato network by following the tutorial.

## ✨[Tutorial Link](https://aayushguptaji.hashnode.dev/automate-your-smart-contract-with-gelato)✨
## ✨Mumbai Contract Address: 0x44855E498827d60Bc7b00F4e0560168633f738EF✨
## ✨[Polygonscan Mumbai link](https://mumbai.polygonscan.com/address/0xBdA83b8a6962e4bAc2eC9cF99Ed7536d6DA4A6CD#code)✨

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

## Quickstart

```shell
git clone https://github.com/AAYUSH-GUPTA-coder/Gelato-lunchMoney
cd Gelato-lunchMoney
yarn
```

# Deployment to a testnet or mainnet

1. Setup environment variabltes

You'll want to set your `QUICKNODE_MUMBAI_HTTP_URL`, `POLYGONSCAN_KEY` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `QUICKNODE_MUMBAI_HTTP_URL`: This is url of the goerli testnet node you're working with. You can get setup with one for free from [Quicknode](https://www.quicknode.com/)
- `POLYGONSCAN_KEY`: Head over to [Polygonscan API](https://polygonscan.com/myapikey)

2. Get testnet ETH

Head over to [Mumbai Faucet](https://mumbaifaucet.com/) and get some tesnet Matic.

# Deploy your Smart Contract
Run this command to deploy your smart contract to mumbai test network.
```
yarn hardhat run scripts/deploy.js --network mumbai
```


