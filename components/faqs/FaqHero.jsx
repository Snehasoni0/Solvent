import React from 'react'

const FaqHero = () => {
  return (
    <section className='w-full bg-white py-8 px-4'>
      <div className="max-w-[1200px] mx-auto">

        {/* TOP SECTION: HEADING & STAGGERED IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover" alt="Industrial" />
            </div>
            {/* Overlapping Small Image */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover" alt="Detail" />
            </div>
          </div>

          <div>
            <div className='h-0.5 w-25 bg-orange-600'></div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-tight uppercase tracking-tighter">
              Frequently <br /> <span className="text-orange-600 italic">Asked Questions</span>
            </h2>
            <p className="text-slate-500 mt-6 text-sm leading-relaxed">
              Explore our comprehensive index of industrial protocols and service standards. We provide the chemical backbone for Rajasthan's heavy machinery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqHero
