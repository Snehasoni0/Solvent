"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    category: "Efficiency",
    title: "Zero-Downtime: The Impact of Synthetic Grease on Fleet ROI",
    time: "6 min read",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Innovation",
    title: "Future of Friction: Bio-Lubricants in Modern Engines",
    time: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "Maintenance",
    title: "The Silent Killer: Identifying Oxidation Early",
    time: "10 min read",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
  },
  {
    category: "Logistics",
    title: "Supply Chain Optimization for Industrial Lubricants",
    time: "7 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section className="h-screen w-full bg-white overflow-hidden flex flex-col pt-12">
      {/* Header - Fixed at top */}
      <div className="text-center  space-y-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-900 font-bold uppercase tracking-[0.4em] text-[10px]"
                >
                   Engineering Insights
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-black text-orange-600 uppercase tracking-tighter">
                  The Journal
                </h2>
              </div>
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 mb-8 shrink-0">
        <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">
         
        </span>
        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mt-1">
          
        </h2>
      </div>

      {/* Main 100vh Split Body */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden border-t border-slate-100">
        
        {/* LEFT COLUMN: The Big Featured Post (Static) */}
        <div className="lg:w-3/5 h-full relative group cursor-pointer border-r border-slate-100 p-6 md:p-12 overflow-hidden flex flex-col">
          <div className="relative flex-1 overflow-hidden rounded-[2rem]">
            <img 
              src="https://media.istockphoto.com/id/2211331041/photo/red-and-green-gasoline-fuel-pump-nozzles-at-gas-station.webp?a=1&b=1&s=612x612&w=0&k=20&c=zOdBpcmYF2P2WyjMq65xU4Wy9E0tmk9byd0kLCkPTzk=" 
              alt="Featured" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">
                Featured Paper
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                Molecular Stability: Testing 5W-40 <br className="hidden md:block" /> in 50°C Desert Heat
              </h3>
              <div className="flex items-center text-white/70 text-xs font-bold uppercase tracking-widest space-x-4">
                <span className="flex items-center"><Clock size={14} className="mr-1 text-orange-500" /> 12 Min Read</span>
                <span className="text-white/20">|</span>
                <span className="hover:text-white transition-colors">Read Full Technical Analysis →</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Independent Scroller */}
        <div className="lg:w-2/5 h-full relative bg-slate-50/30">
          {/* Edge Fades for scroll elegance */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />

          {/* Hidden Scrollbar Area */}
          <div className="h-full overflow-y-auto no-scrollbar py-12 px-6 md:px-12 space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-5 items-start cursor-pointer"
              >
                <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-slate-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="space-y-2 py-1">
                  <span className="text-orange-600 text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                  <h4 className="text-md font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase">
                    <Clock size={10} className="mr-1" /> {post.time}
                  </div>
                </div>
                <div className="ml-auto pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-orange-600" />
                </div>
              </motion.div>
            ))}
            
            {/* View More Trigger */}
            <div className="pt-8 pb-12">
                <button className="flex items-center space-x-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] group">
                    <span>Explore Archive</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Blog;