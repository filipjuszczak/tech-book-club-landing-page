import { Inter, Martian_Mono } from 'next/font/google';

export const InterFont = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-family-sans'
});

export const Martian_MonoFont = Martian_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-family-serif'
});
