import React from 'react';
import { Box, HStack } from 'styled-system/jsx';
import { AccountWallet } from 'components/account/account-wallet';

export const TopBar = () => {
  return (
    <HStack p={2}>
      <Box ml="auto">
        <AccountWallet />
      </Box>
    </HStack>
  );
};
