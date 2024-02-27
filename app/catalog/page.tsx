'use client';

import { RMRKCatalogImpl } from '@rmrk-team/rmrk-evm-utils';
import type { Address } from 'abitype';
import {
  DeployCatalogForm,
  type DeployCatalogFormFields,
} from 'components/catalog/deploy-catalog/deploy-catalog-form';
import * as Alert from 'components/park-ui/alert';
import { Heading } from 'components/park-ui/heading';
import { Text } from 'components/park-ui/text';
import RMRKNFTCatalogArtifact from 'lib/contract-artifacts/RMRKNFTCatalog.json';
import { pinMetadataWithFiles } from 'lib/ipfs/pin-metadata';
import { AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Box, Container, VStack } from 'styled-system/jsx';
import invariant from 'tiny-invariant';
import { useWaitForTransactionReceipt, useWalletClient } from 'wagmi';
import { DeploySuccessDialog } from 'components/catalog/deploy-catalog/deploy-success-dialog';
import {ChainSelectDropdown} from "components/common/chain-select-dropdown";
import {baseSepolia, type Chain} from "wagmi/chains";
import * as Select from "components/park-ui/select";

export default function CatalogLandingPage() {
  const { data: walletClient } = useWalletClient();
  const [hash, setHash] = useState<Address>();
  const [selectedChainId, setSelectedChainId] = useState<Chain['id']>(baseSepolia.id);

  const onChainSelect: Select.RootProps['onValueChange'] = (e) => {
    const selectedChainIdString = e.value?.[0]
    const chainId = selectedChainIdString ? parseInt(selectedChainIdString) : undefined;
    if (chainId) {
      setSelectedChainId(chainId);
    }
  }

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
    const { type, files, name } = deployCatalogFormFields;
    //TODO: Allow user to enter metadataURI directly instead of pinning it. Same for images
    invariant(files[0]);
    const metadataURI = await pinMetadataWithFiles({
      mediaFile: files[0],
      metadataFields: { name },
    });
    try {
      setHash(undefined);
      const hash = await walletClient?.deployContract({
        abi: RMRKCatalogImpl,
        bytecode: RMRKNFTCatalogArtifact.bytecode.object as `0x${string}`,
        args: [metadataURI, type],
      });
      console.log('Deploying catalog contract with hash:', hash);
      setHash(hash);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <DeploySuccessDialog receipt={receipt} chainId={selectedChainId} />

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
          <ChainSelectDropdown defaultValue={[selectedChainId.toString()]} onValueChange={onChainSelect} />
          <DeployCatalogForm
            onSubmit={onSubmit}
            isLoading={isLoadingReceipt}
            isDisabled={isErrorReceipt || isSuccess || !selectedChainId}
          />
        </Box>
      </VStack>
    </>
  );
}
