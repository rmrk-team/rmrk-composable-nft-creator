import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RMRKCatalogFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const rmrkCatalogFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'metadataURI', internalType: 'string', type: 'string' },
      { name: 'type_', internalType: 'string', type: 'string' },
    ],
    name: 'deployCatalog',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getDeployerCatalogAtIndex',
    outputs: [
      { name: 'catalogAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'deployer', internalType: 'address', type: 'address' }],
    name: 'getDeployerCatalogs',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'deployer', internalType: 'address', type: 'address' }],
    name: 'getLastDeployerCatalog',
    outputs: [
      { name: 'catalogAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'deployer', internalType: 'address', type: 'address' }],
    name: 'getTotalDeployerCatalogs',
    outputs: [{ name: 'total', internalType: 'uint256', type: 'uint256' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'deployer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'catalog',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CatalogDeployed',
  },
] as const;

/**
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const rmrkCatalogFactoryAddress = {
  84532: '0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80',
  11155111: '0x4E80834c7c84881578F875d048C157f8FD3211F3',
} as const;

/**
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const rmrkCatalogFactoryConfig = {
  address: rmrkCatalogFactoryAddress,
  abi: rmrkCatalogFactoryAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RMRKCatalogImpl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rmrkCatalogImplAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'metadataURI', internalType: 'string', type: 'string' },
      { name: 'type_', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'equippableAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'addEquippableAddresses',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'intakeStruct',
        internalType: 'struct IRMRKCatalog.IntakeStruct',
        type: 'tuple',
        components: [
          { name: 'partId', internalType: 'uint64', type: 'uint64' },
          {
            name: 'part',
            internalType: 'struct IRMRKCatalog.Part',
            type: 'tuple',
            components: [
              {
                name: 'itemType',
                internalType: 'enum IRMRKCatalog.ItemType',
                type: 'uint8',
              },
              { name: 'z', internalType: 'uint8', type: 'uint8' },
              {
                name: 'equippable',
                internalType: 'address[]',
                type: 'address[]',
              },
              { name: 'metadataURI', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    name: 'addPart',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'intakeStructs',
        internalType: 'struct IRMRKCatalog.IntakeStruct[]',
        type: 'tuple[]',
        components: [
          { name: 'partId', internalType: 'uint64', type: 'uint64' },
          {
            name: 'part',
            internalType: 'struct IRMRKCatalog.Part',
            type: 'tuple',
            components: [
              {
                name: 'itemType',
                internalType: 'enum IRMRKCatalog.ItemType',
                type: 'uint8',
              },
              { name: 'z', internalType: 'uint8', type: 'uint8' },
              {
                name: 'equippable',
                internalType: 'address[]',
                type: 'address[]',
              },
              { name: 'metadataURI', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    name: 'addPartList',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64' },
      { name: 'targetAddress', internalType: 'address', type: 'address' },
    ],
    name: 'checkIsEquippable',
    outputs: [{ name: 'isEquippable', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'partId', internalType: 'uint64', type: 'uint64' }],
    name: 'checkIsEquippableToAll',
    outputs: [{ name: 'isEquippable', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllPartIds',
    outputs: [{ name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getLock',
    outputs: [{ name: 'isLocked', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMetadataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPaginatedPartIds',
    outputs: [{ name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'partId', internalType: 'uint64', type: 'uint64' }],
    name: 'getPart',
    outputs: [
      {
        name: 'part',
        internalType: 'struct IRMRKCatalog.Part',
        type: 'tuple',
        components: [
          {
            name: 'itemType',
            internalType: 'enum IRMRKCatalog.ItemType',
            type: 'uint8',
          },
          { name: 'z', internalType: 'uint8', type: 'uint8' },
          { name: 'equippable', internalType: 'address[]', type: 'address[]' },
          { name: 'metadataURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getPartByIndex',
    outputs: [
      {
        name: 'part',
        internalType: 'struct IRMRKCatalog.Part',
        type: 'tuple',
        components: [
          {
            name: 'itemType',
            internalType: 'enum IRMRKCatalog.ItemType',
            type: 'uint8',
          },
          { name: 'z', internalType: 'uint8', type: 'uint8' },
          { name: 'equippable', internalType: 'address[]', type: 'address[]' },
          { name: 'metadataURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' }],
    name: 'getParts',
    outputs: [
      {
        name: 'parts',
        internalType: 'struct IRMRKCatalog.Part[]',
        type: 'tuple[]',
        components: [
          {
            name: 'itemType',
            internalType: 'enum IRMRKCatalog.ItemType',
            type: 'uint8',
          },
          { name: 'z', internalType: 'uint8', type: 'uint8' },
          { name: 'equippable', internalType: 'address[]', type: 'address[]' },
          { name: 'metadataURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getTotalParts',
    outputs: [{ name: 'totalParts', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getType',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'contributor', internalType: 'address', type: 'address' }],
    name: 'isContributor',
    outputs: [{ name: 'isContributor_', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'contributor', internalType: 'address', type: 'address' },
      { name: 'grantRole', internalType: 'bool', type: 'bool' },
    ],
    name: 'manageContributor',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'owner_', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'partId', internalType: 'uint64', type: 'uint64' }],
    name: 'resetEquippableAddresses',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64' },
      {
        name: 'equippableAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'setEquippableAddresses',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'partId', internalType: 'uint64', type: 'uint64' }],
    name: 'setEquippableToAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'setLock',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newContractURI', internalType: 'string', type: 'string' },
    ],
    name: 'setMetadataURI',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newType', internalType: 'string', type: 'string' }],
    name: 'setType',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'equippableAddresses',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'AddedEquippables',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'itemType',
        internalType: 'enum IRMRKCatalog.ItemType',
        type: 'uint8',
        indexed: true,
      },
      { name: 'zIndex', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'equippableAddresses',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'metadataURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'AddedPart',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'ContractURIUpdated' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'contributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isContributor',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ContributorUpdate',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'LockSet' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64', indexed: true },
    ],
    name: 'SetEquippableToAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'partId', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'equippableAddresses',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'SetEquippables',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newType',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'TypeUpdated',
  },
  { type: 'error', inputs: [], name: 'RMRKBadConfig' },
  { type: 'error', inputs: [], name: 'RMRKIdZeroForbidden' },
  { type: 'error', inputs: [], name: 'RMRKLocked' },
  { type: 'error', inputs: [], name: 'RMRKNewContributorIsZeroAddress' },
  { type: 'error', inputs: [], name: 'RMRKNewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'RMRKNotOwner' },
  { type: 'error', inputs: [], name: 'RMRKNotOwnerOrContributor' },
  { type: 'error', inputs: [], name: 'RMRKPartAlreadyExists' },
  { type: 'error', inputs: [], name: 'RMRKPartDoesNotExist' },
  { type: 'error', inputs: [], name: 'RMRKPartIsNotSlot' },
  { type: 'error', inputs: [], name: 'RMRKZeroLengthIdsPassed' },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RMRKEquipRenderUtils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rmrkEquipRenderUtilsAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedParent', internalType: 'address', type: 'address' },
      { name: 'expectedParentId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkExpectedParent',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'assetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'composeEquippables',
    outputs: [
      { name: 'metadataURI', internalType: 'string', type: 'string' },
      { name: 'equippableGroupId', internalType: 'uint64', type: 'uint64' },
      { name: 'catalogAddress', internalType: 'address', type: 'address' },
      {
        name: 'fixedParts',
        internalType: 'struct RMRKEquipRenderUtils.FixedPart[]',
        type: 'tuple[]',
        components: [
          { name: 'partId', internalType: 'uint64', type: 'uint64' },
          { name: 'z', internalType: 'uint8', type: 'uint8' },
          { name: 'metadataURI', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'slotParts',
        internalType: 'struct RMRKEquipRenderUtils.EquippedSlotPart[]',
        type: 'tuple[]',
        components: [
          { name: 'partId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'z', internalType: 'uint8', type: 'uint8' },
          { name: 'childAddress', internalType: 'address', type: 'address' },
          { name: 'childId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'childAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
          { name: 'partMetadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'directOwnerOfWithParentsPerspective',
    outputs: [
      { name: 'directOwner', internalType: 'address', type: 'address' },
      { name: 'ownerId', internalType: 'uint256', type: 'uint256' },
      { name: 'isNFT', internalType: 'bool', type: 'bool' },
      { name: 'inParentsActiveChildren', internalType: 'bool', type: 'bool' },
      { name: 'inParentsPendingChildren', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'equippedChildrenOf',
    outputs: [
      {
        name: 'equippedChildren',
        internalType: 'struct IERC6220.Equipment[]',
        type: 'tuple[]',
        components: [
          { name: 'assetId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'childId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'childEquippableAddress',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'targetChild', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'onlyEquipped', internalType: 'bool', type: 'bool' },
    ],
    name: 'getAllEquippableSlotsFromParent',
    outputs: [
      { name: 'childIndex', internalType: 'uint256', type: 'uint256' },
      {
        name: 'equippableData',
        internalType: 'struct RMRKEquipRenderUtils.EquippableData[]',
        type: 'tuple[]',
        components: [
          { name: 'slotPartId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          {
            name: 'parentCatalogAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'isEquipped', internalType: 'bool', type: 'bool' },
          { name: 'partMetadata', internalType: 'string', type: 'string' },
          {
            name: 'childAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'parentAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAssetIdWithTopPriority',
    outputs: [
      { name: 'maxPriorityAssetId', internalType: 'uint64', type: 'uint64' },
      { name: 'maxPriority', internalType: 'uint64', type: 'uint64' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'assetIds', internalType: 'uint64[]', type: 'uint64[]' },
    ],
    name: 'getAssetsById',
    outputs: [{ name: 'assets', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getChildIndex',
    outputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getChildrenWithTopMetadata',
    outputs: [
      {
        name: 'childrenWithMetadata',
        internalType: 'struct RMRKEquipRenderUtils.ChildWithTopAssetMetadata[]',
        type: 'tuple[]',
        components: [
          { name: 'contractAddress', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getEquippableSlotsFromParent',
    outputs: [
      {
        name: 'equippableData',
        internalType: 'struct RMRKEquipRenderUtils.EquippableData[]',
        type: 'tuple[]',
        components: [
          { name: 'slotPartId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          {
            name: 'parentCatalogAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'isEquipped', internalType: 'bool', type: 'bool' },
          { name: 'partMetadata', internalType: 'string', type: 'string' },
          {
            name: 'childAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'parentAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'targetChild', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getEquippableSlotsFromParent',
    outputs: [
      { name: 'childIndex', internalType: 'uint256', type: 'uint256' },
      {
        name: 'equippableData',
        internalType: 'struct RMRKEquipRenderUtils.EquippableData[]',
        type: 'tuple[]',
        components: [
          { name: 'slotPartId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          {
            name: 'parentCatalogAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'isEquipped', internalType: 'bool', type: 'bool' },
          { name: 'partMetadata', internalType: 'string', type: 'string' },
          {
            name: 'childAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'parentAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'targetChild', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getEquippableSlotsFromParentForPendingChild',
    outputs: [
      { name: 'childIndex', internalType: 'uint256', type: 'uint256' },
      {
        name: 'equippableData',
        internalType: 'struct RMRKEquipRenderUtils.EquippableData[]',
        type: 'tuple[]',
        components: [
          { name: 'slotPartId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'parentAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          {
            name: 'parentCatalogAddress',
            internalType: 'address',
            type: 'address',
          },
          { name: 'isEquipped', internalType: 'bool', type: 'bool' },
          { name: 'partMetadata', internalType: 'string', type: 'string' },
          {
            name: 'childAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
          {
            name: 'parentAssetMetadata',
            internalType: 'string',
            type: 'string',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'assetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getEquipped',
    outputs: [
      { name: 'slotPartIds', internalType: 'uint64[]', type: 'uint64[]' },
      {
        name: 'childrenEquipped',
        internalType: 'struct IERC6220.Equipment[]',
        type: 'tuple[]',
        components: [
          { name: 'assetId', internalType: 'uint64', type: 'uint64' },
          { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
          { name: 'childId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'childEquippableAddress',
            internalType: 'address',
            type: 'address',
          },
        ],
      },
      {
        name: 'childrenAssetMetadata',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getExtendedActiveAssets',
    outputs: [
      {
        name: 'activeAssets',
        internalType: 'struct RMRKMultiAssetRenderUtils.ExtendedActiveAsset[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getExtendedEquippableActiveAssets',
    outputs: [
      {
        name: 'activeAssets',
        internalType:
          'struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'equippableGroupId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          { name: 'catalogAddress', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'targetCollection', internalType: 'address', type: 'address' },
    ],
    name: 'getExtendedNft',
    outputs: [
      {
        name: 'data',
        internalType: 'struct RMRKRenderUtils.ExtendedNft',
        type: 'tuple',
        components: [
          { name: 'tokenMetadataUri', internalType: 'string', type: 'string' },
          { name: 'directOwner', internalType: 'address', type: 'address' },
          { name: 'rootOwner', internalType: 'address', type: 'address' },
          {
            name: 'activeAssetCount',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'pendingAssetCount',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'priorities', internalType: 'uint64[]', type: 'uint64[]' },
          { name: 'maxSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'issuer', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          {
            name: 'activeChildrenNumber',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'pendingChildrenNumber',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'isSoulbound', internalType: 'bool', type: 'bool' },
          {
            name: 'hasMultiAssetInterface',
            internalType: 'bool',
            type: 'bool',
          },
          { name: 'hasNestingInterface', internalType: 'bool', type: 'bool' },
          {
            name: 'hasEquippableInterface',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getExtendedPendingAssets',
    outputs: [
      {
        name: 'pendingAssets',
        internalType: 'struct RMRKEquipRenderUtils.ExtendedPendingAsset[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'equippableGroupId', internalType: 'uint64', type: 'uint64' },
          {
            name: 'acceptRejectIndex',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'replacesAssetWithId',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'catalogAddress', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getParent',
    outputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPendingAssets',
    outputs: [
      {
        name: 'pendingAssets',
        internalType: 'struct RMRKMultiAssetRenderUtils.PendingAsset[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          {
            name: 'acceptRejectIndex',
            internalType: 'uint128',
            type: 'uint128',
          },
          {
            name: 'replacesAssetWithId',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPendingChildIndex',
    outputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'assetId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'getSlotPartsAndCatalog',
    outputs: [
      { name: 'parentSlotPartIds', internalType: 'uint64[]', type: 'uint64[]' },
      { name: 'catalogAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTopAsset',
    outputs: [
      { name: 'topAssetId', internalType: 'uint64', type: 'uint64' },
      { name: 'topAssetPriority', internalType: 'uint64', type: 'uint64' },
      { name: 'topAssetMetadata', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTopAssetAndEquippableDataForToken',
    outputs: [
      {
        name: 'topAsset',
        internalType:
          'struct RMRKEquipRenderUtils.ExtendedEquippableActiveAsset',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint64', type: 'uint64' },
          { name: 'equippableGroupId', internalType: 'uint64', type: 'uint64' },
          { name: 'priority', internalType: 'uint64', type: 'uint64' },
          { name: 'catalogAddress', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'partIds', internalType: 'uint64[]', type: 'uint64[]' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTopAssetMetaForToken',
    outputs: [{ name: 'metadata', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getTopAssetMetadataForTokens',
    outputs: [{ name: 'metadata', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTotalDescendants',
    outputs: [
      { name: 'totalDescendants', internalType: 'uint256', type: 'uint256' },
      {
        name: 'hasMoreThanOneLevelOfNesting_',
        internalType: 'bool',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasMoreThanOneLevelOfNesting',
    outputs: [
      {
        name: 'hasMoreThanOneLevelOfNesting_',
        internalType: 'bool',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'parentAssetCatalog', internalType: 'address', type: 'address' },
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
      { name: 'childAssetId', internalType: 'uint64', type: 'uint64' },
      { name: 'slotPartId', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'isAssetEquipped',
    outputs: [{ name: 'isEquipped', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'collection', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isTokenRejectedOrAbandoned',
    outputs: [
      { name: 'isRejectedOrAbandoned', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'allPartIds', internalType: 'uint64[]', type: 'uint64[]' },
      { name: 'catalogAddress', internalType: 'address', type: 'address' },
    ],
    name: 'splitSlotAndFixedParts',
    outputs: [
      { name: 'slotPartIds', internalType: 'uint64[]', type: 'uint64[]' },
      { name: 'fixedPartIds', internalType: 'uint64[]', type: 'uint64[]' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'childAddress', internalType: 'address', type: 'address' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'childId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'validateChildOf',
    outputs: [{ name: 'validChild', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'parentAddress', internalType: 'address', type: 'address' },
      { name: 'childAddresses', internalType: 'address[]', type: 'address[]' },
      { name: 'parentId', internalType: 'uint256', type: 'uint256' },
      { name: 'childIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'validateChildrenOf',
    outputs: [
      { name: 'isValid', internalType: 'bool', type: 'bool' },
      { name: 'validityOfChildren', internalType: 'bool[]', type: 'bool[]' },
    ],
  },
  { type: 'error', inputs: [], name: 'RMRKChildNotFoundInParent' },
  { type: 'error', inputs: [], name: 'RMRKMismachedArrayLength' },
  { type: 'error', inputs: [], name: 'RMRKNotComposableAsset' },
  { type: 'error', inputs: [], name: 'RMRKParentIsNotNFT' },
  { type: 'error', inputs: [], name: 'RMRKTokenHasNoAssets' },
  { type: 'error', inputs: [], name: 'RMRKUnexpectedParent' },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const readRmrkCatalogFactory = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogFactoryAbi,
  address: rmrkCatalogFactoryAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"getDeployerCatalogAtIndex"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const readRmrkCatalogFactoryGetDeployerCatalogAtIndex =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'getDeployerCatalogAtIndex',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"getDeployerCatalogs"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const readRmrkCatalogFactoryGetDeployerCatalogs =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'getDeployerCatalogs',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"getLastDeployerCatalog"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const readRmrkCatalogFactoryGetLastDeployerCatalog =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'getLastDeployerCatalog',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"getTotalDeployerCatalogs"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const readRmrkCatalogFactoryGetTotalDeployerCatalogs =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'getTotalDeployerCatalogs',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const writeRmrkCatalogFactory = /*#__PURE__*/ createWriteContract({
  abi: rmrkCatalogFactoryAbi,
  address: rmrkCatalogFactoryAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"deployCatalog"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const writeRmrkCatalogFactoryDeployCatalog =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'deployCatalog',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const simulateRmrkCatalogFactory = /*#__PURE__*/ createSimulateContract({
  abi: rmrkCatalogFactoryAbi,
  address: rmrkCatalogFactoryAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `functionName` set to `"deployCatalog"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const simulateRmrkCatalogFactoryDeployCatalog =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    functionName: 'deployCatalog',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const watchRmrkCatalogFactoryEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogFactoryAbi}__ and `eventName` set to `"CatalogDeployed"`
 *
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x6f5BCEE387da9D44d6E16E46095D50F9c6006e80)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4E80834c7c84881578F875d048C157f8FD3211F3)
 */
export const watchRmrkCatalogFactoryCatalogDeployedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogFactoryAbi,
    address: rmrkCatalogFactoryAddress,
    eventName: 'CatalogDeployed',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__
 */
export const readRmrkCatalogImpl = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"checkIsEquippable"`
 */
export const readRmrkCatalogImplCheckIsEquippable =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'checkIsEquippable',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"checkIsEquippableToAll"`
 */
export const readRmrkCatalogImplCheckIsEquippableToAll =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'checkIsEquippableToAll',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getAllPartIds"`
 */
export const readRmrkCatalogImplGetAllPartIds =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'getAllPartIds',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getLock"`
 */
export const readRmrkCatalogImplGetLock = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'getLock',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getMetadataURI"`
 */
export const readRmrkCatalogImplGetMetadataUri =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'getMetadataURI',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getPaginatedPartIds"`
 */
export const readRmrkCatalogImplGetPaginatedPartIds =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'getPaginatedPartIds',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getPart"`
 */
export const readRmrkCatalogImplGetPart = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'getPart',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getPartByIndex"`
 */
export const readRmrkCatalogImplGetPartByIndex =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'getPartByIndex',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getParts"`
 */
export const readRmrkCatalogImplGetParts = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'getParts',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getTotalParts"`
 */
export const readRmrkCatalogImplGetTotalParts =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'getTotalParts',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"getType"`
 */
export const readRmrkCatalogImplGetType = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'getType',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"isContributor"`
 */
export const readRmrkCatalogImplIsContributor =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'isContributor',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"owner"`
 */
export const readRmrkCatalogImplOwner = /*#__PURE__*/ createReadContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'owner',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readRmrkCatalogImplSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__
 */
export const writeRmrkCatalogImpl = /*#__PURE__*/ createWriteContract({
  abi: rmrkCatalogImplAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addEquippableAddresses"`
 */
export const writeRmrkCatalogImplAddEquippableAddresses =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'addEquippableAddresses',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addPart"`
 */
export const writeRmrkCatalogImplAddPart = /*#__PURE__*/ createWriteContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'addPart',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addPartList"`
 */
export const writeRmrkCatalogImplAddPartList =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'addPartList',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"manageContributor"`
 */
export const writeRmrkCatalogImplManageContributor =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'manageContributor',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeRmrkCatalogImplRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"resetEquippableAddresses"`
 */
export const writeRmrkCatalogImplResetEquippableAddresses =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'resetEquippableAddresses',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setEquippableAddresses"`
 */
export const writeRmrkCatalogImplSetEquippableAddresses =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setEquippableAddresses',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setEquippableToAll"`
 */
export const writeRmrkCatalogImplSetEquippableToAll =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setEquippableToAll',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setLock"`
 */
export const writeRmrkCatalogImplSetLock = /*#__PURE__*/ createWriteContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'setLock',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const writeRmrkCatalogImplSetMetadataUri =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setMetadataURI',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setType"`
 */
export const writeRmrkCatalogImplSetType = /*#__PURE__*/ createWriteContract({
  abi: rmrkCatalogImplAbi,
  functionName: 'setType',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeRmrkCatalogImplTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__
 */
export const simulateRmrkCatalogImpl = /*#__PURE__*/ createSimulateContract({
  abi: rmrkCatalogImplAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addEquippableAddresses"`
 */
export const simulateRmrkCatalogImplAddEquippableAddresses =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'addEquippableAddresses',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addPart"`
 */
export const simulateRmrkCatalogImplAddPart =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'addPart',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"addPartList"`
 */
export const simulateRmrkCatalogImplAddPartList =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'addPartList',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"manageContributor"`
 */
export const simulateRmrkCatalogImplManageContributor =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'manageContributor',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateRmrkCatalogImplRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"resetEquippableAddresses"`
 */
export const simulateRmrkCatalogImplResetEquippableAddresses =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'resetEquippableAddresses',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setEquippableAddresses"`
 */
export const simulateRmrkCatalogImplSetEquippableAddresses =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setEquippableAddresses',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setEquippableToAll"`
 */
export const simulateRmrkCatalogImplSetEquippableToAll =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setEquippableToAll',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setLock"`
 */
export const simulateRmrkCatalogImplSetLock =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setLock',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const simulateRmrkCatalogImplSetMetadataUri =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setMetadataURI',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"setType"`
 */
export const simulateRmrkCatalogImplSetType =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'setType',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateRmrkCatalogImplTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: rmrkCatalogImplAbi,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__
 */
export const watchRmrkCatalogImplEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: rmrkCatalogImplAbi },
);

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"AddedEquippables"`
 */
export const watchRmrkCatalogImplAddedEquippablesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'AddedEquippables',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"AddedPart"`
 */
export const watchRmrkCatalogImplAddedPartEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'AddedPart',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"ContractURIUpdated"`
 */
export const watchRmrkCatalogImplContractUriUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'ContractURIUpdated',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"ContributorUpdate"`
 */
export const watchRmrkCatalogImplContributorUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'ContributorUpdate',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"LockSet"`
 */
export const watchRmrkCatalogImplLockSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'LockSet',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchRmrkCatalogImplOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'OwnershipTransferred',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"SetEquippableToAll"`
 */
export const watchRmrkCatalogImplSetEquippableToAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'SetEquippableToAll',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"SetEquippables"`
 */
export const watchRmrkCatalogImplSetEquippablesEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'SetEquippables',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rmrkCatalogImplAbi}__ and `eventName` set to `"TypeUpdated"`
 */
export const watchRmrkCatalogImplTypeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rmrkCatalogImplAbi,
    eventName: 'TypeUpdated',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__
 */
export const readRmrkEquipRenderUtils = /*#__PURE__*/ createReadContract({
  abi: rmrkEquipRenderUtilsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"checkExpectedParent"`
 */
export const readRmrkEquipRenderUtilsCheckExpectedParent =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'checkExpectedParent',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"composeEquippables"`
 */
export const readRmrkEquipRenderUtilsComposeEquippables =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'composeEquippables',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"directOwnerOfWithParentsPerspective"`
 */
export const readRmrkEquipRenderUtilsDirectOwnerOfWithParentsPerspective =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'directOwnerOfWithParentsPerspective',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"equippedChildrenOf"`
 */
export const readRmrkEquipRenderUtilsEquippedChildrenOf =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'equippedChildrenOf',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getAllEquippableSlotsFromParent"`
 */
export const readRmrkEquipRenderUtilsGetAllEquippableSlotsFromParent =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getAllEquippableSlotsFromParent',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getAssetIdWithTopPriority"`
 */
export const readRmrkEquipRenderUtilsGetAssetIdWithTopPriority =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getAssetIdWithTopPriority',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getAssetsById"`
 */
export const readRmrkEquipRenderUtilsGetAssetsById =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getAssetsById',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getChildIndex"`
 */
export const readRmrkEquipRenderUtilsGetChildIndex =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getChildIndex',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getChildrenWithTopMetadata"`
 */
export const readRmrkEquipRenderUtilsGetChildrenWithTopMetadata =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getChildrenWithTopMetadata',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getEquippableSlotsFromParent"`
 */
export const readRmrkEquipRenderUtilsGetEquippableSlotsFromParent =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getEquippableSlotsFromParent',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getEquippableSlotsFromParentForPendingChild"`
 */
export const readRmrkEquipRenderUtilsGetEquippableSlotsFromParentForPendingChild =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getEquippableSlotsFromParentForPendingChild',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getEquipped"`
 */
export const readRmrkEquipRenderUtilsGetEquipped =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getEquipped',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getExtendedActiveAssets"`
 */
export const readRmrkEquipRenderUtilsGetExtendedActiveAssets =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getExtendedActiveAssets',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getExtendedEquippableActiveAssets"`
 */
export const readRmrkEquipRenderUtilsGetExtendedEquippableActiveAssets =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getExtendedEquippableActiveAssets',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getExtendedNft"`
 */
export const readRmrkEquipRenderUtilsGetExtendedNft =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getExtendedNft',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getExtendedPendingAssets"`
 */
export const readRmrkEquipRenderUtilsGetExtendedPendingAssets =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getExtendedPendingAssets',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getParent"`
 */
export const readRmrkEquipRenderUtilsGetParent =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getParent',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getPendingAssets"`
 */
export const readRmrkEquipRenderUtilsGetPendingAssets =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getPendingAssets',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getPendingChildIndex"`
 */
export const readRmrkEquipRenderUtilsGetPendingChildIndex =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getPendingChildIndex',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getSlotPartsAndCatalog"`
 */
export const readRmrkEquipRenderUtilsGetSlotPartsAndCatalog =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getSlotPartsAndCatalog',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getTopAsset"`
 */
export const readRmrkEquipRenderUtilsGetTopAsset =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getTopAsset',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getTopAssetAndEquippableDataForToken"`
 */
export const readRmrkEquipRenderUtilsGetTopAssetAndEquippableDataForToken =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getTopAssetAndEquippableDataForToken',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getTopAssetMetaForToken"`
 */
export const readRmrkEquipRenderUtilsGetTopAssetMetaForToken =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getTopAssetMetaForToken',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getTopAssetMetadataForTokens"`
 */
export const readRmrkEquipRenderUtilsGetTopAssetMetadataForTokens =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getTopAssetMetadataForTokens',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"getTotalDescendants"`
 */
export const readRmrkEquipRenderUtilsGetTotalDescendants =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'getTotalDescendants',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"hasMoreThanOneLevelOfNesting"`
 */
export const readRmrkEquipRenderUtilsHasMoreThanOneLevelOfNesting =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'hasMoreThanOneLevelOfNesting',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"isAssetEquipped"`
 */
export const readRmrkEquipRenderUtilsIsAssetEquipped =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'isAssetEquipped',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"isTokenRejectedOrAbandoned"`
 */
export const readRmrkEquipRenderUtilsIsTokenRejectedOrAbandoned =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'isTokenRejectedOrAbandoned',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"splitSlotAndFixedParts"`
 */
export const readRmrkEquipRenderUtilsSplitSlotAndFixedParts =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'splitSlotAndFixedParts',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"validateChildOf"`
 */
export const readRmrkEquipRenderUtilsValidateChildOf =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'validateChildOf',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rmrkEquipRenderUtilsAbi}__ and `functionName` set to `"validateChildrenOf"`
 */
export const readRmrkEquipRenderUtilsValidateChildrenOf =
  /*#__PURE__*/ createReadContract({
    abi: rmrkEquipRenderUtilsAbi,
    functionName: 'validateChildrenOf',
  });
