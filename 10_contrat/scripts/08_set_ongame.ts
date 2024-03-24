import { ethers } from 'hardhat';

import { soulControlerAbi } from './abi/soul-controler-abi';
import { SOUL_CONTROLER } from './config';
import { erc6551AccountAbi } from './abi/erc6551-account-abi';

const tba = "0x91662e8DBc048333dAA3e2746518091011aD1c67";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer is ... ', signer.address);
  const tbaContract = new ethers.Contract(tba, erc6551AccountAbi, signer);

  // Set Contract
  const soulControler = new ethers.Contract(SOUL_CONTROLER, soulControlerAbi, signer);
  const txData = await soulControler.interface.encodeFunctionData('setNftsOnGame', []);
  const tx = await tbaContract.executeCall(SOUL_CONTROLER, 0, txData);
  tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
