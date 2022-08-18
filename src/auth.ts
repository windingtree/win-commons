import { providers, utils } from 'ethers';

export interface SignatureValue {
  wallet: string;
  secret: string;
}

export interface SignatureDomain {
  name: string;
  version: string;
  chainId: number;
}

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

export const createAuthSignature = async (provider: providers.JsonRpcProvider, secret: string): Promise<string> => {
  const { chainId } = await provider.getNetwork();
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  return await signer._signTypedData(buildSignatureDomain(chainId), types, buildSignatureValue(signerAddress, secret));
};

export const validateAuthSignature = async (
  provider: providers.JsonRpcProvider,
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
