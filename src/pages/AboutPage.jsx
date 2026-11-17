import React from 'react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, More, wrap } from '../components/ui';
import { SITE_CONFIG, ABOUT_BULLETS, TEAM_MEMBERS } from '../data/finamoatData';

const RESULTS = [
  'Increase ROI in business by 100%',
  'Reduce Finance Cost by 50%',
  'Grow business by 100% every year',
  'Achieve 100% compliances',
];

export default function AboutPage() {
  const leader = TEAM_MEMBERS[0];

  return (
    <>
      <SEOHead
        title="About Us & Leadership | CA Vikram Menda — Shared CFO Services"
        description="At FINAMOAT, we work like a Trusted Finance Partner for startups and business owners by taking charge of the Finance function. Meet CA Vikram Menda and our Mulund West, Mumbai advisory team."
        canonicalPath="/about"
      />
      <PageHero title="Your “Trusted Finance Partner” for orbital business growth">
        {SITE_CONFIG.positioning}
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className={`${wrap} grid gap-16 lg:grid-cols-2`}>
          <Reveal>
            <h2 className="font-serif text-3xl text-navy-950 sm:text-4xl">
              Our structured approach has ensured these results for our clients
            </h2>
            <ul className="mt-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {RESULTS.map((r) => (
                <li key={r} className="py-4 font-medium text-navy-900">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif text-3xl text-navy-950 sm:text-4xl">
              Our team handholds the client to
            </h2>
            <ol className="mt-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {ABOUT_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-4 py-4">
                  <span className="font-serif text-accent-600">{i + 1}.</span>
                  <span className="leading-relaxed text-slate-700">{b}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 border-t border-navy-900/10 bg-sand-100/60 py-20 sm:py-28">
        <div className={wrap}>
          <Reveal className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Cohesive Bio, Quote, Credentials & Story Link */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
                  Leadership · Mulund West, Mumbai
                </p>
                <h2 className="mt-2 font-serif text-3xl text-navy-950 sm:text-5xl">
                  Led by {leader.name}
                </h2>
                <p className="mt-2 text-base font-medium text-navy-900">{leader.role}</p>
                <p className="mt-1 text-xs text-slate-500">{leader.credentials}</p>
              </div>

              <p className="leading-relaxed text-slate-700">{leader.bio}</p>

              {leader.quote && (
                <blockquote className="border-l-2 border-accent-500 pl-5 font-serif text-lg italic text-navy-900">
                  “{leader.quote}”
                </blockquote>
              )}

              <p className="text-sm text-slate-500">{leader.specialties.join(' · ')}</p>

              <div className="border-t border-navy-900/10 pt-5">
                <p className="text-sm text-slate-600 mb-2">
                  From discovering Accountancy in 12th standard and India’s VDIS era to his very first client Mr. Kantilal Haria and 20+ years of mentoring businesses:
                </p>
                <More to="/insights/love-your-vocation">
                  Read CA Vikram Menda’s personal journey (“Rekindle the love”)
                </More>
              </div>
            </div>

            {/* Right Column: Video integrated right into the same section */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl bg-navy-950 shadow-lg aspect-video">
                <iframe
                  title="CA Vikram Menda — How to build a Sustainable Business"
                  src={SITE_CONFIG.youtubeVideoEmbed}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Watch: CA Vikram Menda on converting from a people-driven setup to a process-driven organization.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
