"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PartnerHero = () => {
  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Industrial Partnership"
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-5xl md:text-[100px] font-black text-white uppercase italic tracking-tighter leading-[0.85]"
        >
          Scale Your <br />
          <span className="text-orange-600 text-stroke-white">Enterprise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Join forces with the leaders in high-performance lubrication. Access exclusive industrial protocols, global logistics, and tier-one support.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* SCROLLS TO FORM */}
          <button 
            onClick={() => scrollToSection('partner-form')}
            className="w-full md:w-auto px-12 py-6 bg-orange-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl shadow-orange-600/20 active:scale-95 cursor-pointer"
          >
            Initialize Partnership
          </button>

          {/* SCROLLS TO BENEFITS */}
          <button 
            onClick={() => scrollToSection('partner-benefits')}
            className="w-full md:w-auto px-12 py-6 bg-transparent border border-white/20 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all duration-500 cursor-pointer"
          >
            View Benefits
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerHero;