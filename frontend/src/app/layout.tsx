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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: 'SocialHub',
    template: '%s • SocialHub',
  },
  description:
    'SocialHub is a next-generation social media app developed using Next.js and Nest.js. It offers a modern interface and seamless user experience for connecting and exploring content.',
  alternates: {
    canonical: '/',
  },
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
