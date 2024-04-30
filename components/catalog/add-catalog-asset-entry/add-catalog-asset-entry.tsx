import type { Address } from 'abitype';
import type { SupportedChainId } from 'lib/wagmi-config';
import React from 'react';
import { VStack } from 'styled-system/jsx';

type Props = {
  catalogAddress: Address;
  chainId: SupportedChainId;
  partIds: bigint[];
};

export const AddCatalogAssetEntry = ({
  chainId,
  catalogAddress,
  partIds,
}: Props) => {
  return <VStack gap={8} alignItems={'flex-start'} textAlign={'left'}></VStack>;
};
