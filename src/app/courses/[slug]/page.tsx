import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Award, Book, UserCircle } from 'lucide-react';
import ReviewSummarizer from './components/review-summarizer';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }
  
  const reviewsText = course.reviews.map(r => `Rating: ${r.rating}/5. Comment: ${r.comment}`).join('\n');

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2">
          <Badge variant="secondary" className="mb-4">{course.title.split(' ')[0]} Track</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{course.longDescription}</p>

          <Card className="mb-8 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Book className="w-6 h-6 text-primary" />
                <CardTitle>Syllabus</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {course.syllabus.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-primary" />
                    <CardTitle>Student Reviews</CardTitle>
                </div>
                <CardDescription>See what past students have to say.</CardDescription>
            </CardHeader>
            <CardContent>
                <ReviewSummarizer courseName={course.title} reviews={reviewsText} />
                <div className="space-y-6 mt-6">
                    {course.reviews.map(review => (
                        <div key={review.id} className="border-l-4 border-accent pl-4">
                            <div className="flex items-center mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-accent fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-muted-foreground italic">"{review.comment}"</p>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>

        </div>
        <div className="md:col-span-1 space-y-8">
          <Card className="overflow-hidden shadow-md">
            <Image src={course.imageUrl} alt={course.title} width={600} height={400} className="w-full h-auto" data-ai-hint="online course learning" />
            <CardContent className="p-6">
                 <Button className="w-full" size="lg">Enroll Now</Button>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <UserCircle className="w-6 h-6 text-primary" />
                    <CardTitle>Your Instructor</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={course.trainer.avatarUrl} alt={course.trainer.name} data-ai-hint="professional trainer portrait"/>
                <AvatarFallback>{course.trainer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg">{course.trainer.name}</h3>
              <p className="text-primary font-medium mb-2">{course.trainer.title}</p>
              <p className="text-muted-foreground text-sm">{course.trainer.bio}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    <CardTitle>Certification</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{course.certification}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
