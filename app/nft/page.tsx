'use client';

import { Heading } from 'components/park-ui/heading';
import React from 'react';
import { Box, VStack } from 'styled-system/jsx';

export default function NftLandingPage() {
  return (
    <>
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1">Select RMRK NFT collection to create Composable NFTs</Heading>

        <Box>TODO: Mint NFT Landing page</Box>

        <Box>TODO: Input contract address to redirect to next page</Box>
      </VStack>
    </>
  );
}
