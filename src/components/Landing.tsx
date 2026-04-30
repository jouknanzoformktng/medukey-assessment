"use client";

import { motion } from "framer-motion";

const AdPlaceholder = () => (
  <div className="w-full max-w-4xl mx-auto my-12 bg-gray-100 border-2 border-dashed border-gray-300 h-24 flex items-center justify-center text-gray-400 font-semibold rounded-lg shadow-inner">
    Espace pou Google Ads (728x90)
  </div>
);

export default function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.05),transparent_60%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight mt-4">
            Dekouvri Nati Kache Ou: Ki Eleman k ap Dirije Lavi w Jodi a?
          </h1>
          
          <div className="gold-divider mx-auto max-w-sm mb-8" />
          
          <p className="text-lg md:text-xl text-foreground/80 italic mb-12">
            Yon evalyasyon ki fèt pou ede w konprann kijan pou w balanse enèji maskilen (elektrik) ak feminen (mayetik) k ap aji nan ou a.
          </p>

          <button 
            onClick={onStart}
            className="bg-primary text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all hover:scale-105 active:scale-95"
          >
            Kòmanse Evalyasyon an Kounye a
          </button>
        </motion.div>
      </section>

      {/* GOOGLE AD PLACEHOLDER 1 */}
      <AdPlaceholder />

      {/* BIOGRAPHY SECTION */}
      <section id="biography" className="py-24 bg-gray-50 border-y border-gray-100 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center relative bg-gray-200">
              <img src="/profile.jpg" alt="Dr. Jimmy Saint-Hilaire" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4 tracking-tight">Dr. Jimmy Saint-Hilaire</h2>
            <h3 className="text-lg md:text-xl text-gold-dark mb-6 italic">Chirurgien et Coach en Santé Globale</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Mwen se yon doktè, yon chirijyen, men pi lwen pase sa, mwen se yon gid. Mwen la pou m ede w konprann kò w, lespri w, ak enèji w kòm yon sèl sistèm ki konekte. 
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-semibold text-primary mb-8">
              "Je t'accompagne à guérir en profondeur et à élever ta vibration."
            </p>
            
            <a 
              href="#"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl"
            >
              Rezève yon Konsiltasyon
            </a>
          </div>
        </div>
      </section>

      {/* MASTERCLASS SECTION */}
      <section id="masterclass" className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">Masterclass Enèji ak Gerizon</h2>
          <div className="gold-divider mx-auto max-w-xs mb-8" />
          <p className="text-xl text-foreground/80 mb-10">
            Antre nan pwochen kowòt metriz enèji a. Aprann kijan pou w itilize prensip syantifik ak espirityèl pou w reprann kontwòl lavi w.
          </p>
          <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/5 transition-all">
            Enskri pou Pwochen Klas La
          </button>
        </div>
      </section>

      {/* GOOGLE AD PLACEHOLDER 2 */}
      <AdPlaceholder />

      {/* EBOOK SECTION */}
      <section id="ebook" className="py-24 bg-primary text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.15),transparent_50%)]" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold mb-6">Énèji Féminin</h2>
            <p className="text-xl text-white/80 italic mb-8">
              Liv ki pral chanje fason w wè pouvwa reyèl ou. Metrize enèji mayetik ki nan ou a.
            </p>
            <a 
              href="https://stan.store/Medukeywellness?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnqeuD0juTKq8dfxBEd0lQ5y_2XYsHjUaVsME-9lWB8SnazHrAPqg50iiLq7c_aem_NkZ5YxLZF_RaQt6cAQiuVg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-gold-dark transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Achte Liv La Kounye a
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mx-auto">
            <div className="w-64 md:w-80 rounded-xl shadow-2xl overflow-hidden transform rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-500 border border-white/10 mx-auto">
              <img src="/ebook.jpg" alt="Énèji Féminin Book Cover" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
