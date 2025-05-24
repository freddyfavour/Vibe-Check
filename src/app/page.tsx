import VibeCheckForm from '@/components/vibe-check-form';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <div className="w-full max-w-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-primary flex items-center justify-center">
            <Sparkles className="w-12 h-12 mr-3 text-accent" />
            VibeCheck
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Instantly analyze the sentiment and emotion of any text.
          </p>
        </header>
        <VibeCheckForm />
      </div>
    </main>
  );
}
