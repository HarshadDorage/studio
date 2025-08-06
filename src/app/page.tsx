import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { CheckCircle, Palette, ServerCog, Code, Cloud, Users, BookOpen, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courseIcons: { [key: string]: React.ElementType } = {
  'advanced-ui-ux-design': Palette,
  'devops-engineering-pro': ServerCog,
  'full-stack-python-development': Code,
  'aws-cloud-practitioner': Cloud,
};

const whyChooseUs = [
    {
        icon: Users,
        title: "Expert Trainers",
        description: "Learn from industry veterans with years of real-world experience in their fields."
    },
    {
        icon: BookOpen,
        title: "Practical Syllabus",
        description: "Our curriculum is designed to be hands-on, focusing on skills that employers are looking for."
    },
    {
        icon: Target,
        title: "Career Support",
        description: "We provide placement assistance, resume building, and interview preparation."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
              Unlock Your Tech Potential with Samarthview
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Empowering India's next generation of tech leaders through world-class training and mentorship.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="link" size="lg">
                <Link href="/contact">Contact Us &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Why Choose Samarthview?</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    We are dedicated to providing the best learning experience to help you succeed in your tech career.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {whyChooseUs.map((item) => (
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
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
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 4).map((course) => {
              const Icon = courseIcons[course.slug] || CheckCircle;
              return (
                <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Icon className="h-8 w-8 text-primary" />
                      <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{course.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
