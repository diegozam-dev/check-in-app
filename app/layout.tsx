import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Check In App',
  description:
    'Aplicación Web para el registro de asistencia en Instituciones Educativas'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
