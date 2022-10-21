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
      ledger: '0xd01DA3Ada7E6a9f27236db81895aC1EBAE767216',
      winPay: '0xD0fACA39cbb7d2af128fad467e586800149bD941',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          coin: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          coin: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          coin: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
          decimals: 18,
          image: '/images/tokens/USDC.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          coin: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
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
          coin: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
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
          address: '0xd2D96356ab744f3681e10FE9fd87BF06D58FA49C',
          coin: '0x3A5f059bf8e5f3d0DcDB5658cfc16190724f3D92',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0xd2D96356ab744f3681e10FE9fd87BF06D58FA49C',
          coin: '0x3A5f059bf8e5f3d0DcDB5658cfc16190724f3D92',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x258079716be5De375B4519B0451bC3201C7dCcCA',
          coin: '0x30B8613603BF22FF7c1ecD7Ab86a313eaFFb7bA0',
          decimals: 6,
          image: '/images/tokens/USDC.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x6071Fd8F735bA1BC1021074363eA5721ce6C9F8d',
          coin: '0xB2B9aaac094C58E380DE8819Fd1130baCd2BDDB4',
          decimals: 18,
          image: 'https://bafybeid73zglo2wfukmuriny5s2chgnn6wqn2mtbogscnmi56ylth6n52i.ipfs.w3s.link/jpyc.jpg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'EURS',
          symbol: 'EURS',
          address: '0x5606FEf4dbAB9F889C122E20Fb7f6a7c4c2cC7d8',
          coin: '0x19b9957bAAaD19e278d22bB1eD42AEE41D0b6709',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: false,
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
          coin: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          coin: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
          decimals: 18,
          image: '/images/tokens/xDAI.svg',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'USD Coin',
          symbol: 'USDC',
          address: '0x73B7D1A3799c8C2a73a15A1a4c079B42E817054a',
          coin: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
          decimals: 6,
          image: '/images/tokens/USDC.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Tether (USDT)',
          symbol: 'USDT',
          address: '0x92276d981126e6D055C02fb756EB2fCd8DeC2Cb1',
          coin: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
          decimals: 6,
          image: '/images/tokens/USDT.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Jarvis Synthetic Euro',
          symbol: 'jEUR',
          address: '0xd59ac854Ad85bC9f26208d86E5B3eD3712c44b47',
          coin: '0x9fb1d52596c44603198fb0aee434fac3a679f702',
          decimals: 18,
          image: '/images/tokens/jEUR.svg',
          native: false,
          permit: true,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Swiss Franc',
          symbol: 'jCHF',
          address: '0x2FfF9CEC2c934511B475be1BF385231d4299cd35',
          coin: '0x2d5563da42b06fbbf9c67b7dc073cf6a7842239e',
          decimals: 18,
          image: '/images/tokens/jCHF.svg',
          native: false,
          permit: true,
          currency: 'CHF'
        }
      ]
    },
    mode: ['stage', 'prod']
  },
  {
    name: 'Polygon PoS Chain',
    chainId: 137,
    rpc: 'https://poly-mainnet.gateway.pokt.network/v1/lb/626573f1aa777e00391a8d04',
    blockExplorer: 'https://polygonscan.com',
    currency: 'MATIC',
    decimals: 18,
    contracts: {
      ledger: '0xc2024b4Ff3764b8AEb5FCfB4f248124B80A2367a',
      winPay: '0xFd7f48A3D88e8733a0A7bf4bbB8253fE010A418f',
      assets: [
        {
          name: 'DAI',
          symbol: 'DAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          coin: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          decimals: 18,
          image: '/images/tokens/DAI.svg',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'USD Coin',
          symbol: 'USDC',
          address: '0x73B7D1A3799c8C2a73a15A1a4c079B42E817054a',
          coin: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          decimals: 6,
          image: '/images/tokens/USDC.svg',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Tether (USDT)',
          symbol: 'USDT',
          address: '0x92276d981126e6D055C02fb756EB2fCd8DeC2Cb1',
          coin: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          decimals: 6,
          image: '/images/tokens/USDT.svg',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Monerium EUR emoney',
          symbol: 'EURe',
          address: '0xd59ac854Ad85bC9f26208d86E5B3eD3712c44b47',
          coin: '0x18ec0A6E18E5bc3784fDd3a3634b31245ab704F6',
          decimals: 18,
          image: '/images/tokens/EURe.svg',
          native: false,
          permit: false,
          currency: 'EUR'
        },
        {
          name: 'STASIS EURO',
          symbol: 'EURs',
          address: '0x2FfF9CEC2c934511B475be1BF385231d4299cd35',
          coin: '0xe111178a87a3bff0c8d18decba5798827539ae99',
          decimals: 18,
          image: '/images/tokens/EURs.svg',
          native: false,
          permit: false,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Euro',
          symbol: 'jEUR',
          address: '0x5C0B415099ce28ce621E6525558704F89ABef71E',
          coin: '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c',
          decimals: 18,
          image: '/images/tokens/jEUR.svg',
          native: false,
          permit: true,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Swiss Franc',
          symbol: 'jCHF',
          address: '0xd5B688cb083029BFf83ed4835dc7651D931E1ebD',
          coin: '0xbd1463f02f61676d53fd183c2b19282bff93d099',
          decimals: 18,
          image: '/images/tokens/jCHF.svg',
          native: false,
          permit: true,
          currency: 'CHF'
        },
        {
          name: 'Jarvis Synthetic British Pound',
          symbol: 'jGBP',
          address: '0xdDc6f48a33cc9cA49F0e234DA0a4038d01171a16',
          coin: '0x767058f11800fba6a682e73a6e79ec5eb74fac8c',
          decimals: 18,
          image: '/images/tokens/jGBP.svg',
          native: false,
          permit: true,
          currency: 'GBP'
        },
        {
          name: 'Jarvis Synthetic Australian Dollar',
          symbol: 'jAUD',
          address: '0x9E1AAea55b3d8837Ca17B2E31b72552474280200',
          coin: '0xcb7f1ef7246d1497b985f7fc45a1a31f04346133',
          decimals: 18,
          image: '/images/tokens/jAUD.svg',
          native: false,
          permit: true,
          currency: 'AUD'
        },
        {
          name: 'Jarvis Synthetic Canadian Dollar',
          symbol: 'jCAD',
          address: '0x7836172Cd3818D6774Bf3Cf0A6C672AD21A0D622',
          coin: '0x8ca194a3b22077359b5732de53373d4afc11dee3',
          decimals: 18,
          image: '/images/tokens/jCAD.svg',
          native: false,
          permit: true,
          currency: 'CAD'
        },
        {
          name: 'Jarvis Synthetic Japanese Yen',
          symbol: 'jJPY',
          address: '0x10A5209810Ce1aa59CedE4EDb38a6318C60522e0',
          coin: '0x8343091f2499fd4b6174a46d067a920a3b851ff9',
          decimals: 18,
          image: '/images/tokens/jJPY.svg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'Jarvis Synthetic Swedish Krona',
          symbol: 'jSEK',
          address: '0x429B07140326F38217F8F715976a6f4ac51fc5Ae',
          coin: '0x197e5d6ccff265ac3e303a34db360ee1429f5d1a',
          decimals: 18,
          image: '/images/tokens/jSEK.svg',
          native: false,
          permit: true,
          currency: 'SEK'
        },
        {
          name: 'Jarvis Synthetic Singapore Dollar',
          symbol: 'jSGD',
          address: '0x0C04259FCE06222C8808DC6182dF4aA77412Ce32',
          coin: '0xa926db7a4cc0cb1736d5ac60495ca8eb7214b503',
          decimals: 18,
          image: '/images/tokens/jSGD.svg',
          native: false,
          permit: true,
          currency: 'SGD'
        },
        {
          name: 'Jarvis Synthetic Polish Zloty',
          symbol: 'jPLN',
          address: '0xb63d48e9d1e51305a17F4d95aCa3637BBC181b44',
          coin: '0x08E6d1F0c4877Ef2993Ad733Fc6F1D022d0E9DBf',
          decimals: 18,
          image: '/images/tokens/jPLN.svg',
          native: false,
          permit: true,
          currency: 'PLN'
        },
        {
          name: 'Jarvis Synthetic Bulgarian Lev',
          symbol: 'jBGN',
          address: '0x1308a11DE52304B88813196f1feA7c56D6f973F1',
          coin: '0x60E91fc3a60362ca44aea0263DBc4b96302f6ADe',
          decimals: 18,
          image: '/images/tokens/jBGN.svg',
          native: false,
          permit: true,
          currency: 'BGN'
        },
        {
          name: 'Jarvis Synthetic Chinese Yuan',
          symbol: 'jCNY',
          address: '0xD6bA6697ac5818Dc20641051F0361B07B2D4Aaa2',
          coin: '0x84526c812D8f6c4fD6C1a5B68713AFF50733E772',
          decimals: 18,
          image: '/images/tokens/jCNY.svg',
          native: false,
          permit: true,
          currency: 'CNY'
        },
        {
          name: 'Jarvis Synthetic Colombian Peso',
          symbol: 'jCOP',
          address: '0x210d576a7877b2280E13d922e4f498e62Ee30971',
          coin: '0xE6d222caAed5F5DD73A9713AC91C95782e80ACBf',
          decimals: 18,
          image: '/images/tokens/jCOP.svg',
          native: false,
          permit: true,
          currency: 'COP'
        },
        {
          name: 'Jarvis Synthetic South Korean Won',
          symbol: 'jKRW',
          address: '0xC2FAEEE2d4Cd6e686fAcb5690A564356dBCc41a1',
          coin: '0xa22f6bc96f13bcC84dF36109c973d3c0505a067E',
          decimals: 18,
          image: '/images/tokens/jKRW.svg',
          native: false,
          permit: true,
          currency: 'KRW'
        },
        {
          name: 'Jarvis Synthetic Mexican Peso',
          symbol: 'jMXN',
          address: '0x76C337831b2FC492A850FFe3708D1139d43CA48B',
          coin: '0xBD1fe73e1f12bD2bc237De9b626F056f21f86427',
          decimals: 18,
          image: '/images/tokens/jMXN.svg',
          native: false,
          permit: true,
          currency: 'MXN'
        },
        {
          name: 'Jarvis Synthetic Nigerian Naira',
          symbol: 'jNGN',
          address: '0x86cC5096942c47e780f2adCaD6cfa6fd34Bfe238',
          coin: '0x182C76e977161f703Bb8f111047dF6C43CFaCc56',
          decimals: 18,
          image: '/images/tokens/jNGN.svg',
          native: false,
          permit: true,
          currency: 'NGN'
        },
        {
          name: 'Jarvis Synthetic New Zealand Dollar',
          symbol: 'jNZD',
          address: '0x30aFfcD3E3ED9dA0c13479D9D03625B636814EE1',
          coin: '0x6b526Daf03B4C47AF2bcc5860B12151823Ff70E0',
          decimals: 18,
          image: '/images/tokens/jNZD.svg',
          native: false,
          permit: true,
          currency: 'NZD'
        },
        {
          name: 'Jarvis Synthetic Philippine Peso',
          symbol: 'jPHP',
          address: '0x2E23555a60d1c70F40B176863a0f366d11150088',
          coin: '0x486880FB16408b47f928F472f57beC55AC6089d1',
          decimals: 18,
          image: '/images/tokens/jPHP.svg',
          native: false,
          permit: true,
          currency: 'PHP'
        },
        {
          name: 'Jarvis Synthetic Franc CFA (CEMAC)',
          symbol: 'jXAF',
          address: '0x00201077bB4B725bCBEe929adbbA1C951Af2F4ca',
          coin: '0x98fAb5d1366DE24f152ea683A1f23338351C47EA',
          decimals: 18,
          image: '/images/tokens/jXAF.svg',
          native: false,
          permit: false,
          currency: 'XAF'
        },
        {
          name: 'Jarvis Synthetic Franc CFA (UEMOA)',
          symbol: 'jXOF',
          address: '0x37A94baC267eF49CbB8bF0051690c83984E66773',
          coin: '0x4A1E068BC23fAeC08a5817A2A58258e3378d36f0',
          decimals: 18,
          image: '/images/tokens/jXOF.svg',
          native: false,
          permit: true,
          currency: 'XOF'
        },
        {
          name: 'Brazilian Digital Token',
          symbol: 'BRZ',
          address: '0x5785285dbbc4ba72818Ab5D4Cb8eE4E1225Be43d',
          coin: '0x491a4eB4f1FC3BfF8E1d2FC856a6A46663aD556f',
          decimals: 18,
          image: '/images/tokens/BRZ.svg',
          native: false,
          permit: false,
          currency: 'BRL'
        }
      ]
    },
    mode: ['stage', 'prod']
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

// Returns 'requested' networks of type
export const getNetworksByMode = (mode: NetworkMode): readonly NetworkInfo[] =>
  Object.freeze(allowedNetworks.filter((n) => n.mode.includes(mode)));
