# @windingtree/win-commons

A library of common components for the Win.so project

## Getting started

```bash
yarn add @windingtree/win-commons
```

## Multisig helpers

```typescript
import { multisig } from '@windingtree/win-commons';

// Checking the address is it contract
if (multisig.isContract('<payer_address>')) {
  // run code if account is contract
}

// Trying to get owners of the wallet
const owners = await multisig.getOwners(
  '<payer_address>',
  provider // JsonRpcProvider
);
```

## Authentication signature helpers

```typescript
import { auth } from '@windingtree/win-commons';

//  Getting of auth types
auth.types;
// {
//   Voucher: [
//     { name: 'wallet', type: 'address' },
//     { name: 'secret', type: 'string' }
//   ]
// }

// Building of typed signature domain
const domain = buildSignatureDomain(1); // 1 - chain Id
// {
//   name: 'AuthVoucher',
//   version: '1',
//   chainId: 1
// }

// Building of typed signature value
const value = buildSignatureValue('<payer_address>', '<backend_secret>');

// Creation of a typed signature
const signature = await createAuthSignature(
  provider, //  Web3Provider
  '<backend_secret>'
);

// Validation of type signature
validateAuthSignature(
  provider, // JsonRpcProvider
  '<backend_secret>',
  '<payer_address>',
  '<signature_string>'
);
```

## Linting & Testing

```bash
yarn lint
yarn test
```
