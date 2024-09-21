import type {
  RMRKCatalogImpl,
  RMRKCatalogUtils,
} from '@rmrk-team/rmrk-evm-utils';
import { useFetchIpfsMetadata, useRMRKConfig } from '@rmrk-team/rmrk-hooks';
import type {
  AbiParametersToPrimitiveTypes,
  Address,
  ExtractAbiFunction,
} from 'abitype';
import { EditPartEquippableWhitelist } from 'components/catalog/parts-management/edit-part-equippable-whitelist/edit-part-equippable-whitelist';
import { Loader } from 'components/common/loader';
import { Badge } from 'components/park-ui/badge';
import { Text } from 'components/park-ui/text';
import type { SupportedChainId } from 'lib/wagmi-config';
import React from 'react';
import { Box, Flex } from 'styled-system/jsx';

export type CatalogPart = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<typeof RMRKCatalogUtils, 'getExtendedParts'>['outputs']
>[0][0];

type Props = {
  chainId: SupportedChainId;
  catalogAddress: Address;
  part: CatalogPart;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  refetchParts: () => Promise<any>;
};

export const PartListRow = ({
  chainId,
  catalogAddress,
  part,
  refetchParts,
}: Props) => {
  const { data: metadata, isLoading: isLoadingMetadata } = useFetchIpfsMetadata(
    { metadataUri: part?.metadataURI },
    { enabled: !!part?.metadataURI },
  );

  if (isLoadingMetadata) {
    return <Loader />;
  }

  if (!part) {
    return null;
  }

  const partId = part.partId;

  const partType = part.itemType === 1 ? 'slot' : 'fixed';
  const image = metadata?.mediaUri || metadata?.image;

  console.log(`part ${partId.toString()}`, part);

  return (
    <Flex
      p={5}
      gap={2}
      borderRadius={'md'}
      borderWidth={'1px'}
      borderStyle={'solid'}
      borderColor={'gray.600'}
      alignItems={'center'}
    >
      {image && (
        <Box>
          <img
            src={metadata?.mediaUri || metadata?.image}
            alt={metadata?.name || `Image ${partId}`}
            width={80}
            height={80}
            style={{ objectFit: 'cover' }}
          />
        </Box>
      )}

      <Flex direction={'column'} gap={2}>
        <Flex alignItems={'center'} gap={2}>
          <Badge variant={'solid'}>{partId.toString()}</Badge>
          <Text size={'2xl'}>{metadata?.name}</Text>
        </Flex>
        <Flex gap={2}>
          <Badge size={'sm'} variant={partType === 'slot' ? 'solid' : 'subtle'}>
            type: {partType}
          </Badge>
          <Badge size={'sm'}>z-index: {part.z}</Badge>
        </Flex>
      </Flex>

      {partType === 'slot' && (
        <Box marginLeft={'auto'}>
          <EditPartEquippableWhitelist
            catalogAddress={catalogAddress}
            chainId={chainId}
            partId={partId}
            part={part}
            refetchParts={refetchParts}
          />
        </Box>
      )}
    </Flex>
  );
};
