'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Course } from '@/types';

interface BookmarkContextType {
  bookmarks: Course[];
  addBookmark: (course: Course) => void;
  removeBookmark: (courseId: number) => void;
  isBookmarked: (courseId: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Course[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem('courseBookmarks');
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    } catch (error) {
      console.error("Failed to parse bookmarks from localStorage", error);
      setBookmarks([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('courseBookmarks', JSON.stringify(bookmarks));
    }
  }, [bookmarks, isLoaded]);

  const addBookmark = (course: Course) => {
    setBookmarks((prevBookmarks) => {
      if (prevBookmarks.some((b) => b.id === course.id)) {
        return prevBookmarks;
      }
      return [...prevBookmarks, course];
    });
  };

  const removeBookmark = (courseId: number) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((b) => b.id !== courseId));
  };

  const isBookmarked = (courseId: number) => {
    return bookmarks.some((b) => b.id === courseId);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}
