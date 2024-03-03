'use client';

import { type Address } from 'abitype';
import {
  DeployCatalogForm,
  type DeployCatalogFormFields,
} from 'components/catalog/deploy-catalog/deploy-catalog-form';
import { DeploySuccessDialog } from 'components/catalog/deploy-catalog/deploy-success-dialog';
import { ChainSelectDropdown } from 'components/common/chain-select-dropdown';
import * as Alert from 'components/park-ui/alert';
import { Heading } from 'components/park-ui/heading';
import * as Select from 'components/park-ui/select';
import { Text } from 'components/park-ui/text';
import { pinMetadataWithFiles } from 'lib/ipfs/pin-metadata';
import { AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Box, Container, VStack } from 'styled-system/jsx';
import invariant from 'tiny-invariant';
import { useWaitForTransactionReceipt } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { writeRmrkCatalogFactoryDeployCatalog } from 'lib/wagmi/generated';
import { type SupportedChainId, wagmiConfig } from 'lib/wagmi-config';
import { getCatalogAddressFromDeployedEventLogs } from 'lib/catalog/deploy-catalog/get-catalog-address-from-deployed-event-logs';

export default function CatalogLandingPage() {
  const [hash, setHash] = useState<Address>();
  const [selectedChainId, setSelectedChainId] = useState<SupportedChainId>(
    baseSepolia.id,
  );

  const onChainSelect: Select.RootProps['onValueChange'] = (e) => {
    const selectedChainIdString = e.value?.[0];
    const chainId = selectedChainIdString
      ? (parseInt(selectedChainIdString) as SupportedChainId)
      : undefined;
    if (chainId) {
      setSelectedChainId(chainId);
    }
  };

  const {
    isLoading: isLoadingReceipt,
    data: receipt,
    isSuccess,
    isError: isErrorReceipt,
    error: errorTransaction,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const deployedCatalogAddress =
    getCatalogAddressFromDeployedEventLogs(receipt) ?? undefined;

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
      const hash = await writeRmrkCatalogFactoryDeployCatalog(wagmiConfig, {
        args: [metadataURI, type],
        chainId: selectedChainId,
      });
      console.log('Deploying catalog contract with hash:', hash);
      setHash(hash);
    } catch (e) {
      console.error(e);
    }
  };

  console.log('receipt', receipt);

  return (
    <>
      <DeploySuccessDialog
        catalogAddress={deployedCatalogAddress}
        chainId={selectedChainId}
      />

      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1">RMRK Catalog creator</Heading>

        {deployedCatalogAddress && isSuccess && (
          <Container>
            <Text>Contract deployed: {deployedCatalogAddress}</Text>
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
          <ChainSelectDropdown
            defaultValue={[selectedChainId.toString()]}
            onValueChange={onChainSelect}
          />
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
