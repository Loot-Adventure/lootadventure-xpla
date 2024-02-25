import { ethers } from 'hardhat';

import { soulControlerAbi } from './abi/soul-controler-abi';
import { SOUL_CONTROLER, EQUIPMENT_NFT } from './config';
import { erc1155Equipment } from './abi/erc1155-equipment-abi';

async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer is ... ', signer.address);
  const equipmentNft = new ethers.Contract(EQUIPMENT_NFT, erc1155Equipment, signer);

  // Set Contract
  const soulControler = new ethers.Contract(SOUL_CONTROLER, soulControlerAbi, signer);
  const tx = await soulControler.setNftsOnGame('0x734053c35CCFcEa69D8bfa82c3a0DCdBE7f7a167');
  tx.wait();

  // const tx2 = await equipmentNft.setControlerRole('0x7b718D4Ce6ca83536660a314639559F3d3f6e9e3');
  // tx2.wait();
  // const tx4 = await equipmentNft.setDeveloperRole('0x7b718D4Ce6ca83536660a314639559F3d3f6e9e3');
  // tx4.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
