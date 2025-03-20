import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col gap-8 h-screen items-center w-screen">
      <Image src="/not-found.svg" alt='Not found' width={400} height={400} />
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
