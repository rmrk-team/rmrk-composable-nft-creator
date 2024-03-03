import { defineConfig } from '@wagmi/cli';
import { actions, hardhat, foundry } from '@wagmi/cli/plugins';
import { baseSepolia } from 'wagmi/chains';
import { RMRKCatalogFactoryContractAddress } from 'lib/consts/contract-addresses';

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
