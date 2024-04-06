# Loot Adventure Backend Dev Guide

## Description

We are in the process of developing a roguelike game using Unity. This game incorporates MCHVerse - Loot by Rogue NFT assets, converting them into our proprietary ERC6551 assets for use within Unity. For the integration with XPLA, we aim to create an Artifact NFT, designed to influence the in-game status.

## DEV GUIDE

Our Unity code is currently somewhat proprietary and complex to execute locally. Therefore, we plan to concentrate on the DEV GUIDE on smart contract aspect.

The information mentioned above has already been communicated with both the Oasys and XPLA teams.

### Requirements/Environment
- nodejs (v18.17.1)
- I'm running on this in MacOS environment

### Install

Please git clone this repository, then

```
cd 10_contrat
npm i
```

### Build

```
// at ./10_contrat
npx hardhat compile
```

### Test

Test part is the same with Execute part, our team is using below command to test the contract.
So please see the detailed execute process at the below.

### Execute

Please set private key by the blow command.

```
export PRIVATE_KEY=<your private key to test>
```

#### MCH Verse
```
// at ./10_contrat
npx hardhat run scripts/mock/deployTToken.ts --network mchTest
```

This command gives you the deployed contract addresses.

Then set the following env

```
export TREASURY=your key to manage fund
export SAMPLE_LOOT=deployed token address
export SOUL_MINTER=deployed token address
export SOUL_CONTROLER=deployed token address
export EQUIPMENT_NFT=deployed token address
export SOUL_LOO=deployed token address
export ERC6551_REGISTRY=deployed token address
```

Since you are running this in testnet, so you are required to mint sample token here. This is replaced actual MCHVerse Loot by Rogue NFT in the production environment.

```
npx hardhat run scripts/01_mint_sample_loot.ts --network mchTest
```

Then run the following scripts.

```
// change token Id to minted token then run
npx hardhat run scripts/02_approve_sample.ts --network mchTest

// change token Id to minted token then run
npx hardhat run scripts/03_mint_soul_loot.ts --network mchTest
```

This give you the required NFT for the game play.

The Unity game part fetch data through the graph, if you want to test the backend data response, try the following.

Start the graph node in local environment.

```
// at 30_backend/02_SubGraph
cp .env.simple .env
docker-compose up
```

Then deploy subgraph to the node.
```
// at 30_backend/02_SubGraph/subgraph/lootAdventure
npm i
npm run codegen
npm run build
npm run create-local
npm run deploy-local
```

This gives url to fetch the data from subgraph. It contains 
- holding Loot by Rogue assets
- holding converted Soul Loot NFT
  - ERC6551 TBA address associated with the Soul Loot NFT
  - Job/Artifact/Equipment NFT Detail

![data-subgraph](./images/data-subgraph.png)

#### XPLA

```
// at ./10_contrat
npx hardhat run scripts/crosschain/mint-xpla-artifact.ts --network xpla
```



