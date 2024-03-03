import { defineConfig } from '@wagmi/cli';
import { actions, foundry, hardhat } from '@wagmi/cli/plugins';
import { RMRKCatalogFactoryContractAddress } from 'lib/consts/contract-addresses';
import { baseSepolia } from 'wagmi/chains';

type FoundryConfigDeployments = {
  [p: string]: `0x${string}` | Record<number, `0x${string}`> | undefined;
};

const rmrkCatalogFactoryConfigDeployments: FoundryConfigDeployments = {
  RMRKCatalogFactory: {
    [baseSepolia.id]: RMRKCatalogFactoryContractAddress[baseSepolia.id],
  },
};

export default defineConfig({
  out: 'lib/abis.ts',
  contracts: [],
  plugins: [
    actions(),
    foundry({
      project: '/foundry',
      deployments: rmrkCatalogFactoryConfigDeployments,
    }),
  ],
});
