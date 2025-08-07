'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ParallaxHero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080.png')",
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
        data-ai-hint="abstract technology background"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Unlock Your Tech Potential with Samarthview
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-white/90">
                Empowering India's next generation of tech leaders through world-class training and mentorship.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/courses">Explore Courses <ArrowRight className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-primary hover:text-primary-foreground">
                    <Link href="/contact">Book a Demo <Calendar className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
