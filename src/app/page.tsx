
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { courses, companyLogos, whyChooseUs } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AlumniGallery from "@/components/alumni-gallery";
import StartLearningCta from "@/components/start-learning-cta";
import CourseCarousel from "@/components/course-carousel";
import Image from "next/image";
import ParallaxHero from "@/components/parallax-hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );

  return (
    <div className="flex flex-col">
      <ParallaxHero />

      <section id="why-us" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Why Choose Samarthview?</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    We are dedicated to providing the best learning experience to help you succeed in your tech career.
                </p>
            </div>
            <Carousel 
                plugins={[plugin.current]}
                className="w-full max-w-xs sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto mt-16"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="-ml-4">
                    {whyChooseUs.map((item) => (
                        <CarouselItem key={item.title} className="pl-4 md:basis-1/2 lg:basis-1/4">
                             <div className="p-1 h-full">
                                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-accent hover:-translate-y-2 h-full">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full">
                                            <item.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="mt-4 font-headline">{item.title}</CardTitle>
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

      <section id="courses" className="py-16 sm:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Our Featured Courses</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Jumpstart your career with our industry-focused training programs.
            </p>
          </div>
          <div className="mt-16">
            <CourseCarousel courses={courses.slice(0, 4)} />
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
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

      <StartLearningCta />
    </div>
  );
}
