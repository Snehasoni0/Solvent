"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

const CategoryMain = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API endpoint:
        // const response = await fetch('https://api.yourdomain.com/v1/categories');
        // const data = await response.json();

        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Using your current data structure as a mock response
        const mockData = [
          { id: '1', name: 'Engine Oil', icon: 'water-outline' },
          { id: '2', name: 'Gear Oil', icon: 'settings-outline' },
          { id: '3', name: 'Grease', icon: 'build-outline' },
          { id: '4', name: 'Coolant', icon: 'snow-outline' },
          { id: '5', name: 'Filters', icon: 'funnel-outline' },
          { id: '6', name: 'Brakes', icon: 'disc-outline' },
          { id: '7', name: 'Batteries', icon: 'battery-charging-outline' },
          { id: '8', name: 'Lights', icon: 'bulb-outline' },
          { id: '9', name: 'Wipers', icon: 'rainy-outline' },
        ];

        setCategories(mockData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(item =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToContent = () => {
    const element = document.getElementById('category-directory');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen selection:bg-orange-100">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Industrial Logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[100px] font-black text-white uppercase italic tracking-tighter leading-none"
          >
            Product <span className="text-orange-600">Hub</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em]">
            Precision Lubrication & Hardware Directory
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToContent}
            className="mt-12 flex justify-center text-slate-500 cursor-pointer hover:text-orange-600 transition-colors"
          >
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section id="category-directory" className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Inventory System</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter">
                Industrial <span className="text-orange-600">Categories</span>
              </h2>
            </div>

            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
              <input
                type="text"
                placeholder="SEARCH CATEGORY..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-slate-200 py-4 pl-12 pr-4 rounded-xl text-[11px] font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600/50 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* GRID: Handles Loading State + Filtered Results */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {loading ? (
              // SKELETON LOADERS
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 h-64 border border-slate-100 animate-pulse flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-full mb-4" />
                  <div className="w-20 h-3 bg-slate-100 rounded mb-auto" />
                  <div className="w-full h-8 bg-slate-50 rounded-full" />
                </div>
              ))
            ) : (
              // ACTUAL DATA
              filteredCategories.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="h-full cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col items-center p-6 md:p-8 bg-white rounded-3xl border border-slate-100 hover:border-orange-600/20 transition-all duration-300 hover:shadow-xl h-full"
                  >
                    <div className="text-3xl md:text-4xl text-orange-600 mb-5 transition-transform duration-500 group-hover:scale-110">
                      <ion-icon name={item.icon} suppressHydrationWarning></ion-icon>
                    </div>

                    <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest text-center leading-tight mb-6">
                      {item.name}
                    </h3>

                    <div className="mt-auto w-full cursor-pointer">
                      <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 active:bg-orange-600 active:text-white">
                        <span className="text-[9px] font-black uppercase tracking-widest ">Explore</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>

          {!loading && filteredCategories.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No matching categories found</p>
            </div>
          )}
        </div>
      </section>

      <div className="h-32 bg-slate-50" />
    </div>
  );
};

export default CategoryMain;