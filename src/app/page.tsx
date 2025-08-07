import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { Users, BookOpen, Target, ArrowRight, Briefcase, FileText, Award } from "lucide-react";
import Link from "next/link";
import AlumniGallery from "@/components/alumni-gallery";
import StartLearningCta from "@/components/start-learning-cta";
import CourseCarousel from "@/components/course-carousel";
import Image from "next/image";
import ParallaxHero from "@/components/parallax-hero";

const whyChooseUs = [
    {
        icon: FileText,
        title: "Resume Building",
        description: "Craft a standout resume with personalized feedback from our career experts."
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "Get guidance from industry veterans who have been in your shoes and succeeded."
    },
    {
        icon: Briefcase,
        title: "Exclusive Job Fairs",
        description: "Gain access to our network of top hiring partners at exclusive recruitment events."
    },
    {
        icon: Award,
        title: "Real-World Projects",
        description: "Build a portfolio that impresses employers with hands-on, industry-relevant projects."
    }
]

export default function Home() {
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
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
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

      <AlumniGallery />

      <StartLearningCta />
    </div>
  );
}
