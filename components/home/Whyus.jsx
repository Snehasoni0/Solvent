"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ShieldAlert, ThermometerSun, Zap } from 'lucide-react';

const reasons = [
  {
    id: "01",
    title: "Molecular Stability",
    desc: "Our lubricants maintain structural integrity at 300°C+, preventing viscosity breakdown where others fail.",
    icon: <ThermometerSun className="w-8 h-8" />,
  },
  {
    id: "02",
    title: "Zero-Friction Tech",
    desc: "Advanced additive packages that create a microscopic protective shield between moving metal parts.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: "03",
    title: "Active Oxidation",
    desc: "Engineered to neutralize acids and prevent sludge buildup, extending your engine life by up to 40%.",
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    id: "04",
    title: "Extreme Durability",
    desc: "Tested in the harshest terrains to ensure peak performance in dust, heat, and heavy loads.",
    icon: <ShieldAlert className="w-8 h-8" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-50/50 -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT: Vertical Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block bg-orange-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-white"
              >
                The Solvent Edge
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Why <br />
                <span className="text-orange-600 italic">Solvent?</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                Engineered in Rajasthan for the world. We build solutions that 
                defy heat and friction.
              </p>
              
              {/* Technical Detail Line */}
              <div className="pt-8 hidden lg:block">
                <div className="h-px w-full bg-slate-200 relative">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-orange-600 rounded-full" />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">
                  Spec: ISO 9001:2015 Certified
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Blueprint Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-500 rounded-2xl"
              >
                {/* Number Watermark - Soft Slate in White Theme */}
                <span className="absolute top-6 right-8 text-7xl font-black text-slate-50 group-hover:text-orange-50 transition-colors duration-500">
                  {item.id}
                </span>

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-xl text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-full h-full bg-orange-600 translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;