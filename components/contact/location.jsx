"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="relative w-full bg-white flex flex-col pt-12">
      
      {/* CENTERED HEADING ABOVE MAP */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-px bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">location</span>
            <div className="w-8 h-px bg-orange-600" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Visit Our<span className="text-orange-600 italic"> Place!</span>
          </h2>
        </motion.div>
      </div>

      {/* FULL WIDTH INTERACTIVE MAP */}
      <div className="w-full h-[60vh] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 border-t border-slate-100">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4326558485663!2d72.95552347631168!3d26.247596087910113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e95ee9ad929%3A0x2224d001319da754!2sElectroGo%20mobility%20private%20limited!5e0!3m2!1sen!2sin!4v1710424278432!5m2!1sen!2sin"
          className="filter contrast-[1.1] brightness-[0.9]"
        ></iframe>
      </div>
      
    </section>
  );
};

export default MapSection;