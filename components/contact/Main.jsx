"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Globe, MessageSquare,
  Facebook, Instagram, Linkedin, Twitter, Loader2,
  CheckCircle2
} from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Hotline",
      val: "+91 291 234 5678",
      href: "tel:+912912345678"
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      val: "+91 98290 XXXXX",
      href: "https://wa.me/9198290XXXXX"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      val: "support@solvent.com",
      href: "mailto:support@solvent.com"
    }
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com/solvent" },
    { icon: Instagram, href: "https://instagram.com/solvent" },
    { icon: Linkedin, href: "https://linkedin.com/company/solvent" },
    { icon: Twitter, href: "https://twitter.com/solvent" },
  ];

  // --- Input Restriction Logic ---
  const handleNameChange = (e, field) => {
    // Allows only letters and spaces
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData({ ...formData, [field]: value });
  };

  const handlePhoneChange = (e) => {
    // Allows only digits
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim() || !lastName.trim() || !emailRegex.test(email) || phone.length < 10 || message.length < 10) {
      toast.error("Please verify all required fields (Phone: min 10 digits).");
      return false;
    }
    if (!captchaToken) {
      toast.warn("Please complete the security check.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzKmJhG7VMEFiWP-eh3v2HaoTtH3mLBHtvWniZMIZtI7z5hP0Z8Q7_ArN68HhuzoW8R/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ ...formData, formType: "Contact", gCaptchaToken: captchaToken })
      });

      toast.success("Inquiry Received. We'll be in touch.", {
        icon: <CheckCircle2 className="text-orange-500" />,
        className: "bg-slate-950 text-white rounded-2xl border border-slate-800 font-sans text-xs uppercase tracking-wider",
        progressClassName: 'orange-progress-bar'
      });
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      toast.error("Connection Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-white flex flex-col items-center font-sans">
      {/* HEADER AREA */}
      <div className="w-full h-[45vh] md:h-[55vh] relative flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale brightness-[0.2] scale-110" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }} />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-orange-500 mb-4 font-black uppercase tracking-[0.5em] text-[10px]">
            <Globe size={14} /> <span>Global Operations</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.8] text-center">
            Contact <span className="text-orange-600 italic">Us.</span>
          </h2>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="w-full max-w-7xl px-4 md:px-12 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

          {/* FORM SECTION */}
          <div className="flex-1 p-8 md:p-14 relative">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-10">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => handleNameChange(e, 'firstName')}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => handleNameChange(e, 'lastName')}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Corporate Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600"
                />
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Phone Number (Numbers Only) *"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600"
                />
              </div>
              <textarea rows={4} placeholder="Your Message *" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-orange-600 resize-none" />

              <div className="flex justify-start transform scale-90 origin-left -mt-4 mb-2">
                <ReCAPTCHA ref={recaptchaRef} sitekey="6LdHZY4sAAAAADpEtNU9eOzZ4gNtmAwdzmnaeIyu" onChange={(t) => setCaptchaToken(t)} />
              </div>

              <motion.button type="submit" disabled={loading} className="bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors flex items-center gap-3 cursor-pointer disabled:opacity-50">
                {loading && <Loader2 size={14} className="animate-spin" />} {loading ? "Sending..." : "Submit Inquiry"}
              </motion.button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center text-center p-8">
                  <CheckCircle2 size={48} className="text-orange-600 mb-4" />
                  <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter">Transmission Received</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT INFO PANEL */}
          <div className="lg:w-[400px] bg-slate-950 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-8">
                Connect with our <br /><span className="text-orange-500 italic">infrastructure.</span>
              </h4>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-4 group hover:bg-orange-600 transition-all duration-300"
                  >
                    <div className="p-3 bg-white/10 rounded-xl text-orange-500 group-hover:bg-white group-hover:text-orange-600 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-black uppercase tracking-widest group-hover:text-white/80">{item.label}</p>
                      <p className="text-sm font-bold">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
              <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Digital Ecosystem</p>
              <div className="flex items-center justify-center space-x-4">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: '#ea580c' }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors hover:border-orange-600"
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;