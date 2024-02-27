'use client';

import type { Address } from 'abitype';
import * as Alert from 'components/park-ui/alert';
import { Heading } from 'components/park-ui/heading';
import { AlertCircle } from 'lucide-react';
import React from 'react';
import { Box, Container, Flex, Grid, VStack } from 'styled-system/jsx';
import { useMediaQuery } from 'lib/hooks/use-media-query';
import { useChainId, useReadContract} from "wagmi";
import {RMRKCatalogUtils} from "@rmrk-team/rmrk-evm-utils";
import {useRMRKConfig} from "@rmrk-team/rmrk-hooks";
import {Text} from "components/park-ui/text";
import {Loader} from "components/common/loader";

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
export default function ManageCatalogPage({ params: { catalogContractAddress, chainId: chainIdFromPath } }: Props) {
  const isScreenSm = useMediaQuery('(min-width: 768px)');
  const config = useRMRKConfig();
  const chainIdFromConnector = useChainId()

  const chainId = chainIdFromPath ? parseInt(chainIdFromPath) : chainIdFromConnector;

  const catalogDetailsResponse = useReadContract({
    chainId,
    abi: RMRKCatalogUtils,
    address: config.utilityContracts[chainId]?.RMRKCatalogUtils,
    functionName: 'getCatalogData',
    query: {enabled: !!chainId && !!catalogContractAddress}
  })

  if (!catalogContractAddress || !chainId) {
    return (
      <VStack gap="8" width="100%" flex={1}>
        <Heading as="h1">RMRK Catalog creator</Heading>
        <Alert.Root>
          <Alert.Icon asChild>
            <AlertCircle />
          </Alert.Icon>
          <Alert.Title>Invalid contract chainId or catalog address in url</Alert.Title>
        </Alert.Root>
      </VStack>
    );
  }

  if (catalogDetailsResponse.isLoading) {
    return (
        <Container>
          <Loader size="lg" />
        </Container>
    )
  }

  if (!catalogDetailsResponse.data) {
    return null;
  }

  const [_, catalogType, catalogMetadataUri] = catalogDetailsResponse.data;

  return (
    <VStack gap="8" width="100%" flex={1}>
      <Heading as="h1">Manage catalog {catalogContractAddress}</Heading>
      <Text>Please make sure that all catalog parts are of the same media type: {catalogType}</Text>

      {isScreenSm && <Container>For the best experience use larger screen</Container>}

      <Box width="100%">
        TODO: Catalog edit form: "add parts and add whitelisted collections to slot parts"
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
            Parts form
          </Flex>
          <Flex
            direction={'column'}
            position={'relative'}
            gap={[4, null, 6]}
            data-name={'catalog-preview-column'}
          >
            Preview
          </Flex>
        </Grid>
      </Box>
    </VStack>
  );
}
