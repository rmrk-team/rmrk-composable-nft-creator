'use client';

import { RMRKCatalogImpl } from '@rmrk-team/rmrk-evm-utils';
import RMRKNFTCatalogArtifact from 'lib/contract-artifacts/RMRKNFTCatalog.json';
import {
  DeployCatalogForm,
  type DeployCatalogFormFields,
} from 'components/catalog/deploy-catalog/deploy-catalog-form';
import { Heading } from 'components/park-ui/heading';
import React, { useState } from 'react';
import { Box, Container, VStack } from 'styled-system/jsx';
import { useWaitForTransactionReceipt, useWalletClient } from 'wagmi';
import type { Address } from 'abitype';
import * as Alert from 'components/park-ui/alert';
import { AlertCircle } from 'lucide-react';
import { Text } from 'components/park-ui/text';

export default function CatalogLandingPage() {
  const { data: walletClient } = useWalletClient();
  const [hash, setHash] = useState<Address>();

  const {
    isLoading: isLoadingReceipt,
    data: receipt,
    isSuccess,
    isError: isErrorReceipt,
    error: errorTransaction,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const onSubmit = async (deployCatalogFormFields: DeployCatalogFormFields) => {
    console.log('submit');
    //TODO: upload metadata to IPFS
    const metadataURI = '';
    try {
      setHash(undefined);
      const hash = await walletClient?.deployContract({
        abi: RMRKCatalogImpl,
        bytecode: RMRKNFTCatalogArtifact.bytecode.object as `0x${string}`,
        args: [metadataURI, deployCatalogFormFields.type as string],
      });
      console.log('Deploying catalog contract with hash:', hash);
      setHash(hash);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <VStack gap="8" width="100%" flex={1}>
      <Heading as="h1">RMRK Catalog creator</Heading>

      {receipt && isSuccess && (
        <Container>
          <Text>Contract deployed: {receipt.contractAddress}</Text>
        </Container>
      )}

      {errorTransaction && (
        <Alert.Root>
          <Alert.Icon asChild>
            <AlertCircle />
          </Alert.Icon>
          <Alert.Title>Something went wrong</Alert.Title>
        </Alert.Root>
      )}

      <Box width={['100%', undefined, undefined, 'xl']}>
        <DeployCatalogForm
          onSubmit={onSubmit}
          isLoading={isLoadingReceipt}
          isDisabled={isErrorReceipt || isSuccess}
        />
      </Box>
    </VStack>
  );
}
