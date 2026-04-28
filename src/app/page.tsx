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
          <div className="flex items-center gap-3">
            <img src="/medukey_logo.svg" alt="Medukey Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary tracking-widest hidden md:block">
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
      <footer className="w-full bg-gray-50 py-8 px-6 text-center border-t border-gray-200 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
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
