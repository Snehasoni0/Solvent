"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* FIRST ROW: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Logo & Text */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo.svg" alt="logo" className="w-24 h-auto" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium automotive lubricants and genuine spare parts. 
              Providing high-performance solutions for every vehicle type, 
              from passenger cars to heavy-duty industrial machinery.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-xs  flex flex-col justify-center items-center">Quick Links
              <div className='w-10 h-0.5 bg-orange-600 mt-1 mb-6'></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-500 hover:text-orange-600 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-slate-500 hover:text-orange-600 transition-colors">Our Products</Link></li>
              <li><Link href="/vehicle" className="text-slate-500 hover:text-orange-600 transition-colors">Vehicle Search</Link></li>
              <li><Link href="/brand" className="text-slate-500 hover:text-orange-600 transition-colors">Shop by Brand</Link></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-xs flex flex-col justify-center items-center">Policies
              <div className='w-10 h-0.5 bg-orange-600 mt-1 mb-6'></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-slate-500 hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-orange-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-slate-500 hover:text-orange-600 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-slate-500 hover:text-orange-600 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-xs flex flex-col justify-center items-center">Contact Us
              <div className='w-10 h-0.5 bg-orange-600 mt-1 mb-6'></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col justify-center items-center gap-2 group">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="text-slate-500">123 Industrial Area, Phase II,<br />Jodhpur, Rajasthan 342001</span>
              </li>
              <li className="flex flex-col justify-center items-center gap-2 group">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="text-slate-500">+91 98765 43210</span>
              </li>
              <li className="flex flex-col justify-center items-center gap-2 group">
                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="text-slate-500">support@solvent.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECOND ROW: Social Icons & Copyright */}
        <div className="border-t border-slate-100 pt-8 mt-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.2em] font-medium">
            © {currentYear} Solvent. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;