import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-28 md:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading
          kicker="REPUTATION & ENDORSEMENTS"
          title="WORDS THAT"
          highlight="MATTER."
          subtitle="Reflections on visual craft, strategic communication, and measurable growth delivery."
          className="mb-0"
        />

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-white/20 hover:border-[#D8FF3E] hover:text-[#D8FF3E] flex items-center justify-center text-white transition-colors cursor-pointer"
            data-cursor="interactive"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-white/20 hover:border-[#D8FF3E] hover:text-[#D8FF3E] flex items-center justify-center text-white transition-colors cursor-pointer"
            data-cursor="interactive"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Testimonial Card Display */}
      <div className="relative bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 md:p-16 overflow-hidden">
        <Quote size={80} className="absolute -top-4 -right-4 text-white/[0.03] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-8 max-w-4xl"
          >
            {/* Project Category Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF3E]">
              <span>PROJECT //</span>
              <span className="uppercase tracking-wider">{currentTestimonial.projectType}</span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-[#F5F5F0] leading-snug">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Credit */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold font-heading text-white">
                  {currentTestimonial.author}
                </h4>
                <p className="text-xs font-mono text-[#969696]">
                  {currentTestimonial.role} · {currentTestimonial.company}
                </p>
              </div>

              {/* Sample Tag */}
              <div className="text-[11px] font-mono text-[#888] bg-[#181818] border border-white/5 px-3 py-1 rounded">
                Sample Client Testimonial Placeholder
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#D8FF3E]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
