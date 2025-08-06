import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/layout/whatsapp-button';
import AnnouncementBanner from '@/components/layout/announcement-banner';
import { BookmarkProvider } from '@/context/bookmark-context';

export const metadata: Metadata = {
  title: 'Samarthview Technologies - Unlock Your Tech Potential',
  description: 'Empowering India\'s next generation of tech leaders through world-class training in UI/UX, DevOps, Python, and AWS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <BookmarkProvider>
          <div className="flex min-h-screen flex-col">
            <AnnouncementBanner />
            <Header />
            <main className="flex-grow animate-in fade-in duration-500">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <Toaster />
        </BookmarkProvider>
      </body>
    </html>
  );
}
