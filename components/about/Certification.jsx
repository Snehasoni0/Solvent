"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Microscope, Landmark, Scan, Zap } from 'lucide-react';

const certs = [
  {
    id: "01",
    title: "Authorized Channel",
    tag: "AUTHENTICITY",
    desc: "Direct procurement protocols ensuring zero contamination and genuine chemical composition from global refineries.",
    icon: Award,
    pos: "lg:top-0 lg:left-0"
  },
  {
    id: "02",
    title: "ISO 9001:2015",
    tag: "COMPLIANCE",
    desc: "Rigorous quality management systems covering industrial storage and hazardous material logistics.",
    icon: ShieldCheck,
    pos: "lg:top-0 lg:right-0"
  },
  {
    id: "03",
    title: "ASTM Testing",
    tag: "ANALYSIS",
    desc: "Strict adherence to international standards for viscosity, flash point, and wear protection analysis.",
    icon: Microscope,
    pos: "lg:bottom-0 lg:left-0"
  },
  {
    id: "04",
    title: "PESO Licensed",
    tag: "GOVERNMENT",
    desc: "Fully compliant with Petroleum and Explosives Safety Organization norms for Rajasthan distribution.",
    icon: Landmark,
    pos: "lg:bottom-0 lg:right-0"
  }
];

const Certifications = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col lg:items-center lg:justify-center px-6 py-10 lg:py-12 font-sans border-t border-slate-100">
      <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-col mb-12">
        <div className="flex items-center space-x-2 text-orange-600 mb-2">
          <Scan size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Compliance Ledger</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
          Trust <span className="text-slate-300 italic">Verified.</span>
        </h2>
      </div>
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-slate-100 rounded-full" />
      </div>

      <div className="lg:hidden mb-4">
        <div className="flex items-center space-x-2 text-orange-600 mb-1">
            <Scan size={12} />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Compliance Ledger</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
          Trust <span className="text-slate-300 italic">Verified.</span>
        </h2>
      </div>

      <div className="relative w-full max-w-5xl lg:h-[70vh] flex flex-col lg:block">
        
        <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full lg:max-w-sm text-center mb-6 lg:mb-0 mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 p-3 bg-orange-50 rounded-full lg:scale-110">
                {React.createElement(certs[active].icon, { size: 24, className: "text-orange-600" })}
              </div>
              <span className="text-[8px] lg:text-[10px] font-black tracking-[0.5em] text-orange-600 uppercase mb-1">
                {certs[active].tag}
              </span>
              <h3 className="text-1xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2 lg:mb-4 leading-none">
                {certs[active].title}
              </h3>
              <p className="text-slate-500 text-[13px] lg:text-sm leading-relaxed font-medium max-w-xs">
                {certs[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:block gap-3">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`lg:absolute ${cert.pos} group cursor-pointer w-full lg:w-auto`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
            >
              <div className={`relative p-4 lg:p-10 border-2 transition-all duration-500 rounded-2xl lg:rounded-3xl flex items-center lg:block
                ${active === index 
                    ? 'border-orange-600 bg-white shadow-lg shadow-orange-100 lg:shadow-2xl' 
                    : 'border-slate-100 bg-slate-50/50 hover:border-slate-300'}`}>
                
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <span className={`text-lg lg:text-2xl font-black transition-colors ${active === index ? 'text-orange-600' : 'text-slate-200'}`}>
                    {cert.id}
                  </span>
                  <div className="h-6 lg:h-10 w-px bg-slate-200" />
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 hidden lg:block">Status: Verified</p>
                    <p className={`text-xs lg:text-base font-black uppercase tracking-tighter transition-colors ${active === index ? 'text-slate-900' : 'text-slate-400'}`}>
                      {cert.title}
                    </p>
                  </div>
                </div>

                <div className="ml-auto lg:hidden">
                    {active === index && <Zap size={12} className="text-orange-600 fill-orange-600" />}
                </div>

                {active === index && (
                  <motion.div 
                    layoutId="scanner"
                    className="absolute -inset-1 border-2 border-orange-600 rounded-2xl lg:rounded-3xl pointer-events-none hidden lg:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;