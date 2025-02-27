'use client';

import type React from 'react';

import { KeyboardEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Paperclip, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [userInput, setUserInput] = useState<string>('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return; // Prevent empty messages
    localStorage.setItem(
      'chat',
      JSON.stringify({ role: 'user', message: userInput, id: 1 })
    );
    router.push('/chat/' + 1);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full text-center z-10">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
          What do you want to build?
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Prompt, run, edit, and deploy full-stack{' '}
          <span className="text-cyan-500 dark:text-cyan-400">web</span> and{' '}
          <span className="text-pink-500 dark:text-pink-400">mobile</span> apps.
        </p>

        {/* Chat Input */}
        <div className="w-full mb-8 relative overflow-hidden">
          <div className="p-2">
            <form onSubmit={handleSubmit} className="relative">
              <div className="p-5 border rounded-xl w-full">
                <div className="flex gap-2">
                  <textarea
                    className="outline-none bg-transparent w-full h-32 max-h-56 resize-none mr-8"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="How can I help you today?"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Sparkles className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'absolute top-3 right-3 transition-all duration-300',
                  userInput
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                )}
              >
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div
                className={cn(
                  'absolute top-6 right-5 transition-all duration-300',
                  userInput
                    ? 'opacity-0 translate-x-4'
                    : 'opacity-100 translate-x-0'
                )}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t p-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="link" size="sm">
              Link
            </Button>
            <Button variant="link" size="sm">
              Link
            </Button>
            <Button variant="link" size="sm">
              Link
            </Button>
            <Button variant="link" size="sm">
              Link
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-300" />
            <span className="font-semibold">Kinyias dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
