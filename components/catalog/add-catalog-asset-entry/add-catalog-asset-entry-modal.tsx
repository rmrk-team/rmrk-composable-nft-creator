import type { Address } from 'abitype';
import {
  type AddCatalogPartFormFields,
  AddNewPartForm,
} from 'components/catalog/parts-management/add-new-part-form';
import { Button } from 'components/park-ui/button';
import * as Dialog from 'components/park-ui/dialog';
import { IconButton } from 'components/park-ui/icon-button';
import type { SupportedChainId } from 'lib/wagmi-config';
import { DiamondPlus, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Stack } from 'styled-system/jsx';

type Props = Dialog.RootProps & {
  catalogAddress: Address;
  chainId: SupportedChainId;
  onSubmit: (
    addCatalogPartFormFields: AddCatalogPartFormFields,
  ) => Promise<void>;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export const AddCatalogAssetEntryModal = ({
  chainId,
  catalogAddress,
  onSubmit,
  onClose,
  isOpen,
  setIsOpen,
  ...dialogProps
}: Props) => {
  return (
    <Dialog.Root
      {...dialogProps}
      open={isOpen}
      unmountOnExit={true}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <Dialog.Trigger asChild>
        <Button
          variant={'outline'}
          colorPalette={'gray'}
          width={'100%'}
          size={'lg'}
        >
          Add new part <DiamondPlus />
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content width={'md'}>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Add new Part</Dialog.Title>
              <Dialog.Description>Add new Part</Dialog.Description>
              <AddNewPartForm onCancel={onClose} onSubmit={onSubmit} />
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
