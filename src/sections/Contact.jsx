import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MessageSquare, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import MagneticButton from '../components/MagneticButton.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Both',
    budget: '$1,000 - $3,000',
    details: '',
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
      details: '',
    });
  };

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-premium">
        <SectionHeading
          kicker="Contact"
          title="Have a project?"
          highlight="Let's build it."
          subtitle="Video production, SEO strategy, or both — tell me what you're aiming for."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 reveal-up">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-ink">
                Let's talk about the next milestone.
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Open for commercial edits, YouTube series, short-form packs, and
                technical SEO engagements.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:shazalseo99@gmail.com"
                className="p-4 rounded-2xl border border-line flex items-center justify-between hover:border-accent transition-colors group"
                data-cursor="interactive"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-canvas transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted uppercase block">Email</span>
                    <span className="text-sm font-semibold text-ink">
                      shazalseo99@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted group-hover:text-accent" />
              </a>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-line flex items-center justify-between hover:border-accent transition-colors group"
                data-cursor="interactive"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-canvas transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted uppercase block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-ink">+92 · Direct booking</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted group-hover:text-accent" />
              </a>
            </div>

            <div className="p-5 rounded-2xl border border-line bg-surface/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Current availability
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Accepting 2 new productions for Q1/Q2 2026. Typical reply within 24 hours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-line bg-surface/50 p-6 sm:p-10 relative reveal-scale">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted uppercase" htmlFor="fullName">
                        Full name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-canvas/60 rounded-2xl border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
                      />
                      {errors.fullName && (
                        <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted uppercase" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-canvas/60 rounded-2xl border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-muted uppercase block">Service</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['Video Editing', 'SEO Strategy', 'Both'].map((svc) => (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => setFormData({ ...formData, service: svc })}
                          className={`py-2.5 px-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                            formData.service === svc
                              ? 'bg-accent text-canvas border-accent font-semibold'
                              : 'bg-canvas/40 text-muted border-line hover:text-ink'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted uppercase block" htmlFor="budget">
                      Estimated budget (USD)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-canvas/60 rounded-2xl border border-line px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none font-mono"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000+">$5,000+ (Retainer)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted uppercase" htmlFor="details">
                      Project details *
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="Footage length, style, search goals, platforms..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-canvas/60 rounded-2xl border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
                    />
                    {errors.details && (
                      <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.details}
                      </span>
                    )}
                  </div>

                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full py-4 justify-center"
                    data-cursor="interactive"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start a project
                      <Send size={16} />
                    </span>
                  </MagneticButton>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 border border-accent text-accent flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold font-display text-ink">
                      Request received
                    </h4>
                    <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                      Thanks, <span className="text-ink font-semibold">{formData.fullName}</span>.
                      Your brief for <span className="text-accent">{formData.service}</span> is
                      logged. Expect a reply to{' '}
                      <span className="text-ink">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-2xl border border-line-strong text-xs font-mono text-ink hover:border-accent transition-colors cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
