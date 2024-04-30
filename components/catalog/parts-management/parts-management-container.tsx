import { useRMRKConfig } from '@rmrk-team/rmrk-hooks';
import type { Address } from 'abitype';
import { AddNewPart } from 'components/catalog/parts-management/add-new-part';
import { PartListRow } from 'components/catalog/parts-management/part-list-row';
import { Button } from 'components/park-ui/button';
import * as Collapsible from 'components/park-ui/collapsible';
import { Heading } from 'components/park-ui/heading';
import { Skeleton } from 'components/park-ui/skeleton';
import type { SupportedChainId } from 'lib/wagmi-config';
import {
  useReadRmrkCatalogImplGetAllPartIds,
  useReadRmrkCatalogUtilsGetExtendedParts,
} from 'lib/wagmi/generated';
import { groupBy } from 'ramda';
import React from 'react';
import { Box, Center, Flex } from 'styled-system/jsx';

type Props = {
  catalogAddress: Address;
  chainId: SupportedChainId;
};

export const PartsManagementContainer = ({
  catalogAddress,
  chainId,
}: Props) => {
  const config = useRMRKConfig();

  const {
    data: allCatalogPartIds,
    isLoading: isLoadingPartIds,
    isError: isErrorPartIds,
    refetch,
  } = useReadRmrkCatalogImplGetAllPartIds({ chainId, address: catalogAddress });

  console.log('allCatalogPartIds', {
    allCatalogPartIds,
    catalogAddress,
    chainId,
    isErrorPartIds,
    isLoadingPartIds,
  });

  const {
    data: extendedParts,
    isLoading: isLoadingParts,
    isError: isErrorParts,
    refetch: refetchParts,
  } = useReadRmrkCatalogUtilsGetExtendedParts({
    chainId,
    address: config.utilityContracts[chainId]?.RMRKCatalogUtils,
    args: [catalogAddress, allCatalogPartIds ?? []],
    query: { enabled: !!allCatalogPartIds },
  });

  const isNoPartsYet =
    !isLoadingPartIds && allCatalogPartIds && allCatalogPartIds.length === 0;

  const isLoading = isLoadingParts || isLoadingPartIds;

  const partsGroupedByZIndex = extendedParts
    ? groupBy((part) => part.z.toString(), extendedParts)
    : undefined;

  const zIndeces = Object.keys(partsGroupedByZIndex || {});

  return (
    <Flex direction={'column'} gap={4}>
      <Box>
        <Heading as={'h4'} fontWeight={600}>
          Catalog parts
        </Heading>
      </Box>
      {isLoading ? (
        <>
          <Skeleton isLoaded={!isLoading} />
          <Skeleton isLoaded={!isLoading} />
          <Skeleton isLoaded={!isLoading} />
        </>
      ) : (
        <>
          <AddNewPart
            refetchAllParts={refetch}
            catalogAddress={catalogAddress}
            chainId={chainId}
            currentTotalPartIds={allCatalogPartIds?.length || 0}
          />

          {isNoPartsYet || !allCatalogPartIds || !extendedParts ? (
            <Center>No parts yet</Center>
          ) : (
            <>
              {zIndeces.map((zIndex) => (
                <Flex
                  direction={'column'}
                  gap={4}
                  key={`z-index-${zIndex}`}
                  bg="bg.muted"
                  p={4}
                >
                  <Collapsible.Root defaultOpen>
                    <Collapsible.Trigger asChild>
                      <Button
                        variant={'outline'}
                        colorPalette={'gray'}
                        width={'100%'}
                        size={'lg'}
                      >
                        Catalog parts layer (z-index): {zIndex}
                      </Button>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                      <Flex
                        direction={'column'}
                        gap={4}
                        p="4"
                        bg={'bg.subtle'}
                        borderRadius="l3"
                        mt="3"
                      >
                        {partsGroupedByZIndex?.[zIndex]?.map(
                          (part, partIndex) => (
                            <PartListRow
                              key={allCatalogPartIds[partIndex].toString()}
                              partId={allCatalogPartIds[partIndex]}
                              part={part}
                              chainId={chainId}
                              catalogAddress={catalogAddress}
                              refetchParts={refetchParts}
                            />
                          ),
                        )}
                      </Flex>
                    </Collapsible.Content>
                  </Collapsible.Root>
                </Flex>
              ))}
            </>
          )}
        </>
      )}
    </Flex>
  );
};
