import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import About from '@/components/about';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
    </>
  );
}
