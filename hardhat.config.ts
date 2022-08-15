/* eslint-disable no-undef */
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
export default {
  solidity: {
    compilers: [
      {
        version: '0.8.13'
      }
    ]
  },
  namedAccounts: {
    deployer: 0,
    alice: 1,
    bob: 2,
    carol: 3
  },
  networks: {
    hardhat: {
      hardfork: 'london',
      saveDeployments: false,
      tags: ['local']
    }
  }
};
