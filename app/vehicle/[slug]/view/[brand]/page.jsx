"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Loader2, Search } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const { slug, brand } = useParams();
  const brandName = brand;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise(r => setTimeout(r, 800));
      setProducts([
        { id: 1, title: `${brandName} Engine Oil`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" },
        { id: 2, title: `${brandName} Gear Fluid`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" },
        { id: 3, title: `${brandName} Hydraulic Oil`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" },
        { id: 4, title: `${brandName} Coolant`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" },
        { id: 5, title: `${brandName} Grease`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" },
        { id: 6, title: `${brandName} Brake Fluid`, img: "https://images.unsplash.com/photo-1746014995485-e8a698f39804?w=500" }
      ]);
      setLoading(false);
    };

    if (brandName) loadData();
  }, [brandName]);

  // Filter products based on search input
  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 py-24 px-6 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600"
          alt="Solvent texture"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />

        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-amber-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10">
          <Link
            href={`/vehicle/${slug}`}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 active:text-orange-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Selection</span>
          </Link>

          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
            {brandName?.replace(/-/g, ' ')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mt-2 not-italic font-medium text-2xl tracking-[0.5em]">
              Solutions
            </span>
          </h1>
        </div>
      </section>

      {/* 2. SEARCH & HEADING BAR */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto py-8 px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">
              Product <span className="text-orange-600">Catalogue</span>
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Browse the complete {brandName?.replace(/-/g, ' ')} inventory
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="SEARCH BY PRODUCT NAME..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-slate-200 py-3 pl-12 pr-4 rounded-2xl text-[10px] font-bold tracking-widest uppercase focus:border-orange-600 focus:outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID SECTION */}
      <section className="max-w-[1600px] mx-auto py-8 px-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-orange-600" size={32} />
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                {filteredProducts.map(p => (
                  <div key={p.id} className="border border-slate-100 rounded-xl overflow-hidden group bg-white hover:shadow-xl transition-all duration-300">
                    <div className="h-40 overflow-hidden">
                       <img src={p.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={p.title} />
                    </div>
                    <div className='p-2 text-center'>
                      <h3 className="font-black uppercase text-[10px] tracking-widest pt-2 mb-3 line-clamp-2 text-slate-900 leading-tight">
                        {p.title}
                      </h3>
                      <button
                        onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=Inquiry: ${p.title}`)}
                        className="w-full py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase hover:bg-orange-600 transition-colors cursor-pointer active:bg-orange-600 active:text-white"
                      >
                        Contact to Buy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-400 font-black uppercase tracking-widest">No products found for "{searchQuery}"</p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Page;