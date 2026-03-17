"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const DarkFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* MAIN ROW: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12 text-left">
          
          {/* Col 1: Logo & Socials (Dark Mode) */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                {/* Use a light version of your logo if available */}
                <img src="/logo.svg" alt="logo" className="w-20 h-auto brightness-0 invert" />
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                High-performance lubricants and genuine parts for Rajasthan's industrial and automotive sectors.
              </p>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-slate-500 hover:text-orange-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-orange-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-orange-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-6">
              Company
              <div className='w-6 h-0.5 bg-orange-600 mt-1'></div>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faqs" className="text-slate-400 hover:text-white transition-colors">Faqs</Link></li>
              <li><Link href="/partners" className="text-slate-400 hover:text-white transition-colors">Our Partners</Link></li>
            </ul>
          </div>

          {/* Col 3: Browse */}
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-6">
              Browse
              <div className='w-6 h-0.5 bg-orange-600 mt-1'></div>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              <li><Link href="/category" className="text-slate-400 hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/brands" className="text-slate-400 hover:text-white transition-colors">Brands</Link></li>
              <li><Link href="/vehicle" className="text-slate-400 hover:text-white transition-colors">Vehicles</Link></li>
            </ul>
          </div>

          {/* Col 4: Policies */}
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-6">
              Policies
              <div className='w-6 h-0.5 bg-orange-600 mt-1'></div>
            </h4>
            <ul className="space-y-3 text-[13px] font-medium">
              <li><Link href="/policies/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policies/terms-of-services" className="text-slate-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/policies/shipping-returns" className="text-slate-400 hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="/policies/refund-policy" className="text-slate-400 hover:text-white transition-colors">Refunds</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Details (High Contrast) */}
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-6">
              Contact Us
              <div className='w-6 h-0.5 bg-orange-600 mt-1'></div>
            </h4>
            <div className="space-y-4">
              <a href="https://goo.gl/maps/example" target="_blank" className="grid grid-cols-[20px_1fr] gap-3 group">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 group-hover:-translate-y-1 transition-transform" />
                <span className="text-slate-400 text-[12px] leading-tight group-hover:text-white transition-colors">
                  Industrial Area, Phase II,<br />Jodhpur, RJ 342001
                </span>
              </a>

              <a href="tel:+919876543210" className="grid grid-cols-[20px_1fr] gap-3 group">
                <Phone className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-slate-400 text-[12px] font-bold group-hover:text-orange-500 transition-colors">
                  +91 98765 43210
                </span>
              </a>

              <a href="mailto:support@solvent.com" className="grid grid-cols-[20px_1fr] gap-3 group">
                <Mail className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                <span className="text-slate-400 text-[12px] font-bold group-hover:text-orange-500 transition-colors">
                  support@solvent.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-900 pt-8 mt-8 text-center">
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.25em] font-black">
            © {currentYear} Solvent. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default DarkFooter;