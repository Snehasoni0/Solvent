"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import the router

const categories = [
  { name: 'Engine Oil', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&auto=format&fit=crop&q=60', count: '45', slug: 'engine-oil' },
  { name: 'Gear Oil', image: 'https://images.unsplash.com/photo-1701448149877-228f3163604d?w=500&auto=format&fit=crop&q=60', count: '12', slug: 'gear-oil' },
  { name: 'Grease', image: 'https://images.unsplash.com/photo-1561338800-3aca39ac913e?w=500&auto=format&fit=crop&q=60', count: '18', slug: 'grease' },
  { name: 'Coolant', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop', count: '08', slug: 'coolant' },
  { name: 'Filters', image: 'https://images.unsplash.com/photo-1763679112092-053a6eadd72f?w=500&auto=format&fit=crop&q=60', count: '32', slug: 'filters' },
  { name: 'Batteries', image: 'https://plus.unsplash.com/premium_photo-1658527217852-a4fba95fcd66?w=500&auto=format&fit=crop&q=60', count: '15', slug: 'batteries' },
];

const Categories = () => {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  
  const displayCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    if (isPaused) return;
    const controls = animate(x, [0, -2000], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
    });
    return controls.stop;
  }, [isPaused, x]);

  const handleItemClick = (e, slug) => {
    setIsPaused(true);
    const container = containerRef.current;
    const item = e.currentTarget;
    
    if (container && item) {
      const containerWidth = container.offsetWidth;
      const itemOffset = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const targetX = -(itemOffset - (containerWidth / 2) + (itemWidth / 2));
      
      animate(x, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 30
      });
    }
  };

  // New function to handle the actual navigation
  const handleExplore = (e, slug) => {
    e.stopPropagation(); // Prevents the card centering logic from conflicting
    router.push(`/category/${slug}`);
  };

  return (
    <section className="py-0 md:py-12  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 md:mb-16 text-center">
        <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">
          Precision Engineering
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mt-2">
          Product Ecosystem
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="flex w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
      >
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          style={{ x, width: 'fit-content' }}
          className="flex space-x-6 whitespace-nowrap px-10"
        >
          {displayCategories.map((cat, index) => (
            <motion.div 
              key={index}
              onClick={(e) => handleItemClick(e, cat.slug)}
              className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] shrink-0 rounded-2xl overflow-hidden bg-slate-100 group/card border border-slate-200"
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 lg:group-hover/card:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 pointer-events-none" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 pointer-events-none">
                <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest w-fit">
                  {cat.count} SKUs
                </span>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                      {cat.name}
                    </h3>
                    <div className="h-1 bg-orange-600 w-full lg:w-8 lg:group-hover/card:w-full transition-all duration-500" />
                  </div>

                  <div className="overflow-hidden">
                    <button 
                      onClick={(e) => handleExplore(e, cat.slug)}
                      className="flex items-center space-x-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest pointer-events-auto hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} className="text-orange-500 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;