"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://media.istockphoto.com/id/174862574/photo/looking-under-the-car-bonnet-with-a-red-oil-can.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Yc_tzoQ9IVVs0I7Qlk7F6RlBdNq5DdrJKc4oIgcUKE=")',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <div className="space-y-4">
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm block">
              Performance Engineered
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              The Lifeblood of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Your Engine
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg font-medium leading-relaxed">
              Premium lubricants designed for maximum protection and efficiency. 
              Keep your machinery running smoother, longer, and stronger.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <button className="group relative px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-xs flex items-center transition-all hover:bg-orange-700 active:scale-95 cursor-pointer rounded" onClick={()=>router.push('/about')}>
             Explore more
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;