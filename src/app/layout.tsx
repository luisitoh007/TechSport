import './globals.css';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Fitness SaaS',
  description: 'Aplicativo web de saúde e fitness',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {/* SessionProvider permite acesso às sessões de autenticação em todo o app */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}