import type { Address } from 'abitype';
import {
  EditSlotEquippableForm,
  type EditSlotEquippableFormFields,
} from 'components/catalog/parts-management/edit-part-equippable-whitelist/edit-part-equippable-whitelist-form';
import { Button } from 'components/park-ui/button';
import * as Dialog from 'components/park-ui/dialog';
import { IconButton } from 'components/park-ui/icon-button';
import type { SupportedChainId } from 'lib/wagmi-config';
import { SquarePen, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Stack } from 'styled-system/jsx';

type Props = Dialog.RootProps & {
  catalogAddress: Address;
  chainId: SupportedChainId;
  partId: bigint;
  onSubmit: (
    editSlotEquippableFormFields: EditSlotEquippableFormFields,
  ) => Promise<void>;
  initialValues?: EditSlotEquippableFormFields;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export const EditPartEquippableWhitelistModal = ({
  chainId,
  catalogAddress,
  partId,
  onSubmit,
  initialValues,
  onClose,
  setIsOpen,
  isOpen,
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
        <Button size={'sm'}>
          Edit equippable <SquarePen />
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content width={'md'}>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Edit equippable contracts</Dialog.Title>
              <Dialog.Description>
                NFTs from whitelisted collections will be able to be equipped
                into this slot
              </Dialog.Description>
              <EditSlotEquippableForm
                onCancel={onClose}
                onSubmit={onSubmit}
                initialValues={initialValues}
              />
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
