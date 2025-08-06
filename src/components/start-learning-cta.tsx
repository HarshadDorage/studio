'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StartLearningCta() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // 5 second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cn(
            "transition-opacity duration-1000 ease-in-out",
            isVisible ? "opacity-100" : "opacity-0"
        )}>
            {isVisible && (
                 <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <Card className="bg-primary text-primary-foreground shadow-2xl overflow-hidden">
                             <div className="grid md:grid-cols-2 items-center">
                                <CardContent className="p-8 md:p-12">
                                    <h2 className="text-3xl font-bold font-headline">Ready to Start Your Journey?</h2>
                                    <p className="mt-4 text-lg text-primary-foreground/80">
                                        Don't wait to build your future. Our expert-led courses are designed to get you job-ready from day one.
                                    </p>
                                    <div className="mt-6">
                                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                                            <Link href="/courses">
                                                Explore All Courses
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                                <div className="hidden md:block h-full w-full bg-primary-foreground/10 relative">
                                     <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/50 to-transparent"></div>
                                     {/* Placeholder for an engaging image */}
                                     <img src="https://placehold.co/600x400.png" alt="Students learning" className="h-full w-full object-cover" data-ai-hint="students collaborating" />
                                </div>
                             </div>
                        </Card>
                    </div>
                </section>
            )}
        </div>
    );
}
