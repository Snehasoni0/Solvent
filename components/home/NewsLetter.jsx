"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Cpu } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  // Variants for professional staggered entrance
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* CONTENT SIDE */}
          <div className="space-y-6">
            <motion.div variants={fadeUp} className="flex items-center space-x-3">
              <Cpu size={14} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                Technical Publication
              </span>
            </motion.div>

            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Engineering <br />
              <span className="text-orange-600">Intelligence.</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-slate-500 text-sm md:text-base font-medium max-w-sm leading-relaxed">
              Join 5,000+ industry professionals. Receive technical whitepapers, 
              thermal dynamic studies, and fleet ROI analysis once per month.
            </motion.p>
          </div>

          {/* FORM SIDE - Professional Slim UI */}
          <motion.div variants={fadeUp} className="relative">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="flex flex-col sm:flex-row items-stretch gap-0 border-b-2 border-slate-900 overflow-hidden">
                <div className="relative flex-1 flex items-center">
                  <motion.div 
                    animate={{ 
                      x: isFocused ? 5 : 0,
                      color: isFocused ? "#ea580c" : "#94a3b8"
                    }}
                    className="pl-2 transition-colors"
                  >
                    <Send size={18} />
                  </motion.div>
                  
                  <input
                    type="email"
                    required
                    placeholder="CORPORATE EMAIL ADDRESS"
                    value={email}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent py-5 px-4 text-sm font-black text-slate-900 placeholder:text-slate-200 focus:outline-none  tracking-widest"
                  />
                </div>

                <motion.button
                  whileHover={{ backgroundColor: "#ea580c" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Minimalist Progress Line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                className="h-[2px] bg-orange-600 w-full origin-left -mt-[2px]"
              />
            </form>

            {/* Success Message - Floating overlay */}
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white flex items-center space-x-3 z-20"
                >
                  <CheckCircle2 className="text-orange-600" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">
                    Transmission Successful. Check your inbox.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between opacity-60">
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Secure Data Uplink
               </p>
               <div className="h-px flex-1 mx-4 bg-slate-100" />
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  No Spam Policy
               </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;