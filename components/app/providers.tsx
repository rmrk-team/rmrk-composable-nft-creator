'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  DEFAULT_IPFS_GATEWAY_KEYS,
  DEFAULT_IPFS_GATEWAY_URLS,
} from '@rmrk-team/ipfs-utils';
import { RMRKContextProvider } from '@rmrk-team/rmrk-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'components/app/wagmi-provider';
import type React from 'react';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RMRKContextProvider
            config={{
              ipfsGateway: 'https://ipfs.filebase.io',
              utilityContracts: {},
            }}
          >
            {children}
          </RMRKContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
