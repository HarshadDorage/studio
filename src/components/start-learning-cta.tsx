
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Animated from './animated';

export default function StartLearningCta() {
    return (
        <Animated animation="fade-in" duration={1000}>
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <Card className="bg-secondary text-primary shadow-2xl overflow-hidden border-primary/20">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold font-headline text-[#1A1A1A]">Ready to Start Your Journey?</h2>
                                <p className="mt-4 text-lg text-[#696969]">
                                    Don't wait to build your future. Our expert-led courses are designed to get you job-ready from day one.
                                </p>
                                <div className="mt-6">
                                    <Button asChild size="lg">
                                        <Link href="/courses">
                                            Explore All Courses
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:block h-full w-full bg-primary/10 relative">
                                <div className="absolute inset-0 bg-gradient-to-l from-secondary via-secondary/50 to-transparent"></div>
                                <Image src="https://placehold.co/600x400.png" alt="Students learning" className="h-full w-full object-cover" width={600} height={400} data-ai-hint="students collaborating" />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </Animated>
    );
}
