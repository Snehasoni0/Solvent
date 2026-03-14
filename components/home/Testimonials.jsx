"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Fleet Manager, Jodhpur Logistics",
    content: "Switching to Solvent's heavy-duty gear oil reduced our maintenance downtime by 20%. The thermal stability in the Rajasthan heat is unmatched.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Owner, Precision Workshops",
    content: "The synthetic range is incredible. Our customers notice the smoother engine performance immediately. Being an authorized distributor has boosted our credibility.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Ananya Mehta",
    role: "Industrial Engineer",
    content: "Solvent isn't just a supplier; they are engineering partners. Their custom grease formulations solved a major friction issue in our textile plant.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=3"
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none flex justify-center items-center">
        <Quote size={600} className="text-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center  space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Real Performance Feedback
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Trusted by the <span className="text-orange-600">Professionals</span>
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Main Testimonial Card */}
          <div className="w-full max-w-4xl min-h-[350px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 md:p-16 relative overflow-hidden group"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-600" />
                
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                  {/* Image & Rating */}
                  <div className="shrink-0 space-y-4">
                    <div className="relative">
                       <div className="absolute inset-0 bg-orange-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                       <img 
                        src={reviews[index].image} 
                        alt={reviews[index].name} 
                        className="w-24 h-24 rounded-2xl object-cover relative z-10 border-2 border-white"
                       />
                    </div>
                    <div className="flex justify-center md:justify-start space-x-1">
                      {[...Array(reviews[index].rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <Quote className="text-slate-100 absolute -top-4 right-8 w-24 h-24 -z-0" />
                    <p className="text-xl md:text-2xl text-slate-700 font-medium italic leading-relaxed relative z-10">
                      "{reviews[index].content}"
                    </p>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                        {reviews[index].name}
                      </h4>
                      <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                        {reviews[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full border border-slate-200 text-slate-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-orange-600' : 'w-2 bg-slate-200'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextStep}
              className="p-4 rounded-full border border-slate-200 text-slate-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;