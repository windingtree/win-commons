import { Contract, providers } from 'ethers';

export const safeAbi = ['function getOwners() public view returns (address[] memory)'];

// Returns true if given account address is contract
export const isContract = async (address: string, provider: providers.JsonRpcProvider) => {
  const code = await provider.getCode(address);
  return code !== '0x';
};

// Returns owners of the Safe wallet OR array with original address
export const getOwners = async (address: string, provider: providers.JsonRpcProvider): Promise<string[]> => {
  const defaultAddresses = [address];
  try {
    if (await isContract(address, provider)) {
      const safeContract = new Contract(address, safeAbi, provider);
      const owners = await safeContract.getOwners();
      return owners.length > 0 ? owners : defaultAddresses;
    } else {
      return defaultAddresses;
    }
  } catch (err) {
    return defaultAddresses;
  }
};
