
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

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  // NOTE: This page is designed for the 'advanced-ui-ux-design' slug, but will use data from other courses.
  const course = courses.find((c) => c.slug === 'advanced-ui-ux-design') ?? courses[0];

  if (!course) {
    notFound();
  }

  const allReviews = courses.flatMap(c => c.reviews);

  const whatYoullLearn = [
    "Build beautifully designed web and mobile projects for your portfolio.",
    "Master Figma and learn to convert your designs into code.",
    "Understand the principles of UI vs. UX and user-centered design.",
    "Learn to create wireframes and high-fidelity prototypes.",
    "Get a job as a UI/UX designer or start a freelance career.",
    "Master modern frontend technologies like HTML5, CSS3, and Node.js.",
    "Work with tools like Adobe Creative Suite and Sketch.",
    "Develop a strong portfolio to showcase your skills to potential employers.",
    "Learn to conduct user research and apply feedback effectively.",
    "Understand the business side of design and freelancing."
  ];

  const courseContent = [
    { title: "Introduction to User-Centered Design", content: "Learn the fundamentals of designing for users, including empathy mapping and user personas.", time: "45 mins", icon: BookOpen },
    { title: "UI vs. UX: Key Differences", content: "Understand the distinct roles and responsibilities of UI and UX designers and how they collaborate.", time: "30 mins", icon: FileText },
    { title: "Design Theory & Principles", content: "Explore core concepts like color theory, typography, and layout that form the foundation of good design.", time: "1 hour", icon: Brush },
    { title: "Wireframing & Prototyping", content: "Master the process of creating low-fidelity wireframes and interactive high-fidelity prototypes in Figma.", time: "2 hours", icon: Video },
    { title: "High-Fidelity Design", content: "Dive deep into creating polished, pixel-perfect designs ready for development.", time: "2.5 hours", icon: Video },
    { title: "HTML5, CSS3, & SCSS", content: "Learn the building blocks of the web to bring your designs to life.", time: "3 hours", icon: Code },
    { title: "Introduction to Node.js", content: "Get a basic understanding of server-side logic with Node.js to build more dynamic interfaces.", time: "1.5 hours", icon: Code },
    { title: "Building Your Portfolio", content: "Create a professional portfolio website from scratch to showcase your best work.", time: "4 hours", icon: Briefcase },
  ];
  
  const featureCards = [
      {
          icon: Brush,
          title: "UX Tools & Software",
          description: "Master industry-standard tools like Figma, Adobe XD, and Sketch to bring your ideas to life.",
          items: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"]
      },
      {
          icon: Code,
          title: "Technologies",
          description: "Learn the code behind the design with essential frontend and backend technologies.",
          items: ["HTML5/CSS3", "SCSS", "JavaScript", "Node.js", "Git"]
      },
      {
          icon: Layers,
          title: "Real-World Projects",
          description: "Build a strong portfolio by working on practical projects that solve real user problems.",
          items: ["Portfolio Website", "Mobile App Redesign", "E-commerce Platform"]
      }
  ];

  const reviewsText = course.reviews.map(r => r.comment).join('\n');

  return (
    <div className="bg-background font-sans">
      {/* Header Section */}
      <header className="relative bg-secondary text-primary py-12 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">UX/UI Designer Master Class</h1>
          <p className="mt-2 text-lg md:text-xl text-primary/80">Figma, Adobe Creative Suite, HTML/HTML5/CSS/CSS3/SCSS/Node.js + more</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-primary/90">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>12 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>16 Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>20 Enrolled</span>
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
            
            {/* Feature Cards Grid */}
            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featureCards.map((card, index) => (
                         <Card key={index} className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                             <CardHeader className="flex-row items-start gap-4">
                                <card.icon className="h-8 w-8 text-accent"/>
                                <CardTitle className="font-headline text-lg mt-1">{card.title}</CardTitle>
                             </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* What you'll learn */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">What You’ll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatYoullLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Course Overview */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Course Overview</h2>
              <div className="prose max-w-none text-foreground/80">
                <p>In today's digital world, a seamless user experience (UX) and a beautiful user interface (UI) are no longer optional—they are essential for success. This masterclass is designed to take you from a complete beginner to a job-ready UX/UI designer. You'll not only master design tools like Figma and Adobe XD but also learn how to think like a designer. We focus on real-world application, teaching you how to handle prototyping, conduct user research, and even convert your stunning designs into functional code with HTML, CSS, and Node.js. By the end of this course, you’ll have a professional-grade portfolio and the confidence to land high-paying roles or build a successful freelance career.</p>
              </div>
            </section>

            {/* Course Content */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6">Course Content</h2>
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {courseContent.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline data-[state=open]:text-accent data-[state=open]:border-b-accent/50 text-left">
                        <div className="flex items-center gap-4">
                            <item.icon className="h-6 w-6 text-primary transition-colors data-[state=open]:text-accent flex-shrink-0" />
                            <span>{item.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{item.time}</span>
                          </div>
                      </div>
                      <p>{item.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
