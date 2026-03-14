"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BecomePartner = () => {
  return (
    <section className="bg-white py-12 px-6 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
            Collaboration
          </span>
          
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">
            Ready to integrate with <br /> 
            <span className="text-orange-600">our industrial network?</span>
          </h2>
          
          <p className="text-slate-500 max-w-xl mx-auto  mb-4 text-sm md:text-base font-medium leading-relaxed">
            We are constantly expanding our ecosystem with brands that prioritize chemical integrity and operational excellence. Connect with our procurement team to start the integration protocol.
          </p>

          <Link href="/contact">
            <button className="bg-slate-950 text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.2em] flex items-center mx-auto hover:bg-orange-600 transition-all group shadow-2xl cursor-pointer">
              Become a Partner
              <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartner;