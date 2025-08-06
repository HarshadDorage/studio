'use server';

import { summarizeCourseReviews } from '@/ai/flows/summarize-course-reviews';

export async function summarizeReviewsAction(courseName: string, reviews: string) {
  try {
    const result = await summarizeCourseReviews({
      courseName,
      reviews,
    });
    return { summary: result.summary, error: null };
  } catch (e: any) {
    console.error(e);
    return { summary: null, error: 'Failed to summarize reviews. Please try again later.' };
  }
}
