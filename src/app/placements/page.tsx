'use client';

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp, Award, Briefcase } from "lucide-react";
import AlumniGallery from "@/components/alumni-gallery";
import { companyLogos, placementAssistance } from "@/lib/data";
import React, { use } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const placementStats = [
    {
        icon: Award,
        value: "95%",
        label: "Placement Rate",
    },
    {
        icon: TrendingUp,
        value: "50%",
        label: "Average Salary Hike",
    },
     {
        icon: Briefcase,
        value: "200+",
        label: "Hiring Partners",
    }
]


export default function PlacementsPage() {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <>
            <section className="relative bg-secondary text-primary pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary"></div>
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
                
                <div className="container mx-auto px-4 md:px-6 relative">
                   <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-headline">Launch Your Tech Career With Confidence</h1>
                            <p className="mt-4 text-lg max-w-xl mx-auto md:mx-0 text-primary/80">
                                We don't just teach you skills; we pave the way for your success in the tech industry. Your dream job is within reach.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button size="lg" asChild>
                                    <Link href="/courses">Explore Courses</Link>
                                </Button>
                                 <Button size="lg" variant="outline" asChild>
                                    <Link href="/contact">Speak to an Advisor</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image src="https://placehold.co/600x400.png" alt="Students celebrating success" width={600} height={400} className="rounded-lg shadow-xl" data-ai-hint="successful students celebrating" />
                        </div>
                   </div>
                </div>
                 <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {placementStats.map((stat) => (
                             <div key={stat.label} className="bg-background/50 p-6 rounded-lg shadow-md border border-primary/10 backdrop-blur-sm">
                                <stat.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Our Graduates Work At</h2>
                        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                            We have a strong network of hiring partners, from top MNCs to innovative startups.
                        </p>
                    </div>
                    <div className="mt-16 bg-primary/5 border rounded-lg p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                            {companyLogos.map((company) => (
                                <div key={company.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                                    <Image src={company.logoUrl} alt={`${company.name} logo`} width={140} height={70} objectFit="contain" data-ai-hint="company logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <AlumniGallery />

            <section className="py-16 sm:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                     <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Comprehensive Placement Assistance</h2>
                        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                           We provide end-to-end support to ensure you are job-ready.
                        </p>
                    </div>
                     <Carousel 
                        plugins={[plugin.current]}
                        className="w-full max-w-xs sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto mt-16"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4">
                            {placementAssistance.map((item) => (
                                <CarouselItem key={item.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-accent hover:-translate-y-2 h-full">
                                            <CardHeader className="items-center">
                                                <div className="bg-primary/10 p-4 rounded-full">
                                                    <item.icon className="h-8 w-8 text-primary" />
                                                </div>
                                                <CardTitle className="mt-4 font-headline text-xl">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </section>
            
            <section className="py-16 sm:py-24">
                 <div className="container mx-auto px-4 md:px-6">
                    <Card className="bg-secondary text-primary shadow-2xl overflow-hidden border-primary/20">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-8 md:p-12 order-last md:order-first">
                                <h2 className="text-3xl font-bold font-headline">Internship Opportunities</h2>
                                <p className="mt-4 text-lg text-primary/80">
                                    Gain valuable real-world experience with our internship program. We connect top students with leading companies for exciting internship roles.
                                </p>
                                <div className="mt-6">
                                    <Button asChild size="lg">
                                        <Link href="/contact">
                                            Inquire Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                           <div className="h-64 md:h-full w-full relative">
                             <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent"></div>
                             <Image src="https://placehold.co/600x400.png" alt="Intern working at a desk" className="h-full w-full object-cover" width={600} height={400} data-ai-hint="student intern working" />
                           </div>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}
