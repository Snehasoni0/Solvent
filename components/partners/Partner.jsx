"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BrandGrid = () => {
  const brands = [
    { 
      name: 'Castrol', 
      logo: '/brands/castrol.png',
      desc: "Delivering advanced liquid engineering solutions for high-performance industrial machinery and heavy-duty manufacturing equipment." 
    },
    { 
      name: 'Mobil', 
      logo: '/brands/mobil.png',
      desc: "Providing world-class synthetic lubricants designed to provide superior protection and extended equipment life cycles." 
    },
    { 
      name: 'Shell', 
      logo: '/brands/shell.png',
      desc: "Leading global energy solutions focused on operational efficiency through innovative chemical formulations and technical assets." 
    },
    { 
      name: 'TotalEnergies', 
      logo: '/brands/totalengeries.png',
      desc: "Developing broad-spectrum industrial lubricants that optimize energy consumption and reduce friction across complex systems." 
    },
    { 
      name: 'Valvoline', 
      logo: '/brands/valvoline.png',
      desc: "A legacy of chemical excellence providing specialized additives for heavy-duty engines and industrial cooling applications." 
    },
    { 
      name: 'Gulf Oil', 
      logo: '/brands/gulf.png',
      desc: "Strategic lubricant partner offering refinery-direct products for the most demanding mining and construction environments." 
    },
    { 
      name: 'Motul', 
      logo: '/brands/motul.png',
      desc: "Specialists in high-tech synthetic formulations engineered for extreme thermal stability and mechanical endurance protocols." 
    },
    { 
      name: 'Liqui Moly', 
      logo: '/brands/liquimoly.png',
      desc: "German-engineered additives and oils designed to maximize the reliability of high-precision industrial manufacturing lines." 
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* GRID CONFIGURATION: 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 flex flex-col items-center text-center hover:bg-slate-50 transition-all duration-300 group"
            >
              {/* Logo Container - Colors remain original from start */}
              <div className="w-full h-24 flex items-center justify-center mb-10">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-[160px] object-contain transition-transform duration-500 scale-95 group-hover:scale-105" 
                />
              </div>

              {/* Brand Content */}
              <h3 className="text-slate-950 font-black text-xl uppercase tracking-tighter mb-4">
                {brand.name}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {brand.desc}
              </p>
            </motion.div>
          ))}

          {/* Visual Filler for symmetry */}
          <div className="hidden lg:flex bg-slate-50 p-12 flex-col items-center justify-center text-center">
            <span className="text-slate-300 font-black text-[10px] uppercase tracking-[0.4em]">
              Authorized Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;