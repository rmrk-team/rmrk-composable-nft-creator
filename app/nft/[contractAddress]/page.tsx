'use client';

import { Heading } from 'components/park-ui/heading';
import React from 'react';
import { Box, VStack } from 'styled-system/jsx';

export default function ManageCollectionNftsPage() {
  return (
    <>
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1" fontWeight={600}>
          RMRK Composable NFT
        </Heading>

        <Box>TODO: Mint NFT form</Box>

        <Box>TODO: Add composable (catalog) asset to the NFT</Box>

        <Box>TODO: Add equippable asset to the NFT</Box>
      </VStack>
    </>
  );
}
