"use client";

import { motion } from "framer-motion";
import { AstrologicalElement } from "@/lib/zodiac";

interface DashboardProps {
  firstName: string;
  baseElement: AstrologicalElement | null;
  quizElement: AstrologicalElement | null;
}

export default function Dashboard({ firstName, baseElement, quizElement }: DashboardProps) {
  
  // Logic for recommendations based on Quiz Element
  const renderRecommendation = () => {
    switch(quizElement) {
      case 'Dife':
        return "Pratik pou Dife: Nou rekòmande te ki kalme w, meditasyon odyo dous, ak bouji relaksan pou bese estrès elektrik la.";
      case 'Dlo':
        return "Pratik pou Dlo: Nou rekòmande jounal pou fikse limit ou (boundaries), meditasyon an mach, ak planifikatè estriktire.";
      case 'Lè':
        return "Pratik pou Lè: Nou rekòmande lwil esansyèl pou konsantrasyon, egzèsis respirasyon pwofon, ak tapi ki konekte w ak tè a (grounding mats).";
      case 'Tè':
        return "Pratik pou Tè: Nou rekòmande videyo terapi mouvman entwisyon, sèl pou beny, ak liv terapi atizay kreyatif.";
      default:
        return "";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white text-foreground p-6 md:p-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Rezilta Evalyasyon w lan, {firstName}</h1>
          <div className="gold-divider mx-auto max-w-md" />
        </div>

        {/* Matrix Card */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-12 border border-gray-100 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Matris Enèji Ou</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full md:w-1/2">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-bold">Nati Kache w (Zodyak)</p>
              <p className="text-3xl text-gold font-bold">{baseElement}</p>
            </div>
            <div className="text-3xl text-gray-300 font-light">+</div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full md:w-1/2">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-bold">Enèji Kounye a</p>
              <p className="text-3xl text-primary font-bold">{quizElement}</p>
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Dyagnostik & Pratik</h3>
          <div className="bg-white p-8 rounded-2xl border border-gold/30 shadow-[0_4px_20px_rgba(212,160,23,0.08)]">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Ou se yon moun ki fèt avèk nati <strong>{baseElement}</strong>, men kounye a, lavi w ap fonksyone anpil sou enèji <strong>{quizElement}</strong> la.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-semibold text-primary">
              {renderRecommendation()}
            </p>
          </div>
        </div>

        {/* eBook Upsell (Beacons.ai) */}
        <div className="bg-primary text-white rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.15),transparent_50%)]" />
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Metrize Enèji w Nèt Ale</h2>
          <p className="text-lg text-white/80 mb-8 italic max-w-2xl mx-auto relative z-10">
            Plonje pi fon nan konesans maskilen ak feminen an. Dekouvri kijan pou w balanse lavi w, relasyon w, ak biznis ou ak liv "Énèji Féminin" an pa Dr. Jimmy Saint-Hilaire.
          </p>
          
          <a 
            href="https://beacons.ai/medukey?fbclid=IwY2xjawRd085leHRuA2FlbQIxMABicmlkETE3VTFMNGV6OXYzMzhwR2xJc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhB_ypI2DVEsIAZq6klwjawrZTtf-KcRwuyGkcqwdKPEqihi_cyDKfbcP7_O_aem_kQgCCoULFlK7a9AsgjFgtA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gold-dark transition-all hover:scale-105 active:scale-95 shadow-lg relative z-10"
          >
            Achte Liv La Kounye a
          </a>
        </div>
      </div>
    </motion.div>
  );
}
