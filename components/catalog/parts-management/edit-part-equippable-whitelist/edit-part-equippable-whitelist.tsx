import type { Address } from 'abitype';
import type { EditSlotEquippableFormFields } from 'components/catalog/parts-management/edit-part-equippable-whitelist/edit-part-equippable-whitelist-form';
import { EditPartEquippableWhitelistModal } from 'components/catalog/parts-management/edit-part-equippable-whitelist/edit-part-equippable-whitelist-modal';
import type { CatalogPart } from 'components/catalog/parts-management/part-list-row';
import { Loader } from 'components/common/loader';
import { sleep } from 'lib/utils/sleep';
import { type SupportedChainId, wagmiConfig } from 'lib/wagmi-config';
import {
  useReadRmrkCatalogImplCheckIsEquippableToAll,
  useWriteRmrkCatalogImplSetEquippableAddresses,
  useWriteRmrkCatalogImplSetEquippableToAll,
} from 'lib/wagmi/generated';
import { CheckCheck, Filter } from 'lucide-react';
import React, { useState } from 'react';
import { Flex } from 'styled-system/jsx';
import { waitForTransactionReceipt } from 'wagmi/actions';

type Props = {
  catalogAddress: Address;
  chainId: SupportedChainId;
  partId: bigint;
  part: CatalogPart;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  refetchParts: () => Promise<any>;
};

export const EditPartEquippableWhitelist = ({
  partId,
  chainId,
  catalogAddress,
  refetchParts,
  part,
}: Props) => {
  //TODO: This sets a new array in place of previous array, we should offer to use addEquippableAddresses also if user wants to update previous array instead
  const {
    data: hashSetEquippableAddresses,
    writeContractAsync: writeContractAsyncSetEquippableAddresses,
    isPending: isPendingSetEquippableAddresses,
    isError: isErrorSetEquippableAddresses,
    error: errorSetEquippableAddresses,
  } = useWriteRmrkCatalogImplSetEquippableAddresses();

  const {
    data: hashSetEquippableToAll,
    writeContractAsync: writeContractAsyncSetEquippableToAll,
    isPending: isPendingSetEquippableToAll,
    isError: isErrorSetEquippableToAll,
    error: errorSetEquippableToAll,
  } = useWriteRmrkCatalogImplSetEquippableToAll();

  const {
    data: isEquippableToAll,
    isLoading: isLoadingIsEquippableToAll,
    refetch: refetchIsEquippableToAll,
  } = useReadRmrkCatalogImplCheckIsEquippableToAll({
    chainId,
    address: catalogAddress,
    args: [partId],
  });

  const initialValues = {
    equippable: part ? [...part.equippable] : [],
    equippableToAll: isEquippableToAll,
  } satisfies EditSlotEquippableFormFields;

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async (
    editSlotEquippableFormFields: EditSlotEquippableFormFields,
  ) => {
    try {
      if (
        editSlotEquippableFormFields.equippableToAll &&
        editSlotEquippableFormFields.equippableToAll !==
          initialValues.equippableToAll
      ) {
        const hash = await writeContractAsyncSetEquippableToAll({
          address: catalogAddress,
          args: [partId],
          chainId,
        });
        const receipt = await waitForTransactionReceipt(wagmiConfig, {
          chainId,
          hash,
        });
      }

      if (
        editSlotEquippableFormFields.equippable &&
        JSON.stringify(editSlotEquippableFormFields.equippable.sort()) !==
          JSON.stringify(initialValues.equippable.sort())
      ) {
        const hash = await writeContractAsyncSetEquippableAddresses({
          address: catalogAddress,
          args: [partId, editSlotEquippableFormFields.equippable],
          chainId,
        });

        const receipt = await waitForTransactionReceipt(wagmiConfig, {
          chainId,
          hash,
        });
      }

      //TODO: Handle success (close modal, show success message, refetch part)

      await sleep(500);
      await refetchParts();
      await refetchIsEquippableToAll();

      onClose();
    } catch (error) {
      console.error('Error setting equippable', error);
    }
  };

  if (isLoadingIsEquippableToAll) {
    return <Loader />;
  }

  if (!part || isEquippableToAll === undefined) {
    return null;
  }

  return (
    <Flex gap={2} direction={'column'} alignItems={'center'}>
      <Flex gap={2} alignItems={'center'}>
        {isEquippableToAll ? (
          <>
            <CheckCheck size={16} /> Public
          </>
        ) : (
          <>
            <Filter size={16} /> Whitelist
          </>
        )}
      </Flex>
      <EditPartEquippableWhitelistModal
        chainId={chainId}
        catalogAddress={catalogAddress}
        partId={partId}
        onSubmit={onSubmit}
        initialValues={initialValues}
        onClose={onClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Flex>
  );
};
