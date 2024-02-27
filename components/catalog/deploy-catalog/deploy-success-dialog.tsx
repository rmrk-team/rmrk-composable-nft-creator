import { Button } from 'components/park-ui/button';
import * as Dialog from 'components/park-ui/dialog';
import { Link } from 'components/park-ui/link';
import { Text } from 'components/park-ui/text';
import NextLink from 'next/link';
import React from 'react';
import { Stack } from 'styled-system/jsx';
import type { TransactionReceipt } from 'viem';
import type { Chain } from 'wagmi/chains';

type Props = Dialog.RootProps & {
  receipt?: TransactionReceipt;
  chainId?: Chain['id'];
};

export const DeploySuccessDialog = ({
  receipt,
  chainId,
  ...dialogProps
}: Props) => {
  const isOpen = receipt?.status === 'success';
  if (!receipt || !chainId) {
    return null;
  }
  return (
    <Dialog.Root {...dialogProps} open={isOpen}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Catalog contract deployed</Dialog.Title>
              <Dialog.Description>
                Your catalog address is{' '}
                <Text fontWeight={600}>{receipt.contractAddress}</Text>. Please
                save the address to be able to add it to your composable NFTs
                later
              </Dialog.Description>
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Link asChild>
                <NextLink href="/">
                  <Button variant="outline" width="full">
                    Back to start
                  </Button>
                </NextLink>
              </Link>

              <Link asChild>
                <NextLink
                  href={`/catalog/${chainId}/${receipt.contractAddress}`}
                >
                  <Button width="full">Confirm</Button>
                </NextLink>
              </Link>
            </Stack>
          </Stack>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
