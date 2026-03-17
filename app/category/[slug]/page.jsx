"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

const CategoryDetailPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Create the reference point
  const directoryRef = useRef(null);

  // 3. The Scroll Function
  const scrollToDirectory = () => {
    directoryRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };


  // 1. DYNAMIC API INTEGRATION (READY FOR BACKEND)
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        // const response = await fetch(`/api/products?category=${slug}`);
        // const data = await response.json();

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated Latency

        const dummyProducts = [
          { id: 1, name: "Castrol EDGE 5W-40", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 2, name: "Mobil 1 Triple Action", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 3, name: "Shell Helix Ultra", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 4, name: "Total Quartz 9000", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 5, name: "Valvoline SynPower", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 6, name: "Motul 300V Competition", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 7, name: "Gulf Formula G", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 8, name: "Liqui Moly Molygen", img: "https://images.unsplash.com/photo-1746014995879-4176a09069e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHVicmljYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
        ];
        setProducts(dummyProducts);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchRelatedProducts();
  }, [slug]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen selection:bg-orange-100 font-sans">

      {/* 1. MINIMAL HERO SECTION */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* BACK BUTTON */}
        <Link
          href="/category" 
          className="absolute top-8 left-6 md:top-10 md:left-10 z-20 flex items-center gap-2 text-slate-500 hover:text-orange-600 active:text-orange-600 transition-all group"
        >
          <div className="p-2 rounded-full border border-slate-800 group-hover:border-orange-600/50 group-hover:bg-orange-600/5 transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">
            Back to Directory
          </span>
        </Link>

        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Technical Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90" />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-[80px] font-black text-white uppercase italic tracking-tighter leading-none"
          >
            {slug?.replace('-', ' ')} <span className="text-orange-600">Series</span>
          </motion.h1>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToDirectory}
            className="mt-8 flex justify-center text-slate-500 cursor-pointer hover:text-orange-600 transition-colors"
          >
            <ChevronDown size={28} strokeWidth={1} />
          </motion.div>
        </div>
      </section>

      {/* 2. HEADING & SEARCH SECTION */}
      <section ref={directoryRef} className="py-10 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Inventory Catalog</span>
              <h2 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter">
                Available <span className="text-orange-600">Variants</span>
              </h2>
            </div>

            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={16} />
              <input
                type="text"
                placeholder="SEARCH INVENTORY..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-slate-200 py-3.5 pl-11 pr-4 rounded-xl text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600/50 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {loading ? (
              // SKELETON STATE
              [...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="aspect-[4/5] bg-slate-100 rounded-2xl animate-pulse" />
                  <div className="h-3 w-2/3 bg-slate-100 rounded animate-pulse" />
                </div>
              ))
            ) : (
              filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col gap-4"
                >
                  {/* PRODUCT IMAGE CONTAINER */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-orange-600/20 transition-all duration-500">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors" />
                  </div>

                  {/* PRODUCT TITLE */}
                  <div className="px-1">
                    <h3 className="text-[10px] md:text-[11px] font-black text-slate-950 uppercase italic tracking-widest leading-tight group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                      Industrial Grade
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* NO RESULTS STATE */}
          {!loading && filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">No matching products found</p>
            </div>
          )}
        </div>
      </section>

      <div className="h-20 bg-white" />
    </div>
  );
};

export default CategoryDetailPage;