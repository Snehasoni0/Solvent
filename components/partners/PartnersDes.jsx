"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';

const PartnerDescription = () => {
  return (
    <section className="py-12 bg-white overflow-hidden relative">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-slate-50 select-none pointer-events-none italic leading-none translate-x-1/4">
        NETWORK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* IMAGE BLOCK: THE "INDUSTRIAL FRAME" */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* The Main Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="Partner Collaboration" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Floating Orange Accent Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-orange-600 p-8 rounded-3xl shadow-xl max-w-[240px]"
            >
              <Zap className="text-white mb-4" size={32} />
              <p className="text-white font-black text-sm uppercase tracking-widest leading-tight">
                Accelerating <br /> Industrial <br /> Efficiency.
              </p>
            </motion.div>

            {/* Decorative Blueprint Lines */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-orange-600 opacity-30 hidden md:block" />
          </motion.div>

          {/* TEXT BLOCK: THE "PROTOCOL" */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
                Partnership Ecosystem
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 uppercase italic tracking-tighter leading-none mb-8">
                The Core <br /> <span className="text-orange-600">Protocol.</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-slate-100 pl-8">
                  We don’t just supply products; we build infrastructure. Our partnership program is designed for distributors who demand precision, speed, and absolute reliability in the energy sector.
                </p>

                {/* Feature Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl text-orange-600">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1 text-orange-600">Market Lead</h4>
                      <p className="text-[11px] text-slate-400 font-bold uppercase leading-tight">Exclusive regional distribution rights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl text-orange-600">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1 text-orange-600">Global Cert</h4>
                      <p className="text-[11px] text-slate-400 font-bold uppercase leading-tight">Full compliance with ISO standards.</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerDescription;