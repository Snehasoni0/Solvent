"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

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

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-8 md:py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >

          {/* LEFT: ENGAGING CONTENT */}
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="flex items-center space-x-3">
              <Sparkles size={16} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
                Weekly Updates
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h3 variants={fadeUp} className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                Stay in the <br />
                <span className="text-orange-600">Fast Lane.</span>
              </motion.h3>

              <motion.p variants={fadeUp} className="text-slate-600 text-sm md:text-lg font-medium max-w-md leading-relaxed">
                Subscribe to our newsletter for exclusive deals, product launches,
                and the latest maintenance tips delivered to your inbox.
              </motion.p>
            </div>

            {/* Social Proof / Benefit Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              {["Exclusive Offers", "New Arrivals", "Expert Tips"].map((text) => (
                <div key={text} className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="relative w-full lg:w-[115%] lg:-ml-[15%]">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="flex flex-col md:flex-row items-stretch gap-4">

                {/* INPUT WRAPPER */}
                <div className="relative flex-[3] group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR CORPORATE EMAIL"
                    value={email}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white py-4 pl-16 pr-8 rounded-2xl text-[13px] font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-orange-600/5 transition-all border-2 border-slate-100 uppercase tracking-widest shadow-sm"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#ea580c" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-slate-950 text-white px-8 py-7 md:py-0 rounded-2xl text-[13px] font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center space-x-3 shadow-xl shadow-slate-950/20 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Security Badges */}
              <div className="mt-6 flex items-center space-x-6 px-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SSL Encrypted</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Weekly Deployment</span>
              </div>
            </form>

            {/* SUCCESS STATE OVERLAY */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-50 rounded-2xl flex items-center px-8 z-20 border-2 border-orange-600/20"
                >
                  <CheckCircle2 className="text-orange-600 mr-4" size={24} />
                  <span className="text-sm font-black uppercase tracking-widest text-slate-900">
                    Transmission Confirmed.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;