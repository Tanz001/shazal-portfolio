import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Mail,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import MagneticButton from '../components/MagneticButton.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Both',
    budget: '$1,000 - $3,000',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.details.trim()) errs.details = 'Please briefly describe your project';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      service: 'Both',
      budget: '$1,000 - $3,000',
      details: ''
    });
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <SectionHeading
        kicker="INITIATE COLLABORATION"
        title="HAVE A PROJECT?"
        highlight="LET'S MAKE IT HAPPEN."
        subtitle="Whether you need compelling video content or a smarter search engine strategy, let's create something worth remembering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Inquiries & Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-white">
              Let's talk about your next milestone.
            </h3>
            <p className="text-sm text-[#969696] leading-relaxed">
              Open for creative commercial video editing, narrative YouTube series, short-form viral packages, and technical SEO engagements.
            </p>
          </div>

          {/* Contact Direct Cards */}
          <div className="space-y-3">
            <a
              href="mailto:tanzeelqaiser66@gmail.com"
              className="p-4 bg-[#121212] border border-white/10 rounded-xl flex items-center justify-between hover:border-[#D8FF3E] transition-colors group"
              data-cursor="interactive"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#D8FF3E] group-hover:bg-[#D8FF3E] group-hover:text-[#090909] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#888] uppercase block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-white">
                    tanzeelqaiser66@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#969696] group-hover:text-[#D8FF3E]" />
            </a>

            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#121212] border border-white/10 rounded-xl flex items-center justify-between hover:border-[#D8FF3E] transition-colors group"
              data-cursor="interactive"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#D8FF3E] group-hover:bg-[#D8FF3E] group-hover:text-[#090909] transition-colors">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#888] uppercase block">
                    WhatsApp & Quick Chat
                  </span>
                  <span className="text-sm font-semibold text-white">
                    +92 (Direct Booking)
                  </span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#969696] group-hover:text-[#D8FF3E]" />
            </a>
          </div>

          {/* Availability Box */}
          <div className="p-5 bg-[#141414] border border-white/10 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF3E]">
              <span className="w-2 h-2 rounded-full bg-[#D8FF3E] animate-pulse" />
              <span>CURRENT AVAILABILITY</span>
            </div>
            <p className="text-xs text-[#C4C4BC] leading-relaxed">
              Accepting 2 new client productions for Q1/Q2 2026. Standard response timeframe is within 24 hours.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#969696] uppercase">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:border-[#D8FF3E] focus:outline-none transition-colors font-sans"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#969696] uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:border-[#D8FF3E] focus:outline-none transition-colors font-sans"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#969696] uppercase block">
                    Service Required
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Video Editing', 'SEO Strategy', 'Both'].map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className={`py-2.5 px-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer truncate ${
                          formData.service === svc
                            ? 'bg-[#D8FF3E] text-[#090909] font-bold'
                            : 'bg-[#181818] text-[#969696] hover:text-white border border-white/5'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Budget (Optional) */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#969696] uppercase block">
                    Estimated Budget (USD)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#D8FF3E] focus:outline-none transition-colors font-mono"
                  >
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000+">$5,000+ (Retainer / Campaign)</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#969696] uppercase">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the footage length, desired style, search goals, or platform deliverables..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:border-[#D8FF3E] focus:outline-none transition-colors font-sans"
                  />
                  {errors.details && (
                    <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.details}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-center justify-center font-bold"
                  data-cursor="interactive"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start a Project
                    <Send size={16} />
                  </span>
                </MagneticButton>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#D8FF3E]/10 border border-[#D8FF3E] text-[#D8FF3E] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(216,255,62,0.2)]">
                  <CheckCircle2 size={32} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-heading text-white">
                    Project Request Received
                  </h4>
                  <p className="text-sm text-[#969696] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your brief for <span className="text-[#D8FF3E]">{formData.service}</span> has been logged. Shazal will review your requirements and respond to <span className="text-white">{formData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-lg border border-white/20 text-xs font-mono text-white hover:border-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
