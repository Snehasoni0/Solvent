"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Settings2, Component, ArrowUpRight } from 'lucide-react';

const CategorySpecs = ({ specs, title }) => {
  const icons = [<Zap size={20} />, <ShieldCheck size={20} />, <Settings2 size={20} />, <Component size={20} />];

  // Animation variants for staggered card entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered entry
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h2v2h-2v-2zm10 0h2v2h-2v-2z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-orange-600 mb-6"
          />
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-4"
          >
            Technical Specifications
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none italic"
          >
            Engineering <span className="text-orange-600 font-black">Protocols</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 mt-6 text-sm uppercase font-bold tracking-widest max-w-md"
          >
            Analytics and safety standards for {title} series
          </motion.p>
        </div>

        {/* INTERACTIVE MOBILE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specs.map((spec, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30, borderColor: "#f1f5f9" }} // Default border (slate-100)
  whileInView={{ 
    opacity: 1, 
    y: 0, 
    borderColor: ["#f1f5f9", "#ea580c", "#f1f5f9"], // Flash orange when viewed
    transition: { delay: index * 0.1, duration: 1.5 }
  }}
  viewport={{ once: true, margin: "-100px" }} // Triggers when slightly inside the screen
  
  // Mobile Tap Highlight
  whileTap={{ scale: 0.98, backgroundColor: "#fff7ed" }}
  
  className="group relative bg-white border-2 p-10 rounded-[2rem] shadow-sm transition-colors duration-500"
>
              {/* Card Numbering */}
              <span className="absolute top-10 right-10 text-4xl font-black text-slate-100 group-hover:text-orange-100 transition-colors duration-500">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg] mb-10 shadow-sm">
                  {icons[index % icons.length]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-[1.1] mb-4 group-hover:text-orange-600 transition-colors">
                  {spec}
                </h3>
                
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  Industrial Grade // Verified Protocol
                </p>

                {/* Animated Indicator - Always visible on mobile, animated on desktop */}
                <div className="mt-8 flex items-center gap-2 lg:w-0 lg:group-hover:w-full transition-all duration-700 lg:opacity-0 lg:group-hover:opacity-100">
                  <div className="h-[1px] w-12 bg-orange-600" />
                  <ArrowUpRight size={14} className="text-orange-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySpecs;