import type { providers } from 'ethers';
import { ethers, deployments } from 'hardhat';

export const provider = ethers.provider as unknown as providers.JsonRpcProvider;

export const getSigners = ethers.getSigners;

export const setupSafe = deployments.createFixture(async () => {
  await deployments.fixture('MockGnosisSafe');
  const contracts = {
    safe: await ethers.getContract('MockGnosisSafe')
  };
  return {
    ...contracts
  };
});
