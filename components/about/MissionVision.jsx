"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Zap, ArrowRight, Terminal, Activity } from 'lucide-react';

const blocks = [
  {
    id: "mission",
    type: "Mission Protocol",
    icon: Target,
    title: "Eliminate Friction.",
    objectives: [
      { label: "Objective", value: "Mechanical Optimization" },
      { label: "Target", value: "Zero Energy Waste" },
      { label: "Scope", value: "Industrial ROI" }
    ],
    summary: "Engineering fluid solutions that maximize mechanical DNA efficiency.",
  },
  {
    id: "vision",
    type: "Vision Protocol",
    icon: Eye,
    title: "Evolve Mobility.",
    objectives: [
      { label: "Objective", value: "Eco-System Transition" },
      { label: "Target", value: "Zero-Emission Infra" },
      { label: "Scope", value: "Rajasthan Smart Grid" }
    ],
    summary: "Bridging the gap between raw energy and intelligent EV mobility.",
  }
];

const MissionVision = () => {
  const [activeBlock, setActiveBlock] = useState("mission");

  return (
    <section className="min-h-screen lg:h-screen w-full bg-white flex flex-col relative overflow-x-hidden border-t border-slate-100 font-sans">
      
      <div className="h-20 w-full px-6 md:px-8 flex justify-between items-center border-b border-slate-100 bg-white z-20 shrink-0">
        <div className="flex flex-col">
          <div className="flex items-center space-x-3">
            <Terminal size={14} className="text-orange-600" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] leading-none text-orange-600">
              Mission & Vision
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden sm:flex flex-col items-end">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">System Load</span>
                <div className="h-1 w-20 md:w-24 bg-slate-100 rounded-full mt-1 overflow-hidden">
                    <motion.div 
                        animate={{ width: activeBlock === "mission" ? "40%" : "85%" }}
                        className="h-full bg-orange-600 transition-all duration-700"
                    />
                </div>
            </div>
            <Activity size={18} className="text-slate-300" />
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
        
        <div className="w-full lg:w-1/2 bg-slate-50 relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 p-8 lg:p-12 min-h-[350px] lg:min-h-0">
           <motion.div 
             animate={{ top: ["0%", "100%", "0%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute left-0 w-full h-[2px] bg-orange-600/10 z-0"
           />

           <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none hidden lg:flex">
              <p className="text-[35vh] font-black uppercase tracking-tighter leading-none italic rotate-12">
                {activeBlock === 'mission' ? 'ALPHA' : 'OMEGA'}
              </p>
           </div>
           
           <AnimatePresence mode="wait">
             <motion.div 
               key={activeBlock}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               className="relative z-10 w-full max-w-[280px] md:max-w-sm aspect-square bg-white border border-slate-200 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 text-center"
             >
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-[8px] ${activeBlock === 'mission' ? 'border-orange-50' : 'border-slate-50'} flex items-center justify-center mb-4 md:mb-6`}>
                    <motion.div 
                        animate={activeBlock === "mission" ? { rotate: 360 } : { y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center ${activeBlock === 'mission' ? 'bg-orange-600 text-white' : 'bg-slate-900 text-white'}`}
                    >
                        {activeBlock === 'mission' ? <Zap size={28} fill="currentColor" /> : <Eye size={28} />}
                    </motion.div>
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">System_Active</p>
                <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mt-1">{activeBlock}</h4>
             </motion.div>
           </AnimatePresence>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col bg-white shrink-0 lg:shrink">
          {blocks.map((block) => {
            const isActive = activeBlock === block.id;
            
            return (
              <div 
                key={block.id}
                onClick={() => setActiveBlock(block.id)}
                className={`flex-1 relative p-6 md:p-10 lg:p-12 cursor-pointer transition-all duration-500 border-b border-slate-100 last:border-b-0 flex flex-col justify-center
                  ${isActive ? 'bg-white' : 'bg-slate-50 hover:bg-slate-100/80'}
                  ${!isActive ? 'min-h-[100px] lg:min-h-0' : 'min-h-[250px] lg:min-h-0'}
                `}
              >
                <span className={`absolute -top-4 -right-4 text-7xl md:text-9xl font-black italic transition-opacity duration-700 hidden sm:block ${isActive ? 'opacity-5 text-orange-600' : 'opacity-[0.03] text-slate-950'}`}>
                  0{block.id === "mission" ? "1" : "2"}
                </span>

                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="space-y-1">
                    <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] transition-colors ${isActive ? 'text-orange-600' : 'text-slate-400'}`}>
                      {block.type}
                    </p>
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none transition-colors ${isActive ? 'text-slate-950' : 'text-slate-300'}`}>
                      {block.title}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                      >
                        {block.objectives.map((obj, i) => (
                          <div key={i} className="border-l-2 lg:border-l-0 lg:border-t border-orange-600 lg:border-slate-200 pl-3 lg:pl-0 lg:pt-3">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{obj.label}</p>
                            <p className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase leading-none mt-1">{obj.value}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.p 
                    animate={{ opacity: isActive ? 1 : 0 }}
                    className={`text-slate-500 font-medium text-xs md:text-sm leading-relaxed max-w-sm ${!isActive && 'hidden lg:block'}`}
                  >
                    {block.summary}
                  </motion.p>
                </div>

                {!isActive && (
                  <motion.div className="absolute bottom-6 right-6 lg:bottom-8 lg:left-12 flex items-center space-x-2">
                    <span className="text-[8px] font-black uppercase tracking-widest text-orange-600">Activate</span>
                    <ArrowRight size={12} className="text-orange-600" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default MissionVision;