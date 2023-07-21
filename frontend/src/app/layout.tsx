import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
