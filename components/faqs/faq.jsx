"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Added Link from Next.js
import Link from 'next/link'; 
import { Lightbulb, CreditCard, ShieldCheck, Rocket, ChevronDown, ArrowRight } from 'lucide-react';

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'General', label: 'General', icon: Lightbulb },
    { id: 'Payment', label: 'Payment', icon: CreditCard },
    { id: 'Safety', label: 'Safety', icon: ShieldCheck },
    { id: 'Account', label: 'Account', icon: Rocket },
  ];

  const faqData = {
    General: [
      { q: "What industries does Solvent typically serve?", a: "We primarily serve the heavy manufacturing, mineral extraction, and construction industries across Rajasthan, providing high-performance industrial lubricants." },
      { q: "How can I request a technical data sheet (TDS)?", a: "TDS documents can be requested through our digital portal or by contacting your regional distribution manager in Jodhpur or Jaipur." },
      { q: "Where are your primary distribution hubs?", a: "Our central operations hub is located in Jodhpur, with strategic distribution units in Jaipur and Udaipur to ensure rapid delivery." }
    ],
    Payment: [
      { q: "What are your standard industrial credit terms?", a: "We offer flexible credit cycles for verified corporate partners, typically ranging from 15 to 45 days based on procurement volume." },
      { q: "Do you offer bulk purchase discounts?", a: "Yes, our tier-based pricing model provides significant cost-efficiency for high-volume industrial lubricant orders." },
      { q: "What payment methods are accepted for fleet services?", a: "We accept all major corporate credit cards, wire transfers (NEFT/RTGS), and integrated digital payment protocols." }
    ],
    Safety: [
      { q: "How do you ensure product authenticity?", a: "Every batch undergoes rigorous refinery-direct verification and carries a unique traceability code to guarantee 100% genuine formulation." },
      { q: "Are Solvent products compliant with environmental standards?", a: "Our lubricants are engineered to meet global ASTM and ISO environmental safety protocols, reducing friction and minimizing carbon footprints." },
      { q: "What safety protocols are followed during delivery?", a: "Our logistics team adheres to strict hazmat handling and spill-prevention protocols during the transit and unloading of all chemical assets." }
    ],
    Account: [
      { q: "How do I update my fleet procurement details?", a: "You can update your procurement preferences and delivery schedules through the 'Client Portal' or by reaching out to your account executive." },
      { q: "Can I track my industrial orders in real-time?", a: "Yes, our integrated logistics platform provides live tracking status for all bulk deliveries across the Rajasthan corridor." },
      { q: "How do I register my company for the EV ecosystem?", a: "Corporates interested in our EV charging network can register via the 'Partners' section on the Electrogo Mobility digital hub." }
    ]
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-24">
      {/* CATEGORY TABS */}
      <div className="flex flex-row w-full gap-2 md:gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
            className={`flex flex-1 flex-col items-center justify-center transition-all duration-300 rounded-2xl md:rounded-[2rem] border-2 p-4 md:p-8 cursor-pointer
              ${activeTab === cat.id ? 'bg-orange-600 border-orange-600 text-white shadow-lg' : 'bg-slate-50 border-transparent text-slate-400 hover:bg-slate-100'}`}
          >
            <cat.icon className="w-5 h-5 md:w-8 md:h-8 mb-0 md:mb-4" />
            <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-center">
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* FAQ CONTENT */}
      <div className="max-w-3xl mx-auto space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {faqData[activeTab]?.map((item, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center bg-white text-left cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm md:text-base">{item.q}</span>
                  <div className={`p-2 rounded-full transition-transform ${openIndex === idx ? 'bg-orange-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-slate-50 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA SECTION - Updated with Link */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">
          Still have queries? <span className="text-orange-600">Connect with us.</span>
        </h3>
        
        {/* Using Link component for internal navigation */}
        <Link href="/contact">
          <button className="bg-slate-950 text-white px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] flex items-center mx-auto hover:bg-orange-600 transition-all group shadow-xl cursor-pointer">
            Contact Our Dedicated Team
            <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
        </Link>

      </div>
    </div>
  );
};

export default FaqTabs;