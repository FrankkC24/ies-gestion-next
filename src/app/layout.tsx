'use client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { NotificationProvider } from '@/contexts/NotificationContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IES Gestión</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <NotificationProvider>
            {/* <Header variant="dashboard" /> */}
            <main>{children}</main>
            <Footer />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}