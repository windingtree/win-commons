import type { NetworkInfo, NetworkMode } from './types';
import { assetsCurrencies } from './types';

// re-exports
export { assetsCurrencies };

// The default time zone
export const defaultZone = 'Etc/GMT0';

// All networks configuration
export const allowedNetworks: readonly NetworkInfo[] = Object.freeze([
  {
    name: 'Localhost',
    chainId: 31337,
    rpc: 'http://127.0.0.1:8545',
    blockExplorer: '',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
      winPay: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeif5mtgb4mtvvqbhw2kdr4uruu5xm742vtwa3cwndpnsqdb2t4676m.ipfs.dweb.link/3408.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeid73zglo2wfukmuriny5s2chgnn6wqn2mtbogscnmi56ylth6n52i.ipfs.w3s.link/jpyc.jpg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'EURS',
          symbol: 'EURS',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: true,
          currency: 'EUR'
        }
      ]
    },
    mode: ['dev', 'stage']
  },
  {
    name: 'Sokol Testnet',
    chainId: 77,
    rpc: 'https://sokol.poa.network',
    blockExplorer: 'https://blockscout.com/poa/sokol',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0x3196f354b7a95413E30889D1C6cE5074b10c43f5',
      winPay: '0x6f2fBD652A99Db4b8143c8383Ae39b5459268685',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x25149dE5afe2043C61687AD136527d2167EFC241',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x25149dE5afe2043C61687AD136527d2167EFC241',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeif5mtgb4mtvvqbhw2kdr4uruu5xm742vtwa3cwndpnsqdb2t4676m.ipfs.dweb.link/3408.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeid73zglo2wfukmuriny5s2chgnn6wqn2mtbogscnmi56ylth6n52i.ipfs.w3s.link/jpyc.jpg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'EURS',
          symbol: 'EURS',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: true,
          currency: 'EUR'
        }
      ]
    },
    mode: ['dev', 'stage']
  }
]);

// Returns the specified network configuration
export const getNetworkInfo = (chainId: number): NetworkInfo => {
  const chain = allowedNetworks.find((n) => n.chainId === chainId);
  if (!chain) {
    throw new Error(`Unsupported chainId #${chainId}`);
  }
  return Object.freeze(chain);
};

// Returns 'requested' OR 'prod' networks of type
export const getNetworksByMode = (mode: NetworkMode): readonly NetworkInfo[] =>
  Object.freeze(allowedNetworks.filter((n) => n.mode.includes(mode) || n.mode.includes('prod')));
