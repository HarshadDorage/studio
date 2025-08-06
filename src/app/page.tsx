import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { Users, BookOpen, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import AlumniGallery from "@/components/alumni-gallery";
import StartLearningCta from "@/components/start-learning-cta";
import CourseCarousel from "@/components/course-carousel";
import Image from "next/image";

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
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/5 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
                Unlock Your Tech Potential with Samarthview
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground/80">
                Empowering India's next generation of tech leaders through world-class training and mentorship.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Courses <ArrowRight className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src="https://placehold.co/600x500.png" alt="Happy students learning" width={600} height={500} className="rounded-xl shadow-2xl" data-ai-hint="diverse students working together" />
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
                    <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-accent hover:-translate-y-2">
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
                ))}
            </div>
        </div>
      </section>

      <section id="courses" className="py-16 sm:py-24 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">Our Featured Courses</h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Jumpstart your career with our industry-focused training programs.
            </p>
          </div>
          <div className="mt-16">
            <CourseCarousel courses={courses.slice(0, 4)} />
          </div>
           <div className="text-center mt-12 px-4 md:px-6">
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <AlumniGallery />

      <StartLearningCta />
    </div>
  );
}
