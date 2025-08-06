import type { Course } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

interface CourseCarouselProps {
    courses: Course[];
}

const getAverageRating = (reviews: any[]) => {
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(1);
}

const CarouselCard = ({ course }: { course: Course }) => {
    const avgRating = getAverageRating(course.reviews);

    return (
        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
            <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-card">
                <Link href={`/courses/${course.slug}`} className="block h-full">
                    <div className="relative w-full h-48">
                        <Image
                            src={course.imageUrl}
                            alt={course.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint="course thumbnail"
                        />
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold font-headline line-clamp-2 text-primary group-hover:text-accent">
                            {course.title}
                        </h3>
                        <div className="flex-grow mt-2 space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>12 weeks</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-accent" />
                                <span>{avgRating} ({course.reviews.length} reviews)</span>
                            </div>
                        </div>
                        <Button className="w-full mt-4" asChild>
                            <span>Enroll Now</span>
                        </Button>
                    </CardContent>
                </Link>
            </div>
        </CarouselItem>
    );
};

export default function CourseCarousel({ courses }: CourseCarouselProps) {
     const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    return (
        <Carousel 
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-2">
                {courses.map(course => (
                    <CarouselCard key={course.id} course={course} />
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    );
}
