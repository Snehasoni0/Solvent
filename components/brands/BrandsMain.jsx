"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

const BrandsMain = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. SIMULATE API FETCH (READY FOR BACKEND)
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        // const response = await fetch('/api/brands');
        // const data = await response.json();
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Dynamic import of mock data
        const { brandsData } = await import('@/data/brands');
        setBrands(brandsData);
      } catch (error) {
        console.error("Error loading brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const filteredBrands = brands.filter(item =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToContent = () => {
    document.getElementById('brands-directory')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen selection:bg-orange-100">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Corporate Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[100px] font-black text-white uppercase italic tracking-tighter leading-none"
          >
            Global <span className="text-orange-600">Brands</span>
          </motion.h1>
          <p className="mt-4 text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.5em]">
            Authorized Industrial Distribution Network
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

      {/* 2. HEADING & SEARCH SECTION */}
      <section id="brands-directory" className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Strategic Alliances</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter">
                Brand <span className="text-orange-600">Directory</span>
              </h2>
            </div>

            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
              <input
                type="text"
                placeholder="SEARCH BRANDS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-slate-200 py-4 pl-12 pr-4 rounded-xl text-[11px] font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600/50 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* 3. GRID - 6 Cards Per Row (Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {loading ? (
              // SKELETON LOADERS
              [...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-white rounded-3xl border border-slate-100 animate-pulse flex flex-col items-center p-8">
                   <div className="w-20 h-10 bg-slate-100 rounded mb-4" />
                   <div className="w-16 h-3 bg-slate-100 rounded mb-auto" />
                   <div className="w-full h-8 bg-slate-50 rounded-full" />
                </div>
              ))
            ) : (
              filteredBrands.map((brand, index) => (
                <Link
                  key={brand.id || brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="h-full cursor-default"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col items-center p-6 md:p-8 bg-white rounded-3xl border border-slate-100 hover:border-orange-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/5 h-full"
                  >
                    {/* BRAND LOGO - Original Color */}
                    <div className="h-16 w-full mb-5 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-h-full max-w-full object-contain" // grayscale removed here
                      />
                    </div>

                    <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest text-center leading-tight mb-6 flex-grow">
                      {brand.name}
                    </h3>

                    {/* EXPLORE BUTTON - Pointer only here */}
                    <div className="mt-auto w-full cursor-pointer">
                      <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-slate-50 text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 active:bg-orange-600 active:text-white">
                        <span className="text-[9px] font-black uppercase tracking-widest">Explore</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>

          {!loading && filteredBrands.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest">No matching brands found</p>
            </div>
          )}
        </div>
      </section>

      <div className="h-32 bg-slate-50" />
    </div>
  );
};

export default BrandsMain;