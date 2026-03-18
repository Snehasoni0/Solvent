"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, User, Building2, Mail, Globe, Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

const BecomePartner = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  // Validation Helpers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isInvalidName = formData.name.length > 0 && formData.name.trim().length < 2;
  const isInvalidEmail = formData.email.length > 0 && !emailRegex.test(formData.email);
  const isInvalidMessage = formData.message.length > 0 && formData.message.trim().length < 10;

  const validateForm = () => {
    const { name, company, email, message } = formData;

    if (!name.trim() || name.length < 2) {
      toast.error("Identity verification failed. Please enter your full name.");
      return false;
    }
    if (!company.trim()) {
      toast.error("Enterprise field is required.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Protocol error: Invalid corporate email format.");
      return false;
    }
    if (message.trim().length < 10) {
      toast.error("Collaboration brief is too short. Please provide more detail.");
      return false;
    }
    if (!captchaToken) {
      toast.warn("Please complete the security check.");
      return false;
    }
    return true;
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzKmJhG7VMEFiWP-eh3v2HaoTtH3mLBHtvWniZMIZtI7z5hP0Z8Q7_ArN68HhuzoW8R/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ ...formData, formType: "Partner", gCaptchaToken: captchaToken })
      });

      toast.success("Application Logged. Our team will reach out shortly.", {
        icon: <Building2 className="text-orange-500" />,
        progressClassName: 'orange-progress-bar'
      });

      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      toast.error("Transmission Interrupted. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FCFCFC] py-10 px-6 relative overflow-hidden" id='partner-form'>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-orange-600" />
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em]">
                  Partnership Hub
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none italic">
                Ready to <span className="text-orange-600">Integrate?</span>
              </h2>

              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                We are expanding our ecosystem with brands that prioritize chemical integrity and operational excellence.
              </p>

              <div className="pt-6 space-y-4">
                {[
                  { icon: <Sparkles size={16} />, text: "Priority Procurement Protocol" },
                  { icon: <Globe size={16} />, text: "Global Distribution Network" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-900 font-bold text-xs uppercase tracking-widest">
                    <span className="text-orange-600">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE MODERN FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-1 md:p-2 rounded shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
          >
            <div className="bg-white border border-slate-50 rounded p-8 md:p-12 relative">
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className={`relative border-b py-2 transition-colors duration-300 ${isInvalidName ? 'border-red-500' : 'border-slate-100 focus-within:border-orange-600'}`}>
                    <label className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${isInvalidName ? 'text-red-500' : 'text-slate-400'}`}>Full Identity</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Carter"
                      className={`w-full bg-transparent text-sm font-bold outline-none placeholder:text-slate-200  tracking-wider ${isInvalidName ? 'text-red-600' : 'text-slate-900'}`}
                    />
                    <User className={`absolute right-0 bottom-3 transition-colors ${isInvalidName ? 'text-red-500' : 'text-slate-200'}`} size={16} />
                    <AnimatePresence>
                      {isInvalidName && (
                        <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-[8px] font-black text-red-500 uppercase tracking-tighter">Insufficient Name Data</motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company */}
                  <div className="relative border-b border-slate-100 focus-within:border-orange-600 transition-colors py-2">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-1">Enterprise</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full bg-transparent text-sm font-bold text-slate-900 outline-none placeholder:text-slate-200  tracking-wider"
                    />
                    <Building2 className="absolute right-0 bottom-3 text-slate-200" size={16} />
                  </div>
                </div>

                {/* Email */}
                <div className={`relative border-b py-2 transition-colors duration-300 ${isInvalidEmail ? 'border-red-500' : 'border-slate-100 focus-within:border-orange-600'}`}>
                  <label className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${isInvalidEmail ? 'text-red-500' : 'text-slate-400'}`}>Corporate Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@enterprise.com"
                    className={`w-full bg-transparent text-sm font-bold outline-none placeholder:text-slate-200  tracking-wider ${isInvalidEmail ? 'text-red-600' : 'text-slate-900'}`}
                  />
                  <Mail className={`absolute right-0 bottom-3 transition-colors ${isInvalidEmail ? 'text-red-500' : 'text-slate-200'}`} size={16} />
                  <AnimatePresence>
                    {isInvalidEmail && (
                      <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-[8px] font-black text-red-500 uppercase tracking-tighter">Invalid Email Protocol</motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div className={`relative border-b py-2 transition-colors duration-300 ${isInvalidMessage ? 'border-red-500' : 'border-slate-100 focus-within:border-orange-600'}`}>
                  <label className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${isInvalidMessage ? 'text-red-500' : 'text-slate-400'}`}>Proposed Collaboration Brief</label>
                  <textarea
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we grow together?"
                    className={`w-full bg-transparent text-sm font-bold outline-none placeholder:text-slate-200 resize-none pt-2  tracking-wider ${isInvalidMessage ? 'text-red-600' : 'text-slate-900'}`}
                  />
                  <AnimatePresence>
                    {isInvalidMessage && (
                      <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-5 left-0 text-[8px] font-black text-red-500 uppercase tracking-tighter">Brief too short (Min 10 chars)</motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Google reCAPTCHA Integration */}
                <div className="flex justify-start transform scale-90 origin-left -mt-2 mb-3">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeEh44sAAAAALRdaAh6u5tLmTvGw0Snao2rEbn_"
                    onChange={onCaptchaChange}
                  />
                </div>

                {/* Modern CTA */}
                <motion.button

                  type="submit"

                  disabled={loading}

                  whileHover={{ scale: loading ? 1 : 1.02 }}

                  whileTap={{ scale: loading ? 1 : 0.98 }}

                  className="w-full bg-slate-950 group relative overflow-hidden rounded-2xl py-6 flex items-center justify-center gap-4 transition-all duration-500 cursor-pointer disabled:bg-slate-800"

                >

                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <span className="relative z-10 text-white font-black text-xs uppercase tracking-[0.3em]">

                    {loading ? "Processing..." : "Submit Protocol"}

                  </span>

                  {loading ? (

                    <Loader2 className="relative z-10 text-white animate-spin" size={18} />

                  ) : (

                    <Send className="relative z-10 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />

                  )}

                </motion.button>
              </form>

              {/* SUCCESS OVERLAY */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-2">Request Logged</h3>
                    <p className="text-slate-500 font-medium text-sm max-w-[240px]">
                      Your enterprise data has been securely added to our integration queue.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BecomePartner;