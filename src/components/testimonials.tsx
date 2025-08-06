'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Review } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialsProps {
    reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
    return (
         <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent>
                {reviews.map((review) => (
                    <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                         <div className="p-1 h-full">
                            <Card className="h-full flex flex-col justify-between shadow-md">
                                <CardContent className="p-6 space-y-4">
                                     <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} />
                                        ))}
                                    </div>
                                    <blockquote className="text-foreground/80 italic">"{review.comment}"</blockquote>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <p className="font-bold">{review.name}</p>
                                    <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
