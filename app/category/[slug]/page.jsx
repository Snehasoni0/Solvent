import { notFound } from 'next/navigation';
import { categoriesData } from '@/data/categories';
import CategoryHero from '@/components/categories/CategoryHero';
import CategorySpecs from '@/components/categories/CategorySpecs';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default async function Page({ params }) {
  const { slug } = await params;
  const data = categoriesData[slug];

  if (!data) return notFound();

  // Find the next category in the list to create a "Next Page" link
  const allKeys = Object.keys(categoriesData);
  const currentIndex = allKeys.indexOf(slug);
  const nextSlug = allKeys[(currentIndex + 1) % allKeys.length];
  const nextCategory = categoriesData[nextSlug];

  return (
    <main className="bg-white">
      {/* 1. Using your existing Hero component */}
      <CategoryHero 
        title={data.title}
        tagline={data.tagline}
        description={data.description}
        image={data.heroImage} 
      />

      {/* 2. Using your existing Specs component */}
      <div className="bg-slate-50/50">
        <CategorySpecs 
          specs={data.specs} 
          title={data.title}
        />
      </div>

      {/* 3. New Interactive "Next Category" Section */}
      <section className="py-8 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            href={`/category/${nextSlug}`}
            className="group flex flex-col md:flex-row items-center justify-between p-12 bg-slate-950 rounded-[2rem] overflow-hidden relative"
          >
            <div className="relative z-10">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                Explore Next Category
              </span>
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mt-2 group-hover:text-orange-500 transition-colors">
                {nextCategory.title}
              </h2>
            </div>
            
            <div className="relative z-10 mt-8 md:mt-0">
               <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
               </div>
            </div>

            {/* Background image for the "Next" card */}
            <img 
              src={nextCategory.heroImage} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}