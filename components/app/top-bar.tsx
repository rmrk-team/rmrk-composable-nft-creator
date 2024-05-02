import { AccountWallet } from 'components/account/account-wallet';
import {Logo} from 'components/common/logo/Logo';
import React from 'react';
import { Box, HStack } from 'styled-system/jsx';
export const TopBar = () => {
  return (
    <HStack p={2}>
      <Logo />
      <Box ml="auto">
        <AccountWallet />
      </Box>
    </HStack>
  );
};
