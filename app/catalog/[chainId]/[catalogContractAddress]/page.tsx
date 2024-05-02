'use client';

import { RMRKCatalogUtils } from '@rmrk-team/rmrk-evm-utils';
import { useRMRKConfig } from '@rmrk-team/rmrk-hooks';
import type { Address } from 'abitype';
import { PartsManagementContainer } from 'components/catalog/parts-management/parts-management-container';
import { Loader } from 'components/common/loader';
import { getIsSupportedChainId } from 'lib/utils/get-is-supported-chain-id';
import { jsonStringifyWithBigint } from 'lib/utils/json-stringify-with-bigint';
import * as Alert from 'components/park-ui/alert';
import { Heading } from 'components/park-ui/heading';
import { Text } from 'components/park-ui/text';
import { useMediaQuery } from 'lib/hooks/use-media-query';
import { useReadRmrkCatalogImplGetPaginatedPartIds } from 'lib/wagmi/generated';
import { AlertCircle } from 'lucide-react';
import React from 'react';
import { Box, Container, Flex, Grid, VStack } from 'styled-system/jsx';
import { useChainId, useReadContract } from 'wagmi';

type Props = {
  params: {
    catalogContractAddress?: Address;
    chainId?: string;
  };
};

/**
 * TODO: There is currently no way to get all partIds of a catalog. So user returning to this page, won't be able to see existing parts, unless indexer is used (https://github.com/rmrk-team/evm/issues/259)
 * @param catalogContractAddress
 * @param chainIdFromPath
 * @constructor
 */
export default function ManageCatalogPage({
  params: { catalogContractAddress, chainId: chainIdFromPath },
}: Props) {
  const isScreenSm = useMediaQuery('(min-width: 768px)');
  const config = useRMRKConfig();
  const chainIdFromConnector = useChainId();

  const chainId = chainIdFromPath
    ? Number.parseInt(chainIdFromPath)
    : chainIdFromConnector;

  const catalogDetailsResponse = useReadContract({
    chainId,
    abi: RMRKCatalogUtils,
    address: config.utilityContracts[chainId]?.RMRKCatalogUtils,
    functionName: 'getCatalogData',
    args: catalogContractAddress ? [catalogContractAddress] : undefined,
    query: { enabled: !!chainId && !!catalogContractAddress },
  });

  const { data: catalogPartIds } = useReadRmrkCatalogImplGetPaginatedPartIds({
    chainId,
    address: catalogContractAddress,
  });

  if (!getIsSupportedChainId(chainId)) {
    return null;
  }

  if (!catalogContractAddress || !chainId) {
    return (
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1" fontWeight={600}>
          RMRK Catalog creator
        </Heading>
        <Alert.Root>
          <Alert.Icon asChild>
            <AlertCircle />
          </Alert.Icon>
          <Alert.Title>
            Invalid contract chainId or catalog address in url
          </Alert.Title>
        </Alert.Root>
      </VStack>
    );
  }

  if (catalogDetailsResponse.isLoading) {
    return (
      <Flex
        height={'100%'}
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        flexGrow={1}
      >
        <Loader size={80} />
      </Flex>
    );
  }

  if (!catalogDetailsResponse.data) {
    return null;
  }

  const [_, catalogType, catalogMetadataUri] = catalogDetailsResponse.data;

  return (
    <VStack gap="8" width="100%" flex={1}>
      <Heading as="h1" fontWeight={600}>
        Manage catalog {catalogContractAddress}
      </Heading>
      <Text>
        Please make sure that all catalog parts are of the same media type:{' '}
        {catalogType}
      </Text>

      {isScreenSm && (
        <Container>For the best experience use larger screen</Container>
      )}

      <Text>
        TODO: Catalog edit form: "add parts and add whitelisted collections to
        slot parts"
      </Text>
      <Box width="100%">
        {jsonStringifyWithBigint(catalogPartIds)}
        <Grid
          gap={[6, null, null, null, 8, 12]}
          gridTemplateColumns={['1fr', null, null, 'auto max(420px, 30%)']}
        >
          <Flex
            flexGrow={4}
            gap={[4, null, 6]}
            direction="column"
            minWidth={0}
            data-name={'catalog-parts-form-column'}
          >
            <PartsManagementContainer
              catalogAddress={catalogContractAddress}
              chainId={chainId}
            />
          </Flex>
          <Flex
            direction={'column'}
            position={'relative'}
            gap={[4, null, 6]}
            data-name={'catalog-preview-column'}
          >
            Preview will be here
          </Flex>
        </Grid>
      </Box>
    </VStack>
  );
}
