import { ethers } from 'hardhat';
import { erc20lacoinAbi } from './abi/erc20-lacoin-abi';
import { erc6551AccountAbi } from './abi/erc6551-account-abi';
import { COIN_FT, EQUIPMENT_NFT } from './config';
import { parseEther } from 'ethers/lib/utils';

const tba = "0xc3F17f4eDe40b31cA43E7DF7a05C311CC48AaB09";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer is ... ', signer.address);

  // Set Contract
  const laXp = new ethers.Contract(COIN_FT, erc20lacoinAbi, signer);
  const tbaContract = new ethers.Contract(tba, erc6551AccountAbi, signer);

  laXp.once('Approval', (owner, to, amount) => {
    console.log('Approve from ', owner);
    console.log('To: ', to);
    console.log('Token amount: ', amount.toString());
  })

  const txData = laXp.interface.encodeFunctionData('approve', [
    EQUIPMENT_NFT, 
    parseEther("100")
  ]);
  const tx = await tbaContract.executeCall(COIN_FT, 0, txData);
  tx.wait();

  const tx02 = await laXp.balanceOf(tba);
  console.log(tx02);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
