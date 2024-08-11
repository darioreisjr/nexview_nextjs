import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

import { Sidebar } from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextView | Dashboard',
  description:
    'NexView é um painel de última geração e fácil de usar, projetado para fornecer visualização de dados poderosa e análises perspicazes, permitindo que as empresas tomem decisões informadas com facilidade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-background font-sans antialiased',
          inter.className,
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
