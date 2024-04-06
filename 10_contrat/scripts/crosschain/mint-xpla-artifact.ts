import { ethers } from 'hardhat';

async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer is ... ', signer.address);
  const xplaContractAddress = process.env.XPLA_CONTRACT_ADDRESS || "";
  if(!xplaContractAddress){
    console.error("XPLA_CONTRACT_ADDRESS is required");
    return;
  }
  const contract = await ethers.getContractAt('XPLAArtifact', xplaContractAddress);
  await contract.mint()
  console.log('Minted');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
