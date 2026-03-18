"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDown, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const BrandDetailPage = () => {
  const { slug } = useParams(); // Captures 'castrol', 'mobil', etc.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        setLoading(true);
        // FUTURE BACKEND: const res = await fetch(`/api/products?brand=${slug}`);

        await new Promise(resolve => setTimeout(resolve, 1000));

        // Dummy data structured for a specific brand
        const dummyBrandProducts = [
          { id: 101, name: `${slug.toUpperCase()} Ultra High-Perf`, type: "Engine Oil", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 102, name: `${slug.toUpperCase()} Synthetic Pro`, type: "Gear Oil", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 103, name: `${slug.toUpperCase()} Industrial XL`, type: "Grease", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 104, name: `${slug.toUpperCase()} Marine Grade`, type: "Specialty", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 105, name: `${slug.toUpperCase()} Eco Flow`, type: "Hydraulic", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 106, name: `${slug.toUpperCase()} Turbo Clean`, type: "Engine Oil", img: "https://images.unsplash.com/photo-1746014995174-4cad395e151f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpcXVpJTIwbW9seXxlbnwwfHwwfHx8MA%3D%3D" },
        ];
        setProducts(dummyBrandProducts);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBrandProducts();
  }, [slug]);

  const filtered = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
      {/* 1. BRAND HERO SECTION */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-slate-950 overflow-hidden">

        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.webp?a=1&b=1&s=612x612&w=0&k=20&c=z24VD2oL01Z9N0d7GKoOrZ0B8RKq4CLTDXPNf8RCCNs="
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Background"
          />
          {/* VIGNETTE GRADIENT: Ensures text is readable and image fades into the black bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
        </div>

        <Link href="/brands" className="absolute top-10 left-4 md:left-10  flex items-center gap-2 text-slate-500 hover:text-orange-600 active:text-orange-600 transition-colors z-20">
          <ArrowLeft size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Brands</span>
        </Link>

        {/* CONTENT LAYER */}
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 text-[10px] font-black uppercase tracking-[0.6em] mb-4 block"
          >
            Authorized Partner
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter"
          >
            {slug?.replace('-', ' ')}
          </motion.h1>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 text-slate-600 cursor-pointer flex justify-center hover:text-orange-600"
          >
            <ChevronDown size={30} strokeWidth={1} />
          </motion.div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER BAR */}
      <section ref={scrollRef} className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter">
              Product <span className="text-orange-600">Inventory</span>
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing all items from {slug}</p>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={16} />
            <input
              type="text"
              placeholder="SEARCH BRAND CATALOG..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-slate-200 py-3.5 pl-11 pr-4 rounded-xl text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600/50 transition-all"
            />
          </div>
        </div>
      </section>

      {/* 3. MINIMAL PRODUCT GRID (6 COLS) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 animate-pulse">
                <div className="aspect-[4/5] bg-slate-100 rounded-2xl" />
                <div className="h-4 bg-slate-100 rounded w-3/4" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
            ))
          ) : (
            filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                /* UPDATED: Added h-full and flex-col for equal row heights */
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-orange-600/20 transition-all duration-500 mb-4 shrink-0">
                  <img
                    src={product.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-all" />
                </div>

                {/* UPDATED: flex-1 ensures this area fills the space, pushing the button down */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-[10px] md:text-[11px] font-black text-slate-950 uppercase italic tracking-widest leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 h-4">
                    {product.name}
                  </h3>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1 mb-4">
                    {product.type}
                  </p>

                  {/* NEW: WhatsApp Redirection Button */}
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(`Hi, I'm interested in the ${product.name} (${product.type}). Could you provide more details?`);
                      window.open(`https://wa.me/919166744297?text=${message}`, '_blank');
                    }}
                    className="mt-auto w-full py-2.5 bg-slate-950 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 cursor-pointer"
                  >
                  Inquiry Now
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default BrandDetailPage;