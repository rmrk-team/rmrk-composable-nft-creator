export const RMRKCatalogFactoryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'catalog',
        type: 'address',
      },
    ],
    name: 'CatalogDeployed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'metadataURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'type_',
        type: 'string',
      },
    ],
    name: 'deployCatalog',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getDeployerCatalogAtIndex',
    outputs: [
      {
        internalType: 'address',
        name: 'catalogAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
    ],
    name: 'getDeployerCatalogs',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
    ],
    name: 'getLastDeployerCatalog',
    outputs: [
      {
        internalType: 'address',
        name: 'catalogAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'deployer',
        type: 'address',
      },
    ],
    name: 'getTotalDeployerCatalogs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'total',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
