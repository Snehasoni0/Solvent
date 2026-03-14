"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Partners', href: '/partners' },
    { 
      name: 'Category', 
      href: '#', 
      dropdown: ['Engine Oil', 'Gear Oil', 'Grease', 'Coolant', 'Filters', 'Brakes', 'Batteries', 'Lights', 'Wipers'] 
    },
    { 
      name: 'Brand', 
      href: '#', 
      dropdown: ['Castrol', 'Mobil', 'Shell', 'TotalEnergies', 'Valvoline', 'Gulf Oil', 'Motul', 'Liqui Moly'] 
    },
    { 
      name: 'Vehicle', 
      href: '#', 
      dropdown: ['Car', 'Two Wheeler', 'Truck', 'Tractor', 'Excavator', 'SUV', 'Van'] 
    },
    { name: 'Contact', href: '/contact' },
    { name: 'Faqs', href: '/faqs' },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md font-sans">
      
      {/* FIRST ROW: Orange Marquee */}
      <div className="bg-orange-600 overflow-hidden py-1.5 border-b border-orange-700">
        <div className="flex whitespace-nowrap animate-marquee items-center text-xs font-bold uppercase tracking-[0.2em] text-white">
          <span className="mx-8">Free delivery on orders over $500</span>
          <span className="mx-8">New Synthetic Oil Arrivals - Shop Now</span>
          <span className="mx-8">Bulk Discounts Available for Workshops</span>
          <span className="mx-8">Authorized Distributor of Genuine Lubricants</span>
          <span className="mx-8">Free delivery on orders over $500</span>
          <span className="mx-8">New Synthetic Oil Arrivals - Shop Now</span>
          <span className="mx-8">Bulk Discounts Available for Workshops</span>
        </div>
      </div>

      {/* SECOND ROW: Logo & Items */}
      <div className="bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <img src="/logo.svg" alt="logo" className='w-20'/>
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group py-2">
                  <Link 
                    href={link.href} 
                    className="flex items-center text-[13px] font-extrabold uppercase tracking-widest text-slate-700 group-hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white border border-slate-200 rounded shadow-2xl p-2 grid grid-cols-1">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item} 
                            href={`/${link.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-orange-600 hover:text-white rounded transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* MOBILE TOGGLE BUTTON - Added this section */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-orange-600 transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[112px] bg-white z-40 lg:hidden border-t border-slate-100"
          >
            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-112px)]">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 pb-4">
                  <Link 
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-widest text-orange-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 grid grid-cols-2 gap-y-3 gap-x-4 pl-2">
                      {link.dropdown.map(item => (
                        <Link 
                          key={item}
                          href={`/${link.name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-[11px] font-semibold text-slate-500 uppercase hover:text-orange-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;