"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'Engine Oil', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5naW5lJTIwb2lsfGVufDB8fDB8fHww', count: '45' },
  { name: 'Gear Oil', image: 'https://images.unsplash.com/photo-1701448149877-228f3163604d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VhciUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D', count: '12' },
  { name: 'Grease', image: 'https://images.unsplash.com/photo-1561338800-3aca39ac913e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlYXNlfGVufDB8fDB8fHww', count: '18' },
  { name: 'Coolant', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop', count: '08' },
  { name: 'Filters', image: 'https://images.unsplash.com/photo-1763679112092-053a6eadd72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVoaWNsZSUyMGZpbHRlcnxlbnwwfHwwfHx8MA%3D%3D', count: '32' },
  { name: 'Batteries', image: 'https://plus.unsplash.com/premium_photo-1658527217852-a4fba95fcd66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVoaWNsZSUyMEJhdHRlcmllc3xlbnwwfHwwfHx8MA%3D%3D', count: '15' },
];

const duplicatedCategories = [...categories, ...categories];

const Categories = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">
          Precision Engineering
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mt-2">
          Product Ecosystem
        </h2>
      </div>

      {/* Main Container with Hover Detection */}
      <div 
        className="flex w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex space-x-6 whitespace-nowrap"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedCategories.map((cat, index) => (
            <div 
              key={index}
              className="relative w-[320px] h-[420px] shrink-0 rounded-2xl overflow-hidden bg-slate-100 group/card border border-slate-200 cursor-pointer"
            >
              {/* Zooming Image */}
              <img 
                src={cat.image} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />

              {/* Card UI Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {cat.count} SKUs
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                      {cat.name}
                    </h3>
                    <div className="h-1 w-8 bg-orange-600 group-hover/card:w-full transition-all duration-500" />
                  </div>

                  {/* EXPLORE BUTTON - Slides up on hover */}
                  <div className="overflow-hidden">
                    <button className="flex items-center space-x-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest translate-y-20 group-hover/card:translate-y-0 transition-transform duration-500">
                      <span>Explore Category</span>
                      <ArrowRight size={14} className="text-orange-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;