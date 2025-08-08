

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { useBookmarks } from '@/context/bookmark-context';
import { courses } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    href: '/courses', 
    label: 'Courses',
    submenu: courses.slice(0, 3).map(course => ({
      href: `/courses/${course.slug}`,
      label: course.title,
    })),
  },
  { href: '/placements', label: 'Placements' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { bookmarks } = useBookmarks();

  const NavLink = ({ href, label, className, children }: { href: string; label:string; className?: string; children?: React.ReactNode }) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return (
        <Link
            href={href}
            className={cn(
            'flex items-center text-sm font-medium transition-colors hover:text-accent',
            isActive ? 'text-primary' : 'text-muted-foreground',
            className
            )}
        >
            {label}
            {children}
        </Link>
    );
  };
  
   const MobileNavLink = ({ href, label, onLinkClick }: { href: string; label: string; onLinkClick: () => void }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={onLinkClick}
        className={cn(
          'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
          isActive ? 'bg-primary/10 text-primary' : 'text-foreground'
        )}
      >
        {label}
      </Link>
    );
  };

  const SubmenuMobile = ({ label, submenu, onLinkClick }: { label: string; submenu: { href: string; label: string }[]; onLinkClick: () => void }) => {
    return (
      <div className="space-y-1">
        <span className="px-3 py-2 text-base font-medium text-muted-foreground">{label}</span>
        <div className='ml-4 space-y-1'>
          {submenu.map(sublink => (
            <SheetClose asChild key={sublink.href}>
              <MobileNavLink href={sublink.href} label={sublink.label} onLinkClick={onLinkClick} />
            </SheetClose>
          ))}
        </div>
      </div>
    );
  }

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
                  <div className="p-6 border-b">
                    <Logo />
                  </div>
                  <nav className="mt-2 flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                          <MobileNavLink href={link.href} label={link.label} onLinkClick={() => {}} />
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                link.submenu ? (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={cn('flex items-center text-sm font-medium transition-colors hover:text-accent', pathname.startsWith('/courses') ? 'text-primary' : 'text-muted-foreground')}>
                        {link.label}
                        <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.submenu.map((sublink) => (
                        <DropdownMenuItem key={sublink.href} asChild>
                          <Link href={sublink.href}>{sublink.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <NavLink key={link.href} {...link} />
                )
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-none items-center justify-end gap-2">
          <div className="md:hidden flex-1">
              <div className="flex justify-center">
                 <Logo />
              </div>
          </div>
           <Button asChild className="hidden sm:inline-flex">
              <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
