import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { Palette, ServerCog, Code, Cloud } from 'lucide-react';
import Link from "next/link";

const courseIcons: { [key: string]: React.ElementType } = {
  'advanced-ui-ux-design': Palette,
  'devops-engineering-pro': ServerCog,
  'full-stack-python-development': Code,
  'aws-cloud-practitioner': Cloud,
};


export default function CoursesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Our Courses</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Find the perfect course to launch or advance your career in technology.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
             const Icon = courseIcons[course.slug];
            return (
                <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex-row items-center gap-4 space-y-0">
                        <Icon className="w-10 h-10 text-primary"/>
                        <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{course.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                        <Button asChild className="w-full">
                            <Link href={`/courses/${course.slug}`}>View Details</Link>
                        </Button>
                    </div>
                </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
