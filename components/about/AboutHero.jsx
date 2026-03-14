"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';

const AboutHero = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section className="h-screen w-full bg-white flex flex-col relative overflow-hidden selection:bg-orange-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL OVERLAY (GRID LINES) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="h-full w-full grid grid-cols-4 md:grid-cols-12 px-6 md:px-12 opacity-[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-slate-900 h-full last:border-r-0" />
          ))}
        </div>
      </div>

      {/* 2. RESPONSIVE HEADER */}
      <div className="w-full px-6 md:px-12 py-6 flex justify-between items-center shrink-0 z-20">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-3"
        >
          <div className="h-[2px] w-8 md:w-12 bg-slate-900" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-900 leading-none">
            About Us
          </span>
        </motion.div>
      </div>

      {/* 3. MAIN KINETIC CONTENT */}
      <div className="flex-1 w-full px-6 md:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 z-10 overflow-y-auto lg:overflow-hidden py-4 md:py-0">
        
        {/* TEXT COLUMN: Dynamic Fluid Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-4">
            <motion.div custom={1} variants={slideUp} initial="hidden" animate="visible" className="flex items-center space-x-2 text-orange-600">
              <Zap size={12} fill="currentColor" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Precision Infrastructure</span>
            </motion.div>
            
            <motion.h1 
              custom={2} variants={slideUp} initial="hidden" animate="visible"
              className="text-[12vw] lg:text-[7vw] font-black text-slate-900 uppercase tracking-tighter leading-[0.8] drop-shadow-sm"
            >
              The New <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0f172a' }}>Standard.</span>
            </motion.h1>
          </div>

          <motion.div 
             custom={3} variants={slideUp} initial="hidden" animate="visible"
             className="relative group"
          >
            <p className="text-slate-500 font-medium text-sm md:text-lg lg:text-xl max-w-lg leading-relaxed border-l-[3px] border-slate-900 pl-6 md:pl-8">
              We are architects of the EV ecosystem in Rajasthan. Solvent bridges the gap between raw energy and smart mobility through precision-engineered charging hubs.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE CARDS: Responsive Modular Grid */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center py-4 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 h-full max-h-[500px] lg:max-h-none">
            
            {/* Card 1: Static Slate */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="col-span-1 bg-slate-950 p-5 md:p-8 flex flex-col justify-between rounded-none border-t-4 border-orange-600 shadow-2xl"
            >
              <Shield className="text-orange-600" size={24} />
              <div className="space-y-1">
                <h4 className="text-white font-black uppercase text-sm md:text-lg tracking-tight leading-tight">Zero-Failure <br />Policy</h4>
                <p className="text-slate-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Hardware Redundancy</p>
              </div>
            </motion.div>

            {/* Card 2: Kinetic Orange */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="col-span-1 bg-orange-600 p-5 md:p-8 flex flex-col justify-between rounded-none shadow-2xl relative overflow-hidden"
            >
              <ArrowRight className="text-white relative z-10" size={24} />
              <div className="relative z-10">
                <h4 className="text-white font-black uppercase text-sm md:text-lg tracking-tight leading-tight">Real-Time <br />Telemetry</h4>
                <p className="text-orange-200 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Cloud-Integrated</p>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10 text-white font-black text-9xl italic select-none">
                02
              </div>
            </motion.div>

            {/* Card 3: Landscape Metric */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="col-span-2 bg-slate-50 border border-slate-100 p-5 md:p-8 flex items-center justify-between rounded-none shadow-sm"
            >
              <div className="space-y-1">
                 <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Sustainability Impact</p>
                 <h4 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">40% Emissions Cut</h4>
              </div>
              <div className="hidden sm:flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white bg-slate-200 shadow-md" />
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;