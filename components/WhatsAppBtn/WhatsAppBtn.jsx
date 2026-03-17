"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBtn = () => {
  const phoneNumber = "91XXXXXXXXXX"; // Your number with country code
  const message = "Hi! I'd like to inquire about your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center group">
      
      {/* HOVER TOOLTIP */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mr-3 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-800"
      >
        Chat with us
      </motion.div>

      {/* THE BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-shadow duration-300 overflow-hidden"
      >
        {/* OFFICIAL WHATSAPP SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M12.03 2C6.51 2 2.03 6.48 2.03 12c0 2.13.67 4.11 1.81 5.73L2.03 22l4.43-1.41c1.51.93 3.28 1.41 5.17 1.41 5.52 0 10-4.48 10-10S17.55 2 12.03 2zm5.75 13.9c-.23.65-1.15 1.19-1.6 1.25-.41.05-.83.07-1.25.07-1.39 0-3.15-.43-4.88-2.16-1.73-1.73-2.16-3.49-2.16-4.88 0-.42.02-.84.07-1.25.06-.45.6-1.37 1.25-1.6.26-.09.53-.08.73.12.19.19.49.52.66.86.17.33.24.58.11.83-.13.25-.26.4-.52.7-.26.3-.53.53-.26.9.26.37.8 1.3 1.63 2.13.83.83 1.76 1.37 2.13 1.63.37.26.6-.01.9-.26.3-.26.45-.39.7-.52.25-.13.5-.06.83.11.34.17.67.47.86.66.2.2.21.47.12.73z" 
            fill="white"
          />
        </svg>

        {/* GLOW EFFECT */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      </motion.a>

      {/* PULSE ANIMATION IN THE BACKGROUND */}
      <span className="absolute right-0 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </div>
  );
};

export default WhatsAppBtn;