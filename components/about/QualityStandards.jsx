"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Microscope, CheckCircle2, FlaskConical, ChevronRight, Activity } from 'lucide-react';

const standards = [
  {
    id: "iso-9001",
    tag: "ISO_9001:2015",
    title: "Precision Management",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    details: "International benchmark for consistent product quality and molecular stability.",
    stat: "100% Pass"
  },
  {
    id: "astm",
    tag: "ASTM_D445",
    title: "Viscosity Control",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800",
    details: "Standardized testing for kinematic fluidity across extreme thermal ranges.",
    stat: "98.4% Acc."
  },
  {
    id: "ev-safe",
    tag: "IEC_61851",
    title: "EV Grid Safety",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    details: "Global safety protocols for high-voltage EV infrastructure in Rajasthan.",
    stat: "Verified"
  }
];

const QualityStandards = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <section className="min-h-screen lg:h-screen w-full bg-white flex flex-col relative overflow-hidden border-t border-slate-100">
      
      <div className="h-20 w-full px-6 md:px-12 flex justify-between items-center bg-white z-30 shrink-0 border-b border-slate-50">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 text-orange-600">
            <Microscope size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Quality Standards</span>
          </div>
        </div>
        <CheckCircle2 size={24} className="text-orange-600 hidden sm:block" />
      </div>

      <div className="flex-1 w-full flex flex-col lg:flex-row p-4 md:p-8 lg:p-10 gap-4 overflow-hidden bg-slate-50/30">
        {standards.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              animate={{ 
                flex: isActive ? 3 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm flex flex-col justify-end"
            >
              <motion.img 
                layout
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
              
              <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90' : 'bg-slate-900/60 opacity-100 group-hover:bg-slate-900/40'}`} />

              {!isActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 hidden lg:flex items-center justify-center"
                >
                  <p className="text-white/40 font-black uppercase tracking-[0.5em] -rotate-90 whitespace-nowrap text-xs">
                    {item.tag}
                  </p>
                </motion.div>
              )}

              <div className="relative z-10 p-6 md:p-10 w-full">
                <div className="max-w-md">
                   <div className="flex items-center space-x-3 mb-4">
                      <div className={`px-3 py-1 text-[9px] font-black rounded-full tracking-widest transition-colors ${isActive ? 'bg-orange-600 text-white' : 'bg-white/20 text-white'}`}>
                        {item.tag}
                      </div>
                      {isActive && (
                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center text-white/60 space-x-2">
                           <Activity size={12} className="text-orange-500" />
                           <span className="text-[9px] font-black uppercase">{item.stat}</span>
                        </motion.div>
                      )}
                   </div>

                   <motion.h3 
                    layout="position"
                    className={`font-black uppercase tracking-tighter leading-none transition-all duration-500 ${isActive ? 'text-3xl md:text-5xl text-white mb-4' : 'text-xl text-white/60'}`}
                   >
                     {item.title}
                   </motion.h3>

                   <AnimatePresence>
                     {isActive && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden"
                       >
                         <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                           {item.details}
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </div>

              <div className={`absolute top-8 right-8 transition-colors ${isActive ? 'text-orange-600' : 'text-white/10'}`}>
                 <ShieldCheck size={isActive ? 48 : 32} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QualityStandards;