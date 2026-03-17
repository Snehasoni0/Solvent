"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion';

// Separate Counter Component for the "Running Numbers" effect
const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{displayValue}</span>;
};

const InfoSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the images
  const imgOneY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imgTwoY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const stats = [
    { label: "Years of Legacy", value: 15, suffix: "+" },
    { label: "Purity Standards", value: 99, suffix: ".8%" },
    { label: "Active Units", value: 500, suffix: "+" },
  ];

  return (
    <section className="relative w-full py-12 bg-white flex items-center overflow-hidden font-sans border-t border-slate-100">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-slate-50 leading-none uppercase tracking-tighter">
          Solvent
        </h2>
      </div>

      <div className="max-w-360 mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-20 items-center relative z-10">
        
        {/* LEFT COLUMN: STAGGERED IMAGES */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div 
            style={{ y: imgOneY }}
            className="relative w-[85%] aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-2 border-slate-50"
          >
            <img 
              src="https://images.unsplash.com/photo-1590227763209-821c686b932f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Industrial Precision"
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 hover:grayscale-0"
            />
          </motion.div>

          <motion.div 
            style={{ y: imgTwoY }}
            className="absolute -bottom-8 -left-6 w-[55%] aspect-square rounded-4xl overflow-hidden shadow-2xl z-20 border-10 border-white"
          >
             <img 
              src="https://images.unsplash.com/photo-1590227763209-821c686b932f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Chemical Dynamics"
              className="w-full h-full object-cover grayscale brightness-75"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT & RUNNING STATS */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center space-x-3">
            <span className="text-orange-600 font-black text-[10px] tracking-[0.4em] uppercase">Corporate Standard</span>
            <div className="w-10 h-px bg-orange-600/30" />
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85] mb-8">
            Engineered <br />
            <span className="text-orange-600 italic">Stability.</span>
          </h2>

          <div className="space-y-6 max-w-xl mb-4">
            <p className="text-slate-900 text-lg md:text-xl font-bold leading-tight">
              Bridging the gap between global lubricant innovation and Rajasthan's industrial core.
            </p>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              Our lubricants utilize high-viscosity index formulations to maintain structural integrity under extreme thermal loads. We provide the chemical backbone that keeps heavy machinery moving with zero downtime, designed for 100% authenticity.
            </p>
          </div>

          {/* RUNNING STATS GRID: 3 Divs with count-up effect */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col space-y-2 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors group">
                <div className="flex items-baseline text-slate-900 group-hover:text-orange-600 transition-colors">
                  <span className="text-2xl lg:text-5xl font-black tracking-tighter">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-xs md:text-xl font-black ml-0.5">{stat.suffix}</span>
                </div>
                <p className=" text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;