'use client';

import { Heading } from 'components/park-ui/heading';
import React from 'react';
import { Box, VStack } from 'styled-system/jsx';

export default function CollectionLandingPage() {
  return (
    <>
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1" fontWeight={600}>
          RMRK Composable collection
        </Heading>

        <Box>TODO: Deploy a new RMRK Composable collection form</Box>

        <Box>
          TODO: Add composable (Catalog) asset entries to the collection
        </Box>

        <Box>TODO: Add equippable asset entries to the collection</Box>
      </VStack>
    </>
  );
}
