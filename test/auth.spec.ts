import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
import { Signer } from 'ethers';
import {
  buildSignatureDomain,
  buildSignatureValue,
  createAuthSignature,
  types,
  validateAuthSignature,
  voucherName,
  voucherVersion
} from '../src/auth';
import { provider, getSigners } from './utils/setup';
chai.use(chp);

describe('Auth', () => {
  let account: string;
  let signers: Signer[];
  const chainId = 1;
  const secret = Math.random().toString();
  let signature: string;

  before('Setup', async () => {
    account = await provider.getSigner().getAddress();
    signers = await getSigners();
    signature = await createAuthSignature(provider, secret);
  });

  context('types', () => {
    it('should provide a proper signature types', async () => {
      expect(types).to.haveOwnProperty('Voucher');
      expect(types.Voucher).to.deep.equal([
        { name: 'wallet', type: 'address' },
        { name: 'secret', type: 'string' }
      ]);
    });
  });

  context('#buildSignatureValue', () => {
    it('should build signature value', async () => {
      const value = buildSignatureValue(account, secret);
      expect(value).to.haveOwnProperty('wallet').to.equal(account);
      expect(value).to.haveOwnProperty('secret').to.equal(secret);
    });
  });

  context('#buildSignatureDomain', () => {
    it('should build signature domain', async () => {
      const domain = buildSignatureDomain(chainId);
      expect(domain).to.haveOwnProperty('name').to.equal(voucherName);
      expect(domain).to.haveOwnProperty('version').to.equal(voucherVersion);
      expect(domain).to.haveOwnProperty('chainId').to.equal(chainId);
    });
  });

  context('#createAuthSignature', () => {
    it('should create auth signature', async () => {
      expect(await createAuthSignature(provider, secret)).to.be.a('string');
    });
  });

  context('#validateAuthSignature', () => {
    it('should throw if invalid signature', async () => {
      await expect(validateAuthSignature(provider, secret, account, '0x0')).rejectedWith(
        'signature missing v and recoveryParam'
      );
    });

    it('should throw if invalid signer', async () => {
      const invalidSigner = signers[1];
      const invalidSignerAddress = await invalidSigner.getAddress();
      await expect(validateAuthSignature(provider, secret, invalidSignerAddress, signature)).rejectedWith(
        'Wrong authentication voucher signer address'
      );
    });

    it('should validate signature', async () => {
      await expect(validateAuthSignature(provider, secret, account, signature)).to.not.rejected;
    });
  });
});
