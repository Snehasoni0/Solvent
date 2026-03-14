"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowRight, ArrowDownRight, Zap } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    id: "QUES-01",
    question: "How do you ensure lubricant authenticity?",
    answer: "Every batch is procured directly from global refineries with original manufacturer test certificates (MTC) and sealed tamper-proof packaging to ensure zero contamination."
  },
  {
    id: "QUES-02",
    question: "What is the typical industrial lead time?",
    answer: "For Rajasthan-based hubs (Jodhpur, Jaipur, Udaipur), we maintain a 24-48 hour delivery window through our dedicated logistics fleet and regional warehouses."
  },
  {
    id: "QUES-03",
    question: "Do you provide technical oil analysis?",
    answer: "Our technical team assists with used oil analysis (UOA) and machinery-specific lubricant mapping to extend equipment lifespan and optimize drain intervals."
  },
  {
    id: "QUES-04",
    question: "Are you licensed for government projects?",
    answer: "Yes. We are fully PESO compliant and hold all necessary industrial safety licenses to handle large-scale B2B and B2G (Government) supply contracts."
  }
];

const FAQPreview = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-12 lg:py-24 px-6 md:px-12 font-sans border-t border-slate-100 relative overflow-hidden">
      
      {/* 1. SECTION HEADER (Consistent with Certifications/Partners) */}
      <div className="flex flex-col mb-12 lg:mb-20">
        <div className="flex items-center space-x-3 mb-4">
          <HelpCircle size={14} className="text-orange-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] leading-none text-orange-600">
            Knowledge Base
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
          Common <span className="text-slate-300 italic">Queries.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* 2. THE INTERACTIVE FAQ STACK */}
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              onMouseEnter={() => setActive(index)}
              className={`relative group cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden border-2
                ${active === index ? 'border-orange-600 bg-white shadow-2xl shadow-orange-100' : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'}`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <span className={`text-[10px] font-mono transition-colors ${active === index ? 'text-orange-600' : 'text-slate-400'}`}>
                      {faq.id}
                    </span>
                    <div className={`h-px w-8 transition-all ${active === index ? 'bg-orange-600 w-12' : 'bg-slate-200'}`} />
                  </div>
                  {active === index && <Zap size={14} className="text-orange-600 animate-pulse" />}
                </div>

                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${active === index ? 'text-slate-900' : 'text-slate-500'}`}>
                  {faq.question}
                </h3>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* 3. THE CALL-TO-ACTION PANEL */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-slate-950 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-10 text-white group-hover:rotate-12 transition-transform">
                <ArrowDownRight size={80} />
            </div>

            <h4 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 leading-tight relative z-10">
                Still have <br />
                <span className="text-orange-500">Technical</span> Questions?
            </h4>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-8 relative z-10">
                Our support team is active 24/7 for industrial partners.
            </p>

            <Link href="/faqs" className="relative z-10 block">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-slate-950 py-4 rounded-2xl flex items-center justify-center space-x-3 group/btn hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
              >
                <span className="text-[10px] font-black uppercase tracking-widest">Explore Full FAQ</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                    <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest">Average Response</p>
                    <p className="text-white text-sm font-black">{'<'} 2 Hours</p>
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800" />
                    ))}
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQPreview;