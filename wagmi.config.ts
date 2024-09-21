import { defineConfig } from '@wagmi/cli';
import { actions, foundry, react } from '@wagmi/cli/plugins';
import { RMRKCatalogFactoryContractAddress } from 'lib/consts/contract-addresses';
import {
  astar,
  astarZkEVM,
  base,
  baseSepolia,
  bob,
  moonbeam,
  polygon,
  sepolia,
} from 'wagmi/chains';

type FoundryConfigDeployments = {
  [p: string]: `0x${string}` | Record<number, `0x${string}`> | undefined;
};

const rmrkConfigDeployments: FoundryConfigDeployments = {
  RMRKCatalogFactory: {
    [baseSepolia.id]: RMRKCatalogFactoryContractAddress[baseSepolia.id],
    [sepolia.id]: RMRKCatalogFactoryContractAddress[sepolia.id],
    [base.id]: RMRKCatalogFactoryContractAddress[base.id],
    [moonbeam.id]: RMRKCatalogFactoryContractAddress[moonbeam.id],
    [polygon.id]: RMRKCatalogFactoryContractAddress[polygon.id],
    [astarZkEVM.id]: RMRKCatalogFactoryContractAddress[astarZkEVM.id],
    [bob.id]: RMRKCatalogFactoryContractAddress[bob.id],
    [astar.id]: RMRKCatalogFactoryContractAddress[astar.id],
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
    react(),
    foundry({
      project: 'contracts',
      deployments: rmrkConfigDeployments,
      include: [
        // the following patterns are included by default
        'RMRKCatalogImpl.json',
        'RMRKCatalogFactory.json',
        'RMRKEquipRenderUtils.json',
        'RMRKCatalogUtils.json',
      ],
    }),
  ],
});
