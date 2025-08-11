
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data";
import Link from "next/link";
import CourseCarousel from "@/components/course-carousel";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <>
      <section className="relative text-primary py-20 overflow-hidden isolate">
         <Image 
            src="https://placehold.co/1920x400.png"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-20"
            data-ai-hint="abstract texture background"
        />
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">Our Courses</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            Find the perfect course to launch or advance your career in technology.
          </p>
        </div>
      </section>
      <div className="px-4 md:px-6 py-16">
        <CourseCarousel courses={courses.slice(0, 3)} />
      </div>
    </>
  );
}
