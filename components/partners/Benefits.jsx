"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Truck, Zap, ShieldCheck, Plus } from 'lucide-react';

const PartnerBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      title: "Market Lead",
      icon: <BarChart3 size={20} />,
      stats: "+24% Growth",
      activeClass: "bg-orange-600 text-white border-orange-600"
    },
    {
      title: "Logistics",
      icon: <Truck size={20} />,
      stats: "99.8% Uptime",
      activeClass: "bg-slate-950 text-white border-slate-950"
    },
    {
      title: "Tech Support",
      icon: <Zap size={20} />,
      stats: "24/7 Access",
      activeClass: "bg-orange-600 text-white border-orange-600"
    },
    {
      title: "Quality",
      icon: <ShieldCheck size={20} />,
      stats: "Zero Defect",
      activeClass: "bg-slate-950 text-white border-slate-950"
    }
  ];

  // AUTOMATIC CYCLE LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 2500); // 2.5 seconds per card
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="bg-white py-12 px-4" id='partner-benefits'>
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12 border-l-2 border-orange-600 pl-6">
          <span className="text-orange-600 font-black text-[9px] uppercase tracking-[0.4em] mb-2 block">
            Partner Benefits
          </span>
          <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter">
            The <span className="text-orange-600 text-stroke-thin">Protocol</span> Edge
          </h2>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)} // Allow manual tap to change focus
                className={`relative h-[200px] md:h-[280px] rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-700 cursor-pointer border
                  ${isActive 
                    ? `${benefit.activeClass} shadow-xl shadow-orange-600/10 scale-[1.02] z-10` 
                    : 'bg-slate-50 border-transparent text-slate-950 scale-100 z-0'
                  }`}
              >
                <div className="relative">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${isActive ? 'text-white' : 'text-slate-900'} transition-colors duration-500`}>
                      {benefit.icon}
                    </div>
                    {isActive && (
                      <motion.div layoutId="plus-icon">
                        <Plus size={14} className="text-white/50 rotate-90" />
                      </motion.div>
                    )}
                  </div>
                  
                  <h3 className={`text-sm md:text-lg font-black uppercase italic tracking-tighter leading-tight transition-colors duration-500`}>
                    {benefit.title}
                  </h3>
                </div>

                <div>
                  <div className={`h-[1px] w-full mb-3 transition-colors duration-500 ${isActive ? 'bg-white/20' : 'bg-slate-200'}`} />
                  <span className={`text-[10px] font-black uppercase transition-colors duration-500 ${isActive ? 'text-white' : 'text-orange-600'}`}>
                    {benefit.stats}
                  </span>
                </div>

                {/* PROGRESS LOADER (Visual hint of when it will switch) */}
                {isActive && (
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '100%' }} 
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;