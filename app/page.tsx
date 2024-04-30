'use client';

import type { CollectionItem } from '@ark-ui/react';
import { EVM_NETWORKS, assertIsEvmNetwork } from '@rmrk-team/rmrk-evm-utils';
import type { ValueChangeDetails } from '@zag-js/select';
import { Button } from 'components/park-ui/button';
import { Heading } from 'components/park-ui/heading';
import { Link } from 'components/park-ui/link';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { Center, VStack } from 'styled-system/jsx';

const networkOptions = Object.values(EVM_NETWORKS).map((network) => ({
  label: network,
  value: network,
}));

export default function Home() {
  const [selectedNetwork, setSelectedNetwork] = useState<
    EVM_NETWORKS | undefined
  >();

  const changeNetwork = (item: ValueChangeDetails<CollectionItem>) => {
    assertIsEvmNetwork(item.value?.[0]);
    setSelectedNetwork(item.value?.[0]);
  };

  return (
    <VStack gap="8" width="100%" flex={1}>
      <Center flex={1}>
        <Heading as="h1" fontWeight={600}>
          Welcome to RMRK Composable NFT creator
        </Heading>
      </Center>

      <Center flex={1}>
        <Link asChild>
          <NextLink href="/catalog">
            <Button variant="solid">Create catalog</Button>
          </NextLink>
        </Link>
      </Center>
    </VStack>
  );
}
