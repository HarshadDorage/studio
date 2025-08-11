
import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, BookOpen, Users, Share2, CheckCircle, Code, Brush, Layers, Briefcase, Download, HelpCircle, GraduationCap, Video, FileText } from 'lucide-react';
import TrainerCard from '@/components/trainer-card';
import Testimonials from '@/components/testimonials';
import ReviewSummarizer from './components/review-summarizer';
import Link from 'next/link';

// Generate static pages for each course
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }
  
  const allReviews = course.reviews;
  const reviewsText = course.reviews.map(r => r.comment).join('\n');

  const getIcon = (slug: string) => {
    switch (slug) {
        case 'advanced-ui-ux-design': return Brush;
        case 'devops-engineering-pro': return Code;
        case 'full-stack-python-development': return Layers;
        case 'aws-cloud-practitioner': return Briefcase;
        default: return BookOpen;
    }
  }

  const CourseIcon = getIcon(course.slug);

  return (
    <div className="bg-background font-sans">
      {/* Header Section */}
      <header className="relative text-primary py-12 md:py-20 overflow-hidden isolate">
         <Image 
            src="https://placehold.co/1920x400.png"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-20"
            data-ai-hint="abstract texture background"
        />
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">{course.title}</h1>
          <p className="mt-2 text-lg md:text-xl text-foreground/80">{course.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-foreground/90">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>12 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>{course.syllabus.length} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{course.reviews.length * 5 + 10} Enrolled</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg">Enroll Now</Button>
            <Button size="lg" variant="ghost">
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content */}
          <main className="lg:col-span-2">

            {/* Course Overview */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Course Overview</h2>
              <div className="prose max-w-none text-foreground/80">
                <p>{course.longDescription}</p>
              </div>
            </section>

            {/* Course Content */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Course Content</h2>
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {course.syllabus.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline data-[state=open]:text-accent data-[state=open]:border-b-accent/50 text-left">
                        <div className="flex items-center gap-4">
                            <CourseIcon className="h-6 w-6 text-primary transition-colors data-[state=open]:text-accent flex-shrink-0" />
                            <span>{item.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p>{item.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Certification */}
            <section className="mb-12">
              <Card className="bg-primary/5 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <GraduationCap />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{course.certification}</p>
                </CardContent>
              </Card>
            </section>

            {/* Reviews */}
            <section className="py-12">
                 <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6 text-center">Student Feedback</h2>
                <div className="mb-12">
                    <ReviewSummarizer courseName={course.title} reviews={reviewsText} />
                </div>
                <Testimonials reviews={allReviews} />
            </section>

          </main>

          {/* Sticky Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader>
                    <CardTitle className="text-xl font-headline">Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Button size="lg" className="w-full">
                    <GraduationCap className="mr-2"/> Enroll Now
                  </Button>
                   <Button asChild variant="outline" className="w-full">
                    <Link href={course.syllabusPdfUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2"/> Download Syllabus
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <HelpCircle className="mr-2"/> Ask a Question
                  </Button>
                </CardContent>
              </Card>

              <TrainerCard trainer={course.trainer} />

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
