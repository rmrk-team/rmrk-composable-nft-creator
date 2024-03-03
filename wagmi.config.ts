import { defineConfig } from '@wagmi/cli';
import { actions, foundry } from '@wagmi/cli/plugins';
import { RMRKCatalogFactoryContractAddress } from 'lib/consts/contract-addresses';
import { baseSepolia, sepolia } from 'wagmi/chains';

type FoundryConfigDeployments = {
  [p: string]: `0x${string}` | Record<number, `0x${string}`> | undefined;
};

const rmrkConfigDeployments: FoundryConfigDeployments = {
  RMRKCatalogFactory: {
    [baseSepolia.id]: RMRKCatalogFactoryContractAddress[baseSepolia.id],
    [sepolia.id]: RMRKCatalogFactoryContractAddress[sepolia.id],
  },
  // RMRKEquipRenderUtils: {
  //   [baseSepolia.id]: RMRKCatalogFactoryContractAddress[baseSepolia.id],
  // },
};

export default defineConfig({
  out: 'lib/wagmi/generated.ts',
  contracts: [],
  plugins: [
    actions(),
    foundry({
      project: 'contracts',
      deployments: rmrkConfigDeployments,
      include: [
        // the following patterns are included by default
        'RMRKCatalogImpl.json',
        'RMRKCatalogFactory.json',
        'RMRKEquipRenderUtils.json',
      ],
    }),
  ],
});
