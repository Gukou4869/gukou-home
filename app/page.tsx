import Image from 'next/image';

import ProfileImg from '../assets/profile_1.webp';

import Button from './components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="flex text-7xl font-bold">Gukou Home</h1>
      <Image alt="profile image" className="rounded-full" height={200} src={ProfileImg} width={200} />
      <Button />
    </main>
  );
}
