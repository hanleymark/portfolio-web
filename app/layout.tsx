import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mark Hanley - Web Developer',
  description:
    'Simple one page portfolio for Mark Hanley, a web developer based in the UK.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' theme='dark'>
      <body>{children}</body>
    </html>
  );
}
