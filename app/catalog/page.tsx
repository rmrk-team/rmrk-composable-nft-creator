'use client';

import { RMRKCatalogImpl } from '@rmrk-team/rmrk-evm-utils';
import Page from 'components/app/page';
import {
  DeployCatalogForm,
  type DeployCatalogFormFields,
} from 'components/catalog/deploy-catalog/deploy-catalog-form';
import { Heading } from 'components/park-ui/heading';
import React from 'react';
import { Box, Center, Container, VStack } from 'styled-system/jsx';
import { useWalletClient } from 'wagmi';

export default function CatalogLandingPage() {
  const { data: walletClient } = useWalletClient();

  const onSubmit = async (deployCatalogFormFields: DeployCatalogFormFields) => {
    //TODO: upload metadata to IPFS
    const hash = await walletClient?.deployContract({
      abi: RMRKCatalogImpl,
      bytecode: landscapesJson.bytecode as `0x${string}`,
      args: [],
    });
  };
  return (
    <VStack gap="8" width="100%" flex={1}>
      <Heading as="h1">RMRK Catalog creator</Heading>

      <Box width={['100%', undefined, undefined, 'xl']}>
        <DeployCatalogForm onSubmit={(values) => console.log(values)} />
      </Box>
    </VStack>
  );
}
