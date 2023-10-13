import NavBar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mark Hanley - Web Developer',
  description:
    'Simple one page portfolio for Mark Hanley, a web developer based in London, UK.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
