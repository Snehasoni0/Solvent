"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, ArrowUpRight, Zap, 
  MessageSquare, Globe, Instagram, 
  Facebook, Linkedin, Twitter 
} from 'lucide-react';

const ContactSection = () => {
  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center font-sans">
      
      {/* 1. HEADER AREA WITH BACKGROUND IMAGE */}
      <div className="w-full h-[45vh] md:h-[55vh] relative flex flex-col justify-center items-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center grayscale brightness-[0.2] scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#ea580c 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-orange-500 mb-4"
            >
                <Globe size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global Operations</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.8] text-center"
            >
                Contact <span className="text-orange-600 italic">Us.</span>
            </motion.h2>
        </div>
      </div>

      {/* 2. OVERLAPPING CONTENT CARD */}
      <div className="w-full max-w-7xl px-4 md:px-12 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* LEFT: FORM SIDE */}
          <div className="flex-1 p-8 md:p-14">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">Send us a message</h3>
              <p className="text-slate-400 text-sm font-medium">
                Have a technical question or need a bulk quote? Our engineers are ready to assist.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">First Name</label>
                  <input type="text" placeholder="Enter first name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 transition-colors" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Last Name</label>
                  <input type="text" placeholder="Enter last name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 transition-colors" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Contact Number</label>
                  <input type="tel" placeholder="+91 XXXX XXX XXX" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 transition-colors" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Message</label>
                <textarea rows={4} placeholder="How can we help you today?" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 transition-colors resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200"
              >
                Send a Message
              </motion.button>
            </form>
          </div>

          {/* RIGHT: DARK INFO PANEL */}
          <div className="lg:w-[400px] bg-slate-950 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-8">
                We are always <br /><span className="text-orange-500 italic">here to help.</span>
              </h4>

              <div className="space-y-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-4 group hover:bg-orange-600/10 hover:border-orange-600/50 transition-all">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500"><Phone size={20} /></div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">Hotline</p>
                    <p className="text-sm font-bold">+91 291 234 5678</p>
                  </div>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-4 group hover:bg-orange-600/10 hover:border-orange-600/50 transition-all">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500"><MessageSquare size={20} /></div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">WhatsApp</p>
                    <p className="text-sm font-bold">+91 98290 XXXXX</p>
                  </div>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-4 group hover:bg-orange-600/10 hover:border-orange-600/50 transition-all">
                  <div className="p-3 bg-white/10 rounded-xl text-orange-500"><Mail size={20} /></div>
                  <div>
                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">Email</p>
                    <p className="text-sm font-bold">support@solvent.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons - Circular and Centered */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
              <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Connect with us</p>
              <div className="flex items-center justify-center space-x-4">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: '#ea580c' }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors hover:border-orange-600"
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;