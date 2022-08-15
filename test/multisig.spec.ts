import { expect } from 'chai';
import { Contract } from 'ethers';
import { isContract, getOwners } from '../src/multisig';
import { provider, setupSafe } from './utils/setup';

describe('Multisig', () => {
  let account: string;
  let safe: Contract;

  before('Setup', async () => {
    account = await provider.getSigner().getAddress();
    ({ safe } = await setupSafe());
  });

  context('#isContract', () => {
    it('should detect contract', async () => {
      expect(await isContract(safe.address, provider)).to.be.true;
    });

    it('should detect account', async () => {
      expect(await isContract(account, provider)).to.be.false;
    });
  });

  context('#getOwners', () => {
    it('should return owners of the wallet', async () => {
      const owners = await getOwners(safe.address, provider);
      expect(owners).to.be.an('array').to.lengthOf.above(0);
      owners.forEach((address) => expect(address).to.be.a('string'));
    });

    it('should return an empty array for account', async () => {
      const owners = await getOwners(account, provider);
      expect(owners).to.be.an('array').to.lengthOf(0);
    });
  });
});
