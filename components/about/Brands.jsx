"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const solventBrands = [
  { name: 'Castrol', logo: '/brands/castrol.png' },
  { name: 'Mobil', logo: '/brands/mobil.png' },
  { name: 'Shell', logo: '/brands/shell.png' },
  { name: 'TotalEnergies', logo: '/brands/totalengeries.png' },
  { name: 'Valvoline', logo: '/brands/valvoline.png' },
  { name: 'Gulf Oil', logo: '/brands/gulf.png' },
  { name: 'Motul', logo: '/brands/motul.png' },
  { name: 'Liqui Moly', logo: '/brands/liquimoly.png' },
];

const Partners = () => {
  const row1 = solventBrands.slice(0, 4);
  const row2 = solventBrands.slice(4, 8);

  return (
    // Changed h-screen to h-auto and reduced min-height
    <section className="w-full bg-white flex flex-col relative overflow-hidden border-t border-slate-100 font-sans">

      {/* 1. FIXED HEADER AREA */}
      <div className="py-10 px-6 md:px-12 flex flex-col bg-white z-20 shrink-0">
        <div className="flex items-center space-x-2 text-orange-600 mb-2">
          <ShieldCheck size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
          Strategic <span className="text-slate-300 italic">Partnerships.</span>
        </h2>
      </div>

      {/* 2. COMPACT MARQUEE AREA - Removed flex-1, set explicit padding */}
      <div className="w-full bg-slate-50/50 relative py-10 md:py-16 overflow-hidden border-y border-slate-100">

        {/* Background Decorative Text - Adjusted size for better fit */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <h3 className="text-[15vw] font-black uppercase tracking-tighter">SOLVENT</h3>
        </div>

        <div className="relative z-10 space-y-4 md:space-y-6">
          {/* Row 1: Left Scrolling */}
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex space-x-4 md:space-x-6 whitespace-nowrap px-4"
            >
              {[...row1, ...row1, ...row1, ...row1].map((brand, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:border-orange-600 transition-all group shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-5 md:h-6 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="h-4 w-px bg-slate-100" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right Scrolling */}
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [-1200, 0] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
              className="flex space-x-4 md:space-x-6 whitespace-nowrap px-4"
            >
              {[...row2, ...row2, ...row2, ...row2].map((brand, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-sm hover:border-orange-600 transition-all group shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-5 md:h-6 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="h-4 w-px bg-slate-100" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. PARTNERSHIP CALL TO ACTION - Reduced padding */}
      <div className="py-8 px-6 md:px-12 bg-white flex flex-col lg:flex-row items-center justify-between gap-6 z-20 shrink-0">
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-[9px] font-black text-orange-600 uppercase tracking-[0.3em] mb-1">Global Supply Chain</p>
          <h4 className="text-xl md:text-2xl font-black text-slate-950 uppercase tracking-tighter leading-tight">
            Delivering world-class lubricant brands <span className="text-slate-400">across the industrial sector.</span>
          </h4>
        </div>
        <Link href='/contact'>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full lg:w-auto bg-slate-900 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 group transition-colors hover:bg-orange-600 shadow-md shadow-slate-200 cursor-pointer"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Connect with our team</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </Link>

      </div>

    </section>
  );
};

export default Partners;