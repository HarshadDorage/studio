import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Course } from '@/types';
import { Palette, ServerCog, Code, Cloud, CheckCircle } from 'lucide-react';

const courseIcons: { [key: string]: React.ElementType } = {
  'advanced-ui-ux-design': Palette,
  'devops-engineering-pro': ServerCog,
  'full-stack-python-development': Code,
  'aws-cloud-practitioner': Cloud,
};

interface CourseCardProps {
  course: Course;
  isFeatured?: boolean;
}

export default function CourseCard({ course, isFeatured = false }: CourseCardProps) {
  const Icon = courseIcons[course.slug] || CheckCircle;

  if (isFeatured) {
    return (
        <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
  }

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        <Icon className="w-10 h-10 text-primary" />
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
}
