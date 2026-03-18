"use client";
import React from 'react';
import { Phone } from 'lucide-react';

const CallBtn = () => {
  return (
    <a
      href="tel:+919166744297"
      className="fixed bottom-[100px] right-6 z-[100] group"
      aria-label="Call Us"
    >
      {/* OUTER SPINNING BORDER */}
      <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-orange-600 via-transparent to-amber-400 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* PULSING BACKDROP */}
      <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping group-hover:animate-none" />

      {/* MAIN CIRCULAR BODY */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-slate-950 text-white rounded-full border border-white/10 shadow-xl transition-all duration-300 group-hover:scale-110 group-active:scale-95 overflow-hidden hover:bg-orange-600 hover:text-black">
        
        {/* Inner Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />

        <Phone 
          size={20} 
          className="relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" 
          fill="currentColor" 
        />
      </div>

      {/* FLOATING LABEL */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none">
        <span className="bg-slate-950 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-2 rounded-full border border-orange-600/50 shadow-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Call Support
        </span>
      </div>
    </a>
  );
};

export default CallBtn;