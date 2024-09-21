'use client';
import Image from 'next/image';
import NextLink from 'next/link';

export const Logo = () => {
  return (
    <NextLink href={'/'} passHref>
      <Image
        src="/top_bar_logo.webp"
        alt="Go to landing page"
        width={60}
        height={60}
      />
    </NextLink>
  );
};