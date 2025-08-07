'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import CountdownTimer from './countdown-timer';

export default function ParallaxHero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const targetDate = "2024-08-15T23:59:59";

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
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white animate-in fade-in zoom-in duration-500">
        <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Unlock Your Tech Potential
            </h1>
            <div className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-white/90">
                 <div className="flex items-center justify-center gap-2 flex-wrap text-accent-foreground bg-accent/80 backdrop-blur-sm py-2 px-4 rounded-full">
                    <span className="font-semibold">Limited Time Offer! New batch starts Aug 15. Enrollment ends in:</span>
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 animate-pulse">
                    <Link href="/courses">Enroll Now <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
