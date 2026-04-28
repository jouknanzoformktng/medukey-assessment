"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadCapture({ 
  onSubmit 
}: { 
  onSubmit: (email: string) => void 
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
  };

  return (
    <div className="min-h-screen flex flex-col pt-12 items-center p-6">
      {/* Progress Bar (99%) */}
      <div className="w-full max-w-2xl bg-gray-100 h-2 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="h-full bg-gold transition-all duration-1000"
          initial={{ width: "80%" }}
          animate={{ width: "99%" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">Felisitasyon!</h2>
        <p className="text-xl text-foreground/80 mb-8 italic">
          Rezilta w yo pare. Antre imèl ou pou w resevwa dyagnostik 4 eleman w lan gratis.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-center"
            placeholder="imel-ou@gmail.com"
          />
          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl text-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-colors"
          >
            Wè Rezilta Mwen
          </button>
        </form>
      </motion.div>
    </div>
  );
}
