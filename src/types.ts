import type { providers } from 'ethers';

export type Provider = providers.JsonRpcProvider | providers.Web3Provider;

export interface SignatureValue {
  wallet: string;
  secret: string;
}

export interface SignatureDomain {
  name: string;
  version: string;
  chainId: number;
}
