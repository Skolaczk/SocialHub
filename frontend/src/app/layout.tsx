import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'fallback',
  adjustFontFallback: true,
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
