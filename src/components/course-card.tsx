'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Course } from '@/types';
import { Palette, ServerCog, Code, Cloud, CheckCircle, Bookmark } from 'lucide-react';
import { useBookmarks } from '@/context/bookmark-context';
import { cn } from '@/lib/utils';

const courseIcons: { [key: string]: React.ElementType } = {
  'advanced-ui-ux-design': Palette,
  'devops-engineering-pro': ServerCog,
  'full-stack-python-development': Code,
  'aws-cloud-practitioner': Cloud,
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = courseIcons[course.slug] || CheckCircle;
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const isBookmarked = bookmarks.some((b) => b.id === course.id);

  const handleBookmarkToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isBookmarked) {
      removeBookmark(course.id);
    } else {
      addBookmark(course);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <Link href={`/courses/${course.slug}`} className="flex flex-col h-full">
        <CardHeader className="flex-row items-start gap-4 space-y-0">
          <Icon className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
          <div className="flex-1">
            <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
          </div>
          <Button
              variant="ghost"
              size="icon"
              onClick={handleBookmarkToggle}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              className="rounded-full h-9 w-9 flex-shrink-0"
            >
              <Bookmark className={cn("h-5 w-5 text-muted-foreground", isBookmarked && "fill-accent text-accent")} />
            </Button>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">{course.description}</p>
        </CardContent>
        <div className="p-6 pt-0 mt-auto">
          <Button className="w-full">
            View Details
          </Button>
        </div>
      </Link>
    </Card>
  );
}
