import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CryptophunksV4',
  tokenName: 'CryptophunksV4',
  tokenSymbol: 'CP4',
  hiddenMetadataUri: 'ipfs://QmZMPZ4ANbiz9NPjSRgAnN2QRszoCx1oPQZNs6tSxP9wLF/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.005,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x25e1ddB7212a6d7942f414E2beAfe2eBB02b5488",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
