import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { ThemeProvider } from '@/context';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'fallback',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'SocialHub',
  description: 'SocialHub app',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
