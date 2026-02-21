import type { Metadata } from 'next';
import { Nunito, Lora } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kommon - Find Your Safe Space',
  description: 'The trusted housing platform for verified university students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${nunito.variable} ${lora.variable} font-lora antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
