'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
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

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string; }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-muted-foreground',
          className
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
        
        <div className="flex flex-1 items-center justify-start md:justify-center">
           <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6">
                    <Logo />
                  </div>
                  <nav className="mt-2 flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                       <Link
                          href={link.href}
                          className={cn(
                            'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent',
                            pathname === link.href ? 'bg-accent text-primary' : 'text-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                          href="/bookmarks"
                          className={cn(
                          'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent flex items-center justify-between',
                          pathname === '/bookmarks' ? 'bg-accent text-primary' : 'text-foreground'
                          )}
                      >
                          Bookmarks
                          {bookmarks.length > 0 && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                                {bookmarks.length}
                            </span>
                          )}
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
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
        </div>

        <div className="flex flex-none items-center justify-end gap-2">
          <div className="md:hidden flex-1">
              <div className="flex justify-center">
                 <Logo />
              </div>
          </div>
          <NotificationBell />
           <Button asChild className="hidden sm:inline-flex">
              <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
