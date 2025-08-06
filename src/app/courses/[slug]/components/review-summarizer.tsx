'use client';

import { useState } from 'react';
import { summarizeReviewsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, AlertTriangle, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface ReviewSummarizerProps {
  courseName: string;
  reviews: string;
}

export default function ReviewSummarizer({ courseName, reviews }: ReviewSummarizerProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    setSummary(null);

    const result = await summarizeReviewsAction(courseName, reviews);
    
    if (result.error) {
      setError(result.error);
    } else {
      setSummary(result.summary);
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <Button onClick={handleSummarize} disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? 'Analyzing...' : 'Get AI Summary of Reviews'}
      </Button>

      {loading && (
        <Card className="mt-4 bg-primary/5">
             <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="text-primary" />
                    AI Summary
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
             </CardContent>
        </Card>
      )}

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Card className="mt-4 bg-primary/5 border-primary/20">
             <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Lightbulb />
                    AI-Powered Summary
                </CardTitle>
                <CardDescription>A quick overview of student feedback.</CardDescription>
             </CardHeader>
             <CardContent>
                <p className="text-foreground/90">{summary}</p>
             </CardContent>
        </Card>
      )}
    </div>
  );
}
