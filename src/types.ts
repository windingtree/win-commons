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

// currency the asset is pegged to
export const assetsCurrencies = [
  'EUR',
  'USD',
  'JPY',
  'PLN',
  'CHF',
  'GBP',
  'AUD',
  'CAD',
  'JPY',
  'SEK',
  'SDG',
  'BGN',
  'CNY',
  'COP',
  'KRW',
  'MXN',
  'NGN',
  'NZD',
  'PHP',
  'XAF',
  'XOF',
  'BRL'
];

export type AssetCurrency = typeof assetsCurrencies[number];

export interface CryptoAsset {
  name: string;
  symbol: string;
  address: string;
  coin: string;
  decimals: number;
  image: string;
  native: boolean;
  permit: boolean;
  currency: AssetCurrency;
  ramp?: string;
}

export interface Network {
  name: string;
  chainId: number;
}

export type NetworkMode = 'dev' | 'stage' | 'prod';

export interface NetworkInfo extends Network {
  currency: string;
  ramp?: string;
  decimals: number;
  rpc: string;
  contracts: {
    ledger: string;
    winPay: string;
    assets: CryptoAsset[];
  };
  blockExplorer: string;
  mode: NetworkMode[];
}

export interface WiseCurrency {
  code: string;
  name: string;
  decimals: number;
}

export type CurrencyMeta = {
  [code: string]: {
    decimals: number;
    name: string;
    symbol: string;
  };
};

export type Duplicates = {
  [code: string]: number;
};
