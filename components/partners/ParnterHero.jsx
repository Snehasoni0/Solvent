"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PartnersHero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Industrial Tone */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070')` 
        }}
      />
      
      {/* Heavy Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-slate-950/75 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter">
            Our <br /> 
            <span className="text-orange-600 italic">Partners</span>
          </h1>
          
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
            Integrating industry-leading brands to provide a comprehensive chemical backbone for heavy manufacturing and Rajasthan's industrial landscape.
          </p>

        </motion.div>
      </div>

    </section>
  );
};

export default PartnersHero;