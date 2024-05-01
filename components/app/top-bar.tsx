'use client';
import { AccountWallet } from 'components/account/account-wallet';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Box, HStack } from 'styled-system/jsx';
import logo from '../../lib/utils/top_bar_logo.webp';
export const TopBar = () => {
  const router = useRouter();
  function handleClickToHome() {
    router.push('/');
  }
  return (
    <HStack p={2}>
      <Image
        src={logo}
        onClick={handleClickToHome}
        style={{ cursor: 'pointer' }}
        alt="Logo"
        width={50}
        height={50}
      />
      <Box ml="auto">
        <AccountWallet />
      </Box>
    </HStack>
  );
};
