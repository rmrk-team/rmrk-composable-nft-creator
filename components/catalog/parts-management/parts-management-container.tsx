import type { Address } from 'abitype';
import { AddNewPart } from 'components/catalog/parts-management/add-new-part';
import { PartListRow } from 'components/catalog/parts-management/part-list-row';
import { Button } from 'components/park-ui/button';
import { Heading } from 'components/park-ui/heading';
import { Skeleton } from 'components/park-ui/skeleton';
import type { SupportedChainId } from 'lib/wagmi-config';
import { useReadRmrkCatalogImplGetAllPartIds } from 'lib/wagmi/generated';
import { DiamondPlus, Plus } from 'lucide-react';
import React from 'react';
import { Box, Center, Flex, styled } from 'styled-system/jsx';

type Props = {
  catalogAddress: Address;
  chainId: SupportedChainId;
};

export const PartsManagementContainer = ({
  catalogAddress,
  chainId,
}: Props) => {
  const {
    data: allCatalogPartIds,
    isPending,
    isError,
    refetch,
  } = useReadRmrkCatalogImplGetAllPartIds({ chainId, address: catalogAddress });

  console.log('allCatalogPartIds', {
    allCatalogPartIds,
    catalogAddress,
    chainId,
    isError,
  });

  const isNoPartsYet =
    !isPending && allCatalogPartIds && allCatalogPartIds.length === 0;

  return (
    <Flex direction={'column'} gap={4}>
      <Box>
        <Heading as={'h4'}>Catalog parts</Heading>
      </Box>
      {isPending ? (
        <>
          <Skeleton isLoaded={!isPending} />
          <Skeleton isLoaded={!isPending} />
          <Skeleton isLoaded={!isPending} />
        </>
      ) : (
        <>
          <AddNewPart
            refetchAllParts={refetch}
            catalogAddress={catalogAddress}
            chainId={chainId}
            currentTotalPartIds={allCatalogPartIds?.length || 0}
          />

          {isNoPartsYet || !allCatalogPartIds ? (
            <Center>No parts yet</Center>
          ) : (
            <>
              {allCatalogPartIds.map((partId) => (
                <PartListRow
                  key={partId.toString()}
                  partId={partId}
                  chainId={chainId}
                  catalogAddress={catalogAddress}
                />
              ))}
            </>
          )}
        </>
      )}
    </Flex>
  );
};
