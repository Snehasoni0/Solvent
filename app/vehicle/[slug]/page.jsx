"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const { slug } = useParams();
  const [brands, setBrands] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 800));

        const mockData = {
          car: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Honda', 'Kia', 'Skoda'],
          "two-wheeler": ['Hero', 'Honda', 'TVS', 'Bajaj', 'Royal Enfield', 'Yamaha', 'Suzuki', 'KTM'],
          truck: ['Tata', 'Ashok Leyland', 'Eicher', 'BharatBenz', 'Mahindra'],
          tractor: ['Mahindra', 'Swaraj', 'Sonalika', 'Escorts', 'John Deere', 'New Holland'],
          excavator: ['JCB', 'L&T', 'Hyundai', 'Tata Hitachi', 'Sany', 'Volvo'],
          suv: ['Mahindra', 'Tata', 'Toyota', 'Jeep', 'Land Rover', 'MG'],
          van: ['Maruti Omni', 'Tata Magic', 'Mahindra Supro', 'Force Traveler']
        };

        setBrands(mockData[slug] || []); 
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBrands();
  }, [slug]);

  const filtered = brands.filter(b =>
    b.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen selection:bg-orange-100">

      <section className="relative w-full h-[45vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486006396193-a7c006743f35?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Brand Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
        </div>

        <Link href="/vehicle" className="absolute top-10 left-10 flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors z-20">
          <ArrowLeft size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Directory</span>
        </Link>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck size={14} className="text-orange-600" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Precision Manufacturers</span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter"
          >
            {slug?.replace('-', ' ')} <span className="text-orange-600">Brands</span>
          </motion.h1>
          <p className="mt-4 text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
            Select a manufacturer to view authorized lubricant solutions
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-30 py-10 px-6 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter">
              Brand <span className="text-orange-600">Directory</span>
            </h2>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={16} />
            <input
              type="text"
              placeholder="SEARCH MANUFACTURER..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 py-3.5 pl-11 pr-4 rounded-2xl text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600/50 focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-slate-50 rounded-3xl animate-pulse" />
            ))
          ) : (
            filtered.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                // REMOVED cursor-pointer from here
                className="group bg-white border border-slate-100 p-8 rounded-[40px] flex flex-col items-center hover:shadow-2xl hover:shadow-orange-600/10 hover:border-orange-600/20 transition-all duration-500 h-full"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center font-black text-slate-200 text-[10px] group-hover:bg-orange-50 group-hover:text-orange-200 transition-colors uppercase">
                  Logo
                </div>

                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest text-center leading-tight mb-8 flex-grow">
                  {brand}
                </h3>
                <Link
                  href={`/vehicle/${slug}/view/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center gap-1 py-3 px-2 bg-slate-900 text-white rounded-xl group-hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-slate-900/10 group-hover:shadow-orange-600/20 active:bg-orange-600 active:text-white">
                    <span className="text-[9px] font-black uppercase tracking-widest">Explore</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default page;