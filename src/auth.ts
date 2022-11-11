import type { Provider, SignatureValue, SignatureDomain } from './types';
import { utils, Wallet } from 'ethers';

// A signature types
export const types = {
  Voucher: [
    { name: 'wallet', type: 'address' },
    { name: 'secret', type: 'string' }
  ]
};

export const voucherName = 'AuthVoucher';

export const voucherVersion = '1';

// Builds a signature value object
export const buildSignatureValue = (wallet: string, secret: string): SignatureValue => ({
  wallet,
  secret
});

// Build a signature domain configuration
export const buildSignatureDomain = (chainId: number): SignatureDomain => ({
  name: voucherName,
  version: voucherVersion,
  chainId
});

export const createAuthSignature = async (provider: Provider, secret: string): Promise<string> => {
  const { chainId } = await provider.getNetwork();
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  return await signer._signTypedData(buildSignatureDomain(chainId), types, buildSignatureValue(signerAddress, secret));
};

export const createAuthSignatureWithSigner = async (
  chainId: number,
  signer: Wallet,
  secret: string
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  return await signer._signTypedData(buildSignatureDomain(chainId), types, buildSignatureValue(signerAddress, secret));
};

export const validateAuthSignature = async (
  provider: Provider,
  secret: string,
  account: string,
  signature: string
): Promise<void> => {
  const { chainId } = await provider.getNetwork();
  const signatureValue = buildSignatureValue(account, secret);
  const signerAddress = utils.verifyTypedData(buildSignatureDomain(chainId), types, signatureValue, signature);

  if (signerAddress !== utils.getAddress(signatureValue.wallet)) {
    throw new Error('Wrong authentication voucher signer address');
  }
};
