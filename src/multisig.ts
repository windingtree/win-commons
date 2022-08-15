import { Contract, providers } from 'ethers';

export type Provider = providers.JsonRpcProvider | providers.Web3Provider;

export const safeAbi = ['function getOwners() public view returns (address[] memory)'];

// Returns true if given account address is contract
export const isContract = async (address: string, provider: Provider) => {
  const code = await provider.getCode(address);
  return code !== '0x';
};

// Returns owners of the Safe wallet
export const getOwners = async (address: string, provider: Provider): Promise<string[]> => {
  try {
    const safeContract = new Contract(address, safeAbi, provider);
    return await safeContract.getOwners();
  } catch (err) {
    // log error
    return [];
  }
};
