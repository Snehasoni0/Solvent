"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- UPDATED MOBILE LINK SUB-COMPONENT ---
const MobileNavLink = ({ link, createSlug, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = link.dropdown && link.dropdown.length > 0;

  const handleRowClick = (e) => {
    if (hasDropdown) {
      // Prevents the page from changing if we are just opening the menu
      e.preventDefault(); 
      setIsOpen(!isOpen);
    } else {
      closeMenu();
    }
  };

  return (
    <div className="border-b border-slate-100 pb-4">
      {/* Clicking this entire div now toggles the menu. 
         We use 'cursor-pointer' to show it's interactive.
      */}
      <div 
        onClick={handleRowClick}
        className="flex items-center justify-between cursor-pointer py-2"
      >
        <span
          className={`text-lg font-black uppercase tracking-widest transition-colors ${
            isOpen ? 'text-orange-600' : 'text-slate-800'
          }`}
        >
          {link.name}
        </span>

        {hasDropdown && (
          <div
            className={`p-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <ChevronDown size={20} className={isOpen ? 'text-orange-600' : 'text-slate-400'} />
          </div>
        )}
      </div>

      <AnimatePresence>
        {hasDropdown && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid grid-cols-2 gap-3 pl-2 border-l-2 border-orange-100">
              {link.dropdown.slice(0, 6).map((item) => {
                const mapping = { brand: 'brands', vehicle: 'vehicle', category: 'category' };
                const routePrefix = mapping[link.name.toLowerCase()] || 'category';

                return (
                  <Link
                    key={item}
                    href={`/${routePrefix}/${createSlug(item)}`}
                    className="text-[10px] font-bold text-slate-500 uppercase hover:text-orange-600 py-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents the parent row click from firing
                      closeMenu();
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {link.dropdown.length > 6 && (
              <Link
                href={link.href}
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
                className="inline-block mt-4 pl-2 text-[10px] font-black uppercase tracking-[0.15em] text-orange-600 border-l-2 border-orange-600"
              >
                See All {link.name} →
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Partners', href: '/partners' },
    {
      name: 'Category',
      href: '/category',
      dropdown: ['Engine Oil', 'Gear Oil', 'Grease', 'Coolant', 'Filters', 'Brakes', 'Batteries', 'Lights', 'Wipers']
    },
    {
      name: 'Brand',
      href: '/brands',
      dropdown: ['Castrol', 'Mobil', 'Shell', 'TotalEnergies', 'Valvoline', 'Gulf Oil', 'Motul', 'Liqui Moly']
    },
    {
      name: 'Vehicle',
      href: '/vehicle',
      dropdown: ['Car', 'Two Wheeler', 'Truck', 'Tractor', 'Excavator', 'SUV', 'Van']
    },
    { name: 'Faqs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md font-sans bg-white">
      {/* 1. MARQUEE ROW */}
      <div className="bg-orange-600 overflow-hidden py-2 border-b border-orange-700 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white">
            <span className="mx-10">Free delivery on orders over $500</span>
            <span className="mx-10">•</span>
            <span className="mx-10">Authorized Distributor of Genuine Lubricants</span>
            <span className="mx-10">•</span>
            <span className="mx-10">Bulk Discounts Available for Workshops</span>
            <span className="mx-10">•</span>
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white">
            <span className="mx-10">Free delivery on orders over $500</span>
            <span className="mx-10">•</span>
            <span className="mx-10">Authorized Distributor of Genuine Lubricants</span>
            <span className="mx-10">•</span>
            <span className="mx-10">Bulk Discounts Available for Workshops</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV ROW */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <img src="/logo.svg" alt="logo" className="w-20" />
            </Link>
          </div>

          {/* Desktop Menu */}
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
                    <div className="bg-white border border-slate-200 rounded shadow-2xl p-2">
                      {link.dropdown.slice(0, 6).map((item) => {
                        const mapping = { brand: 'brands', vehicle: 'vehicle', category: 'category' };
                        const routePrefix = mapping[link.name.toLowerCase()] || 'category';
                        return (
                          <Link
                            key={item}
                            href={`/${routePrefix}/${createSlug(item)}`}
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-orange-600 hover:text-white rounded transition-colors"
                          >
                            {item}
                          </Link>
                        );
                      })}
                      {link.dropdown.length > 6 && (
                        <Link
                          href={link.href}
                          className="block px-4 py-3 mt-1 border-t border-slate-300 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 hover:bg-slate-50 text-center"
                        >
                          See All {link.name}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-700">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white min-h-screen lg:hidden border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.name}
                  link={link}
                  createSlug={createSlug}
                  closeMenu={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;