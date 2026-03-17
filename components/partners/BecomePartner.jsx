"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, User, Building2, Mail, Globe, Sparkles } from 'lucide-react';

const BecomePartner = () => {
  return (
    <section className="bg-[#FCFCFC] py-10 px-6 relative overflow-hidden" id='partner-form'>
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: CONTENT (Col 5) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-orange-600" />
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">
                  Partnership Hub
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none italic">
                Ready to <span className="text-orange-600">Integrate?</span>
              </h2>
              
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                We are constantly expanding our ecosystem with brands that prioritize chemical integrity and operational excellence. 
              </p>

              <div className="pt-6 space-y-4">
                {[
                  { icon: <Sparkles size={16} />, text: "Priority Procurement Protocol" },
                  { icon: <Globe size={16} />, text: "Global Distribution Network" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-900 font-bold text-xs uppercase tracking-widest">
                    <span className="text-orange-600">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE MODERN FORM (Col 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-1 md:p-2 rounded shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            <div className="bg-white border border-slate-50 rounded p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="relative border-b border-slate-100 focus-within:border-orange-600 transition-colors py-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">Full Identity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Alex Carter"
                      className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-200"
                    />
                    <User className="absolute right-0 bottom-3 text-slate-200" size={16} />
                  </div>

                  {/* Company */}
                  <div className="relative border-b border-slate-100 focus-within:border-orange-600 transition-colors py-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">Enterprise</label>
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-200"
                    />
                    <Building2 className="absolute right-0 bottom-3 text-slate-200" size={16} />
                  </div>
                </div>

                {/* Email */}
                <div className="relative border-b border-slate-100 focus-within:border-orange-600 transition-colors py-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">Corporate Email</label>
                  <input 
                    type="email" 
                    placeholder="contact@enterprise.com"
                    className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-200"
                  />
                  <Mail className="absolute right-0 bottom-3 text-slate-200" size={16} />
                </div>

                {/* Message */}
                <div className="relative border-b border-slate-100 focus-within:border-orange-600 transition-colors py-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">Proposed Collaboration Brief</label>
                  <textarea 
                    rows="2"
                    placeholder="How can we grow together?"
                    className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-200 resize-none pt-2"
                  />
                </div>

                {/* Modern CTA */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-950 group relative overflow-hidden rounded-2xl py-6 flex items-center justify-center gap-4 transition-all duration-500 cursor-pointer  "
                >
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-white font-black text-xs uppercase tracking-[0.3em]">
                    Submit Protocol
                  </span>
                  <Send className="relative z-10 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BecomePartner;