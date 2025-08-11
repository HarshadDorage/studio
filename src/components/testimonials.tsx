
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Review } from '@/types';
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import './testimonials.css';

interface TestimonialsProps {
    reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
    const plugin = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
         <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-4xl mx-auto testimonial-carousel"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-4">
                {reviews.map((review, index) => (
                    <CarouselItem key={`${review.id}-${index}`} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                         <div className="p-1 h-full">
                            <Card className="h-full flex flex-col text-center border-accent/50 shadow-lg hover:shadow-accent/20 transition-all duration-300">
                                <CardContent className="p-6 flex flex-col items-center flex-grow">
                                     <Avatar className="w-20 h-20 mb-4 border-4 border-primary/10">
                                        <AvatarImage src={review.avatarUrl} alt={review.name} data-ai-hint="student headshot" />
                                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <p className="font-semibold text-lg text-foreground">{review.name}</p>
                                    <p className="text-sm text-muted-foreground mb-2">{review.courseTaken}</p>
                                     <div className="flex my-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                                        ))}
                                    </div>
                                    <blockquote className="text-muted-foreground italic mt-4 flex-grow">"{review.comment}"</blockquote>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:left-[-50px]" />
            <CarouselNext className="right-0 sm:right-[-50px]" />
        </Carousel>
    );
}
