"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzeSentiment, type AnalyzeSentimentOutput } from '@/ai/flows/analyze-sentiment';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Smile, Frown, Meh, Bot } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  text: z.string().min(10, { message: "Please enter at least 10 characters to analyze." }).max(5000, { message: "Text cannot exceed 5000 characters."}),
});

type FormValues = z.infer<typeof formSchema>;

export default function VibeCheckForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeSentimentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeSentiment({ text: data.text });
      setAnalysisResult(result);
    } catch (error) {
      console.error("Sentiment analysis error:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Something went wrong while analyzing the sentiment. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getSentimentIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('positive')) {
      return <Smile className="w-8 h-8 text-green-400" />;
    }
    if (lowerLabel.includes('negative')) {
      return <Frown className="w-8 h-8 text-red-400" />;
    }
    return <Meh className="w-8 h-8 text-yellow-400" />;
  };

  return (
    <Card className="w-full shadow-2xl rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Analyze Text Sentiment</CardTitle>
        <CardDescription>Enter your text below and let our AI determine its vibe.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="text-input" className="sr-only">Your Text</FormLabel>
                  <FormControl>
                    <Textarea
                      id="text-input"
                      placeholder="Paste or type your text here to analyze its vibe..."
                      className="min-h-[150px] resize-none text-base rounded-md focus:ring-accent focus:border-accent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-lg py-6 rounded-md bg-primary hover:bg-primary/90" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Vibe...
                </>
              ) : (
                'Check Vibe'
              )}
            </Button>
          </form>
        </Form>

        {analysisResult && !isLoading && (
          <Card className="mt-8 bg-card/80 animate-in fade-in-50 slide-in-from-bottom-5 duration-500 rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-foreground">
                <Bot className="w-7 h-7 mr-2 text-accent" />
                AI Analysis Complete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-secondary/50 rounded-md">
                {getSentimentIcon(analysisResult.sentimentLabel)}
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    Overall Vibe: {analysisResult.sentimentLabel}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Score: {analysisResult.sentimentScore.toFixed(2)}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-md mb-1 text-foreground">Emotion Summary:</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {analysisResult.emotionSummary}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
