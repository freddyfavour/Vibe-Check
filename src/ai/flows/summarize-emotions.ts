// Summarize the emotions of text input using AI.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeEmotionsInputSchema = z.object({
  text: z.string().describe('The text to summarize the emotions of.'),
});
export type SummarizeEmotionsInput = z.infer<typeof SummarizeEmotionsInputSchema>;

const SummarizeEmotionsOutputSchema = z.object({
  summary: z.string().describe('A short summary of the key emotions or tones identified in the text.'),
});
export type SummarizeEmotionsOutput = z.infer<typeof SummarizeEmotionsOutputSchema>;

export async function summarizeEmotions(input: SummarizeEmotionsInput): Promise<SummarizeEmotionsOutput> {
  return summarizeEmotionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeEmotionsPrompt',
  input: {schema: SummarizeEmotionsInputSchema},
  output: {schema: SummarizeEmotionsOutputSchema},
  prompt: `Summarize the emotions or tones present in the following text:\n\n{{text}}`,
});

const summarizeEmotionsFlow = ai.defineFlow(
  {
    name: 'summarizeEmotionsFlow',
    inputSchema: SummarizeEmotionsInputSchema,
    outputSchema: SummarizeEmotionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
