"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Factory } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 text-[200px] font-black text-slate-50 select-none leading-none -translate-y-1/4 translate-x-1/4 uppercase">
        Engine
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Visual Composition - Ensure this has a z-index set */}
          <div className="lg:col-span-5 relative z-10">
            {/* Image Container - This must also have positioning (relative) and a lower z-index */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering Excellence"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Overlapping Floating Box - Give this the HIGHEST z-index here */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} // Added subtle delay for better effect
              className="absolute -bottom-10 -right-6 lg:-right-12 bg-orange-600 p-8 text-white max-w-[280px] shadow-xl z-20 rounded-xl"
            >
              <h3 className="text-3xl font-black mb-2 italic tracking-tighter">25+ YEARS</h3>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80 leading-relaxed">
                Of relentless innovation in lubricant technology.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="h-px w-8 bg-orange-600"></span>
                <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs">
                  Redefining Friction
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
                Beyond Lubrication: <br />
                <span className="text-slate-400">Total System Protection.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At Solvent, we don't just sell oil. We engineer liquid components that optimize mechanical DNA.
                Our formulas are tested in extreme conditions—from high-velocity passenger engines to
                heavy-duty industrial turbines—ensuring zero downtime and maximum output.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
              <div className="space-y-3 flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-orange-600" />
                <h4 className="font-bold uppercase text-[11px] tracking-widest text-slate-900">Anti-Wear Tech</h4>
                <p className="text-slate-500 text-xs">Advanced molecular bonding to prevent metal-on-metal wear.</p>
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <Zap className="w-8 h-8 text-orange-600" />
                <h4 className="font-bold uppercase text-[11px] tracking-widest text-slate-900">Thermal Control</h4>
                <p className="text-slate-500 text-xs">Optimized viscosity stability under extreme heat cycles.</p>
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <Factory className="w-8 h-8 text-orange-600" />
                <h4 className="font-bold uppercase text-[11px] tracking-widest text-slate-900">OEM Approved</h4>
                <p className="text-slate-500 text-xs">Formulated to meet and exceed global manufacturer standards.</p>
              </div>
            </div>

            <div className="pt-6 flex justify-center md:justify-start">
              <button className="px-10 py-4 bg-slate-950 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all duration-300 active:scale-95 shadow-lg rounded cursor-pointer">
                Our Engineering Story
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;