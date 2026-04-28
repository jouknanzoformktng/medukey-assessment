"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getZodiacElementFromDate, AstrologicalElement, ZODIAC_SIGNS } from "@/lib/zodiac";

const QUESTIONS = [
  {
    text: "Lè w anba gwo estrès oswa gen yon kriz nan lavi w jodi a, kòman ou reyaji natirèlman kounye a?",
    options: [
      { id: "A", text: "Mwen atake l imedyatman, mwen aji epi m pwojte fòs mwen.", element: "Dife" },
      { id: "B", text: "Mwen pèdi konsantrasyon, lavi m vin an dezòd, epi m pa ka fini sa m kòmanse.", element: "Lè" },
      { id: "C", text: "Mwen kite l pase sou mwen, mwen plonje nan pasivite menm si sa fè m mal.", element: "Dlo" },
      { id: "D", text: "Mwen vin twò rijid, mwen fèmen kò m, epi m ap chèche pèfeksyon nan yon pwen ki paralize m.", element: "Tè" }
    ]
  },
  {
    text: "Nan mitan yon konfli oswa lè w gen presyon nan relasyon w ak lòt moun, ki atitid k ap domine w?",
    options: [
      { id: "A", text: "Mwen monte vwa m, mwen vin agresif epi m vle gen rezon koute ke koute.", element: "Dife" },
      { id: "B", text: "Mwen pale anpil san m pa ale nan pwofondè, tout lavi m an dezòd.", element: "Lè" },
      { id: "C", text: "Mwen gen anpil senpati ak pasyans, men mwen souvan absòbe pwoblèm lòt moun.", element: "Dlo" },
      { id: "D", text: "Mwen vin twò rijid epi m fèmen tèt mwen, mwen paka chanje lide m.", element: "Tè" }
    ]
  },
  {
    text: "Lè li rive sou fason ou wè pouvwa pèsonèl ou ak fason ou atire resous chak jou...",
    options: [
      { id: "A", text: "Fòk mwen kouri dèyè sa m vle avèk kouraj ak lidèchip.", element: "Dife" },
      { id: "B", text: "Mwen kòmanse poze anpil kesyon, m ap chèche rasanble moun pou nou fè brase lide (brainstorming).", element: "Lè" },
      { id: "C", text: "Fòk mwen kreye espas pou m atire resous yo san m pa kouri dèyè yo.", element: "Dlo" },
      { id: "D", text: "Mwen rete kalm, m analize detay yo, epi m chèche yon plan solid e pratik pou n soti nan sa.", element: "Tè" }
    ]
  },
  {
    text: "Lè w ap gade nivo fatig ou jodi a, ki sa ki sous prensipal epizman w (burnout) oswa blokaj ou?",
    options: [
      { id: "A", text: "Kò m epize paske m aji san repoze, m bay san ranpli.", element: "Dife" },
      { id: "B", text: "Mwen bezwen yon distrayaksyon; m pito ap tande mizik oswa pale ak moun pito.", element: "Lè" },
      { id: "C", text: "Lespri m epize paske mwen kenbe twòp koneksyon pwofon ak pwoblèm lòt moun.", element: "Dlo" },
      { id: "D", text: "Mwen renmen silans la, sitou si m nan lanati oswa m ap òganize espas fizik mwen an.", element: "Tè" }
    ]
  }
];

interface AssessmentData {
  firstName: string;
  baseElement: AstrologicalElement | null;
  answers: AstrologicalElement[];
}

export default function AssessmentQuiz({ 
  onComplete 
}: { 
  onComplete: (data: AssessmentData) => void 
}) {
  const [step, setStep] = useState<number>(0);
  const [firstName, setFirstName] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [selectedSign, setSelectedSign] = useState("");
  const [answers, setAnswers] = useState<AstrologicalElement[]>([]);

  // Total steps = 1 (Identity) + 4 (Questions) = 5
  const progress = ((step) / 5) * 100;

  const handleIdentitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName) return;
    if (!selectedSign && (!birthMonth || !birthDay)) return;
    setStep(1);
  };

  const handleAnswer = (element: AstrologicalElement) => {
    const newAnswers = [...answers, element];
    setAnswers(newAnswers);
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      let baseElement: AstrologicalElement | null = null;
      if (selectedSign) {
        const signData = ZODIAC_SIGNS.find(s => s.id === selectedSign);
        if (signData) baseElement = signData.element;
      } else if (birthMonth && birthDay) {
        baseElement = getZodiacElementFromDate(parseInt(birthMonth), parseInt(birthDay));
      }
      onComplete({ firstName, baseElement, answers: newAnswers });
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-12 items-center p-6">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl bg-gray-100 h-2 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="h-full bg-gold transition-all duration-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full max-w-2xl relative">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Premye Etap</h2>
              <form onSubmit={handleIdentitySubmit} className="space-y-6">
                <div>
                  <label className="block text-lg mb-2 text-foreground/80 font-semibold">Kòman ou rele?</label>
                  <input 
                    type="text" 
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Ekri non w la a..."
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <label className="block text-lg mb-4 text-foreground/80 font-semibold">Chwazi siy zodyak ou dirèkteman:</label>
                  <select
                    value={selectedSign}
                    onChange={(e) => {
                      setSelectedSign(e.target.value);
                      setBirthMonth("");
                      setBirthDay("");
                    }}
                    className="w-full p-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                  >
                    <option value="">-- Chwazi Siy Ou --</option>
                    {ZODIAC_SIGNS.map(sign => (
                      <option key={sign.id} value={sign.id}>{sign.name}</option>
                    ))}
                  </select>

                  <div className="relative flex py-6 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400">OSWA antre dat ou fèt la</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-sm mb-2 text-gray-600">Mwa</label>
                      <select 
                        value={birthMonth}
                        onChange={(e) => {
                          setBirthMonth(e.target.value);
                          setSelectedSign("");
                        }}
                        className="w-full p-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      >
                        <option value="">Mwa</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label className="block text-sm mb-2 text-gray-600">Jou</label>
                      <select 
                        value={birthDay}
                        onChange={(e) => {
                          setBirthDay(e.target.value);
                          setSelectedSign("");
                        }}
                        className="w-full p-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      >
                        <option value="">Jou</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-primary-hover transition-colors"
                >
                  Kontinye
                </button>
              </form>
            </motion.div>
          )}

          {step > 0 && step <= 4 && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primary mb-8 leading-snug">
                {QUESTIONS[step - 1].text}
              </h3>
              <div className="space-y-4">
                {QUESTIONS[step - 1].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.element as AstrologicalElement)}
                    className="w-full text-left p-5 text-lg border border-gray-200 rounded-xl hover:border-gold hover:bg-gold/5 transition-all text-foreground/90 group"
                  >
                    <span className="font-bold text-gold mr-3 group-hover:text-primary transition-colors">{option.id}.</span>
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
