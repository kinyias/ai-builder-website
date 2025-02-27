import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link href="/chat">
        <Button>Go to chat</Button>
      </Link>
    </div>
  );
}
