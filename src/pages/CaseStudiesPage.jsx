import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, More, wrap } from '../components/ui';
import { CASE_STUDIES, TESTIMONIALS } from '../data/finamoatData';

export default function CaseStudiesPage() {
  return (
    <>
      <SEOHead
        title="Client Case Studies | Shared CFO Turnarounds & ₹10 Cr Fundraising"
        description="Read Finamoat’s client case studies: Daksh IT Consulting Pvt Ltd (6-month turnaround to cheaper long-term bank finance) and Mr. Sandesh Nagre (₹10 Crore startup scalability & valuation)."
        canonicalPath="/case-studies"
      />
      <PageHero title="Real shared CFO transformations">
        How Finamoat handholds Indian startups and SMEs through daily MIS dashboards, compliance turnarounds, bank credit negotiations, and ₹10 Crore+ equity fundraising.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className={`${wrap} space-y-20`}>
          {CASE_STUDIES.map((cs) => (
            <Reveal key={cs.id} className="grid gap-8 border-t border-navy-900 pt-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="font-serif text-6xl text-accent-600">{cs.headlineMetric}</div>
                <p className="mt-2 text-sm text-slate-500">{cs.headlineMetricLabel}</p>
                <dl className="mt-8 grid grid-cols-2 gap-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs text-slate-500">{m.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-navy-950">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm text-slate-500">{cs.industry} · {cs.client}</p>
                <h2 className="mt-2 font-serif text-3xl leading-snug text-navy-950">
                  <Link to={`/case-studies/${cs.slug}`} className="u-link">{cs.title}</Link>
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {[['The challenge', cs.challenge], ['What we did', cs.solution], ['The result', cs.result]].map(([h, t]) => (
                    <div key={h}>
                      <h3 className="text-sm font-semibold text-navy-900">{h}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8"><More to={`/case-studies/${cs.slug}`}>Read the full case study</More></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand-100 py-20 sm:py-28">
        <div className={wrap}>
          <Reveal className="mb-12"><h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">What our clients say</h2></Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={i * 100}>
                <p className="font-serif text-lg leading-relaxed text-navy-950">“{t.quote}”</p>
                <div className="mt-6 border-t border-navy-900/15 pt-4">
                  <div className="font-semibold text-navy-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="mt-2 text-sm font-medium text-accent-600">{t.highlight}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
