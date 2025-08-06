
import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, BookOpen, Users, Share2, CheckCircle, Code, Brush, Layers, Briefcase, Download, HelpCircle, GraduationCap } from 'lucide-react';
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
    { title: "Introduction to User-Centered Design", content: "Learn the fundamentals of designing for users, including empathy mapping and user personas." },
    { title: "UI vs. UX: Key Differences", content: "Understand the distinct roles and responsibilities of UI and UX designers and how they collaborate." },
    { title: "Design Theory & Principles", content: "Explore core concepts like color theory, typography, and layout that form the foundation of good design." },
    { title: "Wireframing & Prototyping", content: "Master the process of creating low-fidelity wireframes and interactive high-fidelity prototypes in Figma." },
    { title: "High-Fidelity Design", content: "Dive deep into creating polished, pixel-perfect designs ready for development." },
    { title: "HTML5, CSS3, & SCSS", content: "Learn the building blocks of the web to bring your designs to life." },
    { title: "Introduction to Node.js", content: "Get a basic understanding of server-side logic with Node.js to build more dynamic interfaces." },
    { title: "Building Your Portfolio", content: "Create a professional portfolio website from scratch to showcase your best work." },
  ];

  const reviewsText = course.reviews.map(r => r.comment).join('\n');

  return (
    <div className="bg-background font-sans">
      {/* Header Section */}
      <header className="bg-primary/10 text-primary py-12 md:py-20">
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
          <div className="mt-8 flex gap-4">
            <Button size="lg">Enroll Now</Button>
            <Button size="lg" variant="outline">
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
            {/* Course Summary Info Box */}
            <Card className="mb-12 shadow-lg border-primary/20">
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="pt-4 md:pt-0">
                  <h3 className="font-semibold text-lg flex items-center gap-2"><Brush className="text-primary"/>UX Tools & Software</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Sketch</li>
                    <li>InVision</li>
                    <li>Miro</li>
                  </ul>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2"><Code className="text-primary"/>Technologies</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>HTML5/CSS3</li>
                    <li>SCSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Git</li>
                  </ul>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2"><Layers className="text-primary"/>Projects</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Portfolio Website</li>
                    <li>Mobile App Redesign</li>
                    <li>E-commerce Platform</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

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
              <Accordion type="single" collapsible className="w-full">
                {courseContent.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      {item.content}
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
          <aside className="hidden lg:block">
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
