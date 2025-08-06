import { Button } from "@/components/ui/button";
import CourseCard from "@/components/course-card";
import { courses } from "@/lib/data";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Our Courses</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary/80">
            Find the perfect course to launch or advance your career in technology.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}
