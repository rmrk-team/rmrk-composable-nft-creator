import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from 'components/app/providers';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { TopBar } from 'components/app/top-bar';
import { Footer } from 'components/app/footer';
import Page from 'components/app/page';

export const metadata: Metadata = {
  title: 'RMRK Composable NFT creator ui',
  description: 'RMRK Composable NFT creator ui',
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <>
            <TopBar />
            <Page>{children}</Page>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
