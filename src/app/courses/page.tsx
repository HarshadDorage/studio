
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data";
import Link from "next/link";
import CourseCarousel from "@/components/course-carousel";

export default function CoursesPage() {
  return (
    <>
      <section className="relative bg-secondary text-primary py-20 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Our Courses</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary/80">
            Find the perfect course to launch or advance your career in technology.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <CourseCarousel courses={courses} />
      </div>
    </>
  );
}
