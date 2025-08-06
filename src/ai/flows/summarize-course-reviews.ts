'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing course reviews.
 *
 * - summarizeCourseReviews - A function that summarizes reviews for a given course.
 * - SummarizeCourseReviewsInput - The input type for the summarizeCourseReviews function.
 * - SummarizeCourseReviewsOutput - The return type for the summarizeCourseReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourseReviewsInputSchema = z.object({
  courseName: z.string().describe('The name of the course to summarize reviews for.'),
  reviews: z.string().describe('The reviews for the course, as a single string.'),
});
export type SummarizeCourseReviewsInput = z.infer<typeof SummarizeCourseReviewsInputSchema>;

const SummarizeCourseReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the course reviews.'),
});
export type SummarizeCourseReviewsOutput = z.infer<typeof SummarizeCourseReviewsOutputSchema>;

export async function summarizeCourseReviews(input: SummarizeCourseReviewsInput): Promise<SummarizeCourseReviewsOutput> {
  return summarizeCourseReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCourseReviewsPrompt',
  input: {schema: SummarizeCourseReviewsInputSchema},
  output: {schema: SummarizeCourseReviewsOutputSchema},
  prompt: `You are an AI expert specializing in summarizing course reviews. Please provide a summary of the following reviews for the course: {{{courseName}}}.\n\nReviews: {{{reviews}}}\n\nSummary: `,
});

const summarizeCourseReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeCourseReviewsFlow',
    inputSchema: SummarizeCourseReviewsInputSchema,
    outputSchema: SummarizeCourseReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
