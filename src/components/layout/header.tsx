'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { useBookmarks } from '@/context/bookmark-context';
import NotificationBell from './notification-bell';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { bookmarks } = useBookmarks();

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="hidden md:flex md:flex-1 items-center justify-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
             <Link
                href="/bookmarks"
                className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative',
                pathname === '/bookmarks' ? 'text-primary' : 'text-muted-foreground'
                )}
            >
                Bookmarks
                {bookmarks.length > 0 && (
                    <span className="absolute -top-1 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs">
                        {bookmarks.length}
                    </span>
                )}
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col p-6">
                  <Logo />
                  <nav className="mt-8 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                       <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === link.href ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/bookmarks"
                        className={cn(
                        'text-lg font-medium transition-colors hover:text-primary relative',
                        pathname === '/bookmarks' ? 'text-primary' : 'text-foreground'
                        )}
                    >
                        Bookmarks
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <NotificationBell />
             <Button asChild>
                <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
