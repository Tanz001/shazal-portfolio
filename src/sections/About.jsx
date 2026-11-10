import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import portraitImg from '../assets/images/creative_director_portrait_1794316159600.jpg';

export default function About() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shazalqaiser', handle: 'shazalqaiser' },
    { name: 'Instagram', url: 'https://instagram.com/shazalqaiser', handle: '@shazalqaiser' },
    { name: 'YouTube', url: 'https://youtube.com', handle: 'Shazal Qaiser' },
    { name: 'Behance', url: 'https://behance.net', handle: 'shazal-edits' },
  ];

  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-premium">
        <SectionHeading
          kicker="About"
          title="The person"
          highlight="behind the pixels."
          subtitle="Bridging cinematic storytelling and algorithmic discovery — work that holds attention and delivers value."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4 reveal-scale">
            <div className="relative overflow-hidden rounded-2xl border border-line group">
              <img
                src={portraitImg}
                alt="Shazal Qaiser portrait"
                referrerPolicy="no-referrer"
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                <div className="text-[11px] font-mono text-accent">Lahore · Global remote</div>
                <div className="text-sm font-display font-semibold text-ink">
                  Video Editor & SEO Specialist
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 reveal-up">
            <div className="space-y-5">
              <p className="text-xl sm:text-2xl text-ink font-display font-semibold leading-relaxed">
                I'm Shazal Qaiser — a video editor and SEO specialist focused on
                meaningful digital experiences.
              </p>
              <p className="text-muted leading-relaxed">
                I combine creativity with strategy: transforming footage into
                engaging content, and helping websites become visible through
                intentional search architecture.
              </p>
              <p className="text-muted leading-relaxed">
                The brief is simple:{' '}
                <span className="text-accent">
                  look sharp, communicate clearly, deliver value.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-line">
              {[
                ['Pacing', 'Every cut timed for emotional momentum and watch-time.'],
                ['Architecture', 'Schemas and site health that crawlers prioritize.'],
                ['Compound growth', 'Assets designed to perform today and keep earning.'],
              ].map(([title, copy]) => (
                <div key={title} className="space-y-2">
                  <h4 className="text-sm font-bold font-display text-ink">{title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-line space-y-4">
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border border-line hover:border-accent transition-colors group flex flex-col justify-between min-h-[72px]"
                    data-cursor="interactive"
                  >
                    <div className="flex items-center justify-between text-xs text-muted group-hover:text-accent transition-colors">
                      <span className="font-mono">{social.name}</span>
                      <ArrowUpRight size={13} />
                    </div>
                    <span className="text-xs font-semibold text-ink mt-2 truncate">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
