"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import LeadCapture from "@/components/LeadCapture";
import Dashboard from "@/components/Dashboard";
import { AstrologicalElement } from "@/lib/zodiac";

type AppState = "landing" | "quiz" | "lead_capture" | "dashboard";

interface AssessmentData {
  firstName: string;
  baseElement: AstrologicalElement | null;
  answers: AstrologicalElement[];
}

export default function Home() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [data, setData] = useState<AssessmentData | null>(null);
  const [quizElement, setQuizElement] = useState<AstrologicalElement | null>(null);

  const handleStart = () => setAppState("quiz");

  const handleQuizComplete = (quizData: AssessmentData) => {
    setData(quizData);
    setAppState("lead_capture");
  };

  const handleEmailSubmit = async (email: string) => {
    if (!data) return;

    // Calculate most frequent element from answers
    const counts: Record<string, number> = { Dife: 0, Lè: 0, Dlo: 0, Tè: 0 };
    data.answers.forEach(ans => counts[ans]++);
    
    let maxElement = data.answers[0];
    let maxCount = 0;
    
    for (const el in counts) {
      if (counts[el] > maxCount) {
        maxCount = counts[el];
        maxElement = el as AstrologicalElement;
      }
    }

    setQuizElement(maxElement);

    // Send data to Cloudflare API Route
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          email,
          baseElement: data.baseElement,
          quizElement: maxElement,
          answers: data.answers
        }),
      });
    } catch (error) {
      console.error("Failed to submit assessment:", error);
    }

    setAppState("dashboard");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/medukey_logo.svg" alt="Medukey Logo" className="h-8 md:h-10 w-auto" />
            <span className="text-lg md:text-xl font-bold text-primary tracking-widest">
              MEDUKEY
            </span>
          </div>
          {appState === "landing" && (
            <nav className="hidden md:flex gap-6 text-sm font-semibold text-foreground/80">
              <a href="#hero" className="hover:text-primary transition-colors">Akey</a>
              <a href="#biography" className="hover:text-primary transition-colors">Biyografi</a>
              <a href="#masterclass" className="hover:text-primary transition-colors">Masterclass</a>
              <a href="#ebook" className="hover:text-primary transition-colors">Liv la</a>
            </nav>
          )}
        </div>
      </header>

      {appState === "landing" && <Landing onStart={handleStart} />}
      {appState === "quiz" && <AssessmentQuiz onComplete={handleQuizComplete} />}
      {appState === "lead_capture" && <LeadCapture onSubmit={handleEmailSubmit} />}
      {appState === "dashboard" && data && (
        <Dashboard 
          firstName={data.firstName}
          baseElement={data.baseElement}
          quizElement={quizElement}
        />
      )}

      {/* Footer */}
      <footer className="w-full bg-gray-50 py-10 px-6 text-center border-t border-gray-200 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="flex gap-6 mb-6">
            <a href="https://www.facebook.com/DrSainthilaire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/medukey/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@drjimmysaint-hilaire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="https://www.tiktok.com/@Dr.jimmysainthilaire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            © {new Date().getFullYear()} Medukey. Tout Dwa Rezève.
          </p>
          <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
            Avètisman: Tout enfòmasyon ou pataje nan evalyasyon sa a ap itilize sèlman pou rezon edikasyonèl ak pou voye rezilta w yo ba ou. Nou pwomèt pwoteje vi prive w.
          </p>
        </div>
      </footer>
    </main>
  );
}
