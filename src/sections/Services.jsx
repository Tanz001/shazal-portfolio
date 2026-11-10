import { ArrowUpRight, Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { SERVICES_DATA } from '../data/services.js';
import videoShowcaseImg from '../assets/images/video_editing_showcase_1794316155603.jpg';
import seoShowcaseImg from '../assets/images/seo_data_visualization_1794316157747.jpg';

export default function Services() {
  const videoService = SERVICES_DATA[0];
  const seoService = SERVICES_DATA[1];

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-pad">
      <div className="container-premium">
        <SectionHeading
          kicker="Capabilities"
          title="Two disciplines."
          highlight="One pipeline."
          subtitle="Video craft and search strategy that work alone — or as a unified organic growth system."
        />

        <div className="space-y-24 lg:space-y-32">
          {/* Video */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6 reveal-up">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent">
                01 — Production
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-ink">
                Cinematic video editing
              </h3>
              <p className="text-muted leading-relaxed">
                From short-form hooks to brand commercials and long-form
                YouTube — raw footage becomes stories people actually finish.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                {videoService.deliverables.map((item) => (
                  <li key={item.name} className="border-t border-line pt-3">
                    <div className="text-sm font-semibold text-ink">{item.name}</div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">
                      {item.detail}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                <p className="text-xs font-mono text-muted">
                  <span className="text-ink">Tools · </span>
                  {videoService.toolkit.join(' · ')}
                </p>
                <button
                  onClick={scrollToWork}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-ink transition-colors cursor-pointer"
                  data-cursor="interactive"
                >
                  View showreels
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            <div
              className="lg:col-span-6 relative reveal-scale group cursor-pointer"
              onClick={scrollToWork}
              data-cursor="play"
              data-cursor-text="WATCH"
            >
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={videoShowcaseImg}
                  alt="Video editing showcase"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-canvas flex items-center justify-center">
                      <Play size={18} className="ml-0.5 fill-canvas" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-accent">Preview cut</div>
                      <div className="text-sm font-display font-semibold text-ink">
                        Color, sound & pacing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div
              className="lg:col-span-6 relative order-2 lg:order-1 reveal-scale group cursor-pointer"
              onClick={scrollToWork}
              data-cursor="view"
              data-cursor-text="DATA"
            >
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <img
                  src={seoShowcaseImg}
                  alt="SEO data visualization"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="text-[11px] font-mono text-accent">Organic performance</div>
                  <div className="text-sm font-display font-semibold text-ink">
                    Architecture & ranking growth
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 reveal-up">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent">
                02 — Strategy
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-ink">
                SEO & digital growth
              </h3>
              <p className="text-muted leading-relaxed">
                Technical clarity, intent-led content, and architectures that
                make ambitious brands discoverable — and keep compounding.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                {seoService.deliverables.map((item) => (
                  <li key={item.name} className="border-t border-line pt-3">
                    <div className="text-sm font-semibold text-ink">{item.name}</div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">
                      {item.detail}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                <p className="text-xs font-mono text-muted">
                  <span className="text-ink">Stack · </span>
                  {seoService.toolkit.join(' · ')}
                </p>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-ink transition-colors cursor-pointer"
                  data-cursor="interactive"
                >
                  Request an audit
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
