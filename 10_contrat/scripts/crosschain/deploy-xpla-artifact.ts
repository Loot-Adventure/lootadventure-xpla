import { ethers } from 'hardhat';

async function main() {
  const [signer] = await ethers.getSigners();
  console.log('Signer is ... ', signer.address);
  const XPLAArtifact = await ethers.getContractFactory('XPLAArtifact');
  const xplaArtifact = await XPLAArtifact.deploy();
  console.log(xplaArtifact.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
