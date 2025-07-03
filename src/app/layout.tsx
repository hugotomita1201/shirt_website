import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vintage Shirt Store',
  description: 'The best vintage shirts online.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
