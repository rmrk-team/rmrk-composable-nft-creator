'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RMRKContextProvider } from '@rmrk-team/rmrk-hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'components/app/wagmi-provider';
import React from 'react';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RMRKContextProvider>{children}</RMRKContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
