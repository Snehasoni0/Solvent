"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { policiesData } from '@/data/policies';
import { motion } from 'framer-motion';
import { ShieldAlert, Clock, FileText, ArrowRight } from 'lucide-react';

const PolicyPage = () => {
  const params = useParams();
  const policy = policiesData[params.slug];

  if (!policy) {
    return <div className="h-screen flex items-center justify-center font-black uppercase">Policy Not Found</div>;
  }

  return (
    <div className="bg-white min-h-screen font-sans text-slate-950">
      
      {/* HERO SECTION - Matching your brand style */}
      <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-32" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-orange-500 mb-6"
          >
            <ShieldAlert size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Official Legal Documentation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none"
          >
            {policy.title}<span className="text-orange-600">.</span>
          </motion.h1>

          <div className="flex items-center gap-4 mt-8 text-slate-400">
             <Clock size={14} />
             <span className="text-[10px] font-bold uppercase tracking-widest">Last Updated: {policy.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {policy.content.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-16 group"
            >
              <div className="flex items-start gap-6">
                <div className="text-orange-600 font-black italic text-2xl pt-1">
                  0{idx + 1}.
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-orange-600 transition-colors">
                    {section.heading}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {section.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;