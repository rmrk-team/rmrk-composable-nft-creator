import { Portal } from '@ark-ui/react';
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
import { Box, Stack } from 'styled-system/jsx';

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

export const AddNewPartModal = ({
  chainId,
  catalogAddress,
  onSubmit,
  onClose,
  isOpen,
  setIsOpen,
  ...dialogProps
}: Props) => {
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant={'outline'}
        colorPalette={'gray'}
        width={'100%'}
        size={'lg'}
      >
        Add new part <DiamondPlus />
      </Button>

      <Dialog.Root
        {...dialogProps}
        open={isOpen}
        unmountOnExit={true}
        onOpenChange={(e) => setIsOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner overflow={'hidden'}>
            <Dialog.Content
              width={'md'}
              overflowY={'auto'}
              maxH={'calc(100% - 7.5rem)'}
            >
              <Box overflow={'auto'}>
                <Stack gap="8" p="6">
                  <Stack gap="1">
                    <Dialog.Title>Add new Part</Dialog.Title>
                    <Dialog.Description>Add new Part</Dialog.Description>
                    <AddNewPartForm onCancel={onClose} onSubmit={onSubmit} />
                  </Stack>
                </Stack>
                <Dialog.CloseTrigger
                  asChild
                  position="absolute"
                  top="2"
                  right="2"
                >
                  <IconButton
                    aria-label="Close Dialog"
                    variant="ghost"
                    size="sm"
                  >
                    <XIcon />
                  </IconButton>
                </Dialog.CloseTrigger>
              </Box>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
