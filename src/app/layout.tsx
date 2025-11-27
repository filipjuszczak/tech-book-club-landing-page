import { InterFont, Martian_MonoFont } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tech book club',
  description:
    'Join the ultimate tech book club - turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${Martian_MonoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
