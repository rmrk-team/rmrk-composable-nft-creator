import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import type { Transport } from 'viem';
import { http, createConfig } from 'wagmi';
import type { Chain } from 'wagmi/chains';
import { base, baseSepolia, hardhat } from 'wagmi/chains';

const productionChains = [base] as const;
const testnetChains = [baseSepolia, hardhat] as const;
export const allSupportedChains: readonly [Chain, ...Chain[]] = [
  ...productionChains,
  ...testnetChains,
];

const WALLET_CONNECT_PROJECT_ID = 'TODO';

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
