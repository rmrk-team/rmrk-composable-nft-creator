import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import type { Transport } from 'viem';
import { http, createConfig } from 'wagmi';
import {
  astar,
  astarZkEVM,
  base,
  baseSepolia,
  bob,
  moonbeam,
  polygon,
} from 'wagmi/chains';

// const productionChains = [base] as const;
const productionChains = [
  base,
  polygon,
  moonbeam,
  astar,
  astarZkEVM,
  bob,
] as const;
const testnetChains = [baseSepolia] as const;
export const allSupportedChains = [
  ...productionChains,
  ...testnetChains,
] as const;

export type SupportedChainId = (typeof allSupportedChains)[number]['id'];

const WALLET_CONNECT_PROJECT_ID = 'b516f1bf510e8c7ce518c43f57aaf7e0';

export const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    projectId: WALLET_CONNECT_PROJECT_ID,
    appName: 'RMRK Composable NFT creator',
  },
);

export const chains = allSupportedChains;

const transports: Record<number, Transport> = {};

for (const chain of allSupportedChains) {
  transports[chain.id] = http();
}

export const wagmiConfig = createConfig({
  ssr: true,
  chains,
  transports,
  connectors,
});
