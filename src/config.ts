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
    mode: ['dev']
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
    mode: ['stage']
  },
  {
    name: 'Gnosis Chain',
    chainId: 100,
    rpc: 'https://poa-xdai-archival.gateway.pokt.network/v1/lb/626573f1aa777e00391a8d04',
    blockExplorer: 'https://blockscout.com/xdai/mainnet',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0xc2024b4Ff3764b8AEb5FCfB4f248124B80A2367a',
      winPay: '0x5C0B415099ce28ce621E6525558704F89ABef71E',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x73B7D1A3799c8C2a73a15A1a4c079B42E817054a',
          decimals: 18,
          image: 'https://bafybeihn6h3j36k44zhvxretauc6dy6w6eapjenzmita7pvwrelg4pksvi.ipfs.w3s.link/usdc.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Tether',
          symbol: 'USDT',
          address: '0x92276d981126e6D055C02fb756EB2fCd8DeC2Cb1',
          decimals: 18,
          image: 'https://bafybeihieb7drjnn6t3qu7yqpzkxxexwddqm6amztkzhtognckinogb42q.ipfs.w3s.link/usdt.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Jarvis Synthetic Euro',
          symbol: 'jEUR',
          address: '0xd59ac854Ad85bC9f26208d86E5B3eD3712c44b47',
          decimals: 18,
          image: 'https://bafybeiawrza7iznptwiu6tm2yjv63ch2zqkj4wddvkwqgjbpwjwypmfnia.ipfs.w3s.link/jEUR.webp',
          native: false,
          permit: true,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Swiss Franc',
          symbol: 'jCHF',
          address: '0x2FfF9CEC2c934511B475be1BF385231d4299cd35',
          decimals: 18,
          image: 'https://bafybeidqdluz7vh6pldk7ttoczoffuu3zzf72q22jzuepjkrqtuwskajma.ipfs.w3s.link/jCHF.webp',
          native: false,
          permit: true,
          currency: 'CHF'
        }
      ]
    },
    mode: ['prod']
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
