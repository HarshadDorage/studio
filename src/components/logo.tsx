import { BookHeart } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <BookHeart className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold text-primary font-headline">
        Samarthview
      </span>
    </Link>
  );
}
