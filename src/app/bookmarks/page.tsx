'use client';
import { useBookmarks } from '@/context/bookmark-context';
import CourseCard from '@/components/course-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookmarkX } from 'lucide-react';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();

  return (
    <>
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Your Bookmarks</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary/80">
            The courses you've saved for later.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 py-16">
        {bookmarks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border rounded-lg bg-primary/5">
            <BookmarkX className="h-16 w-16 mx-auto text-muted-foreground" />
            <h2 className="mt-6 text-2xl font-bold">No Bookmarked Courses</h2>
            <p className="mt-2 text-muted-foreground">You haven't saved any courses yet. Start exploring to find courses you're interested in.</p>
            <Button asChild className="mt-6">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
