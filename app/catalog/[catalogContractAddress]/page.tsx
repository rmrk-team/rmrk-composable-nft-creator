'use client';

import type { Address } from 'abitype';
import * as Alert from 'components/park-ui/alert';
import { Heading } from 'components/park-ui/heading';
import { AlertCircle } from 'lucide-react';
import React from 'react';
import { Box, VStack } from 'styled-system/jsx';

type Props = {
  params: {
    catalogContractAddress?: Address;
  };
};

export default function CatalogEditPage({
  params: { catalogContractAddress },
}: Props) {
  if (!catalogContractAddress) {
    return (
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1">RMRK Catalog creator</Heading>
        <Alert.Root>
          <Alert.Icon asChild>
            <AlertCircle />
          </Alert.Icon>
          <Alert.Title>Invalid contract address</Alert.Title>
        </Alert.Root>
      </VStack>
    );
  }

  return (
    <VStack gap="8" width="100%" flex={1}>
      <Heading as="h1">Manage catalog {catalogContractAddress}</Heading>

      <Box width={['100%', undefined, undefined, 'xl']}>
        TODO: Catalog edit form: "add parts and add whitelisted collections to
        slot parts"
      </Box>
    </VStack>
  );
}
