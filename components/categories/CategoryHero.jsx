"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CategoryHero = ({ title, tagline, description, image }) => {
  const { scrollY } = useScroll();
  
  // State to check if we are on desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkRes = () => setIsDesktop(window.innerWidth >= 1024);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  // Parallax effect: Only apply vertical text shift if it's desktop
  // On mobile, textY will stay 0 so it doesn't overlap the image
  const textY = useTransform(scrollY, [0, 500], [0, isDesktop ? 100 : 0]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.15]);

  return (
    <section className="relative w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
      
      {/* LEFT CONTENT: Text & Branding */}
      <div className="relative w-full lg:w-1/2 flex items-center px-6 md:px-16 py-16 lg:py-20 z-20 bg-white">
        <motion.div 
          style={{ y: textY }}
          className="max-w-xl"
        >
          {/* Industrial Badge */}
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="h-[2px] w-8 lg:w-12 bg-orange-600" />
            <span className="text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.5em]">
              {tagline}
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-5xl md:text-7xl lg:text-[100px] font-black text-slate-950 uppercase tracking-tighter leading-[0.9] lg:leading-[0.8] italic"
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-slate-500 mt-6 lg:mt-10 text-base md:text-lg lg:text-xl leading-relaxed font-medium max-w-md border-l-2 border-slate-100 pl-4 lg:pl-6"
          >
            {description}
          </motion.p>

          {/* Interactive Mouse Indicator */}
          <div className="hidden lg:flex items-center gap-4 mt-16 opacity-30">
            <div className="w-5 h-8 border-2 border-slate-900 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-slate-900 rounded-full" 
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Scroll to Explore Specs</span>
          </div>
        </motion.div>
      </div>

      {/* RIGHT CONTENT: Image Container */}
      <div className="relative w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-full overflow-hidden bg-slate-100">
        <motion.div 
          style={{ scale: imageScale }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale lg:hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </motion.div>

        {/* Industrial Overlay */}
        <div className="absolute top-0 right-0 p-6 lg:p-8 flex flex-col items-end gap-2 pointer-events-none">
          <span className="text-white font-mono text-[9px] lg:text-[10px] opacity-60 lg:opacity-40 uppercase tracking-tighter">Ref: {title.substring(0,3)}-001</span>
          <div className="w-24 lg:w-32 h-[1px] bg-white opacity-20" />
        </div>

        {/* Diagonal Cut - Hidden on Mobile to prevent gaps */}
        <div className="absolute top-0 left-0 h-full w-24 bg-white hidden lg:block" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }} />
      </div>

    </section>
  );
};

export default CategoryHero;