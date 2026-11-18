import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Reveal, More, wrap, btnGhost, btnGold, waLink } from '../components/ui';
import { CASE_STUDIES, SITE_CONFIG } from '../data/finamoatData';

export default function CaseStudyDetailPage({ forcedSlug = null }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const cs = CASE_STUDIES.find((c) => c.slug === slug || c.id === slug);
  if (!cs) return <Navigate to="/case-studies" replace />;
  const others = CASE_STUDIES.filter((c) => c.slug !== cs.slug).slice(0, 2);

  return (
    <>
      <SEOHead title={`${cs.title} | Finamoat Case Study`} description={cs.summary} canonicalPath={`/case-studies/${cs.slug}`} type="article" />

      <section className="border-b border-navy-900/10">
        <div className={`${wrap} max-w-4xl pt-14 pb-14 sm:pt-20`}>
          <Link to="/case-studies" className="rise inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-4 py-2 text-xs font-semibold text-navy-900 transition-[background-color,border-color,transform] duration-200 ease-out-strong hover:border-navy-900 hover:-translate-y-0.5 active:scale-[0.97] active:duration-100">
            <ArrowLeft className="h-3.5 w-3.5" /> All case studies
          </Link>
          <p className="rise mt-8 text-sm text-slate-500" style={{ animationDelay: '60ms' }}>{cs.industry} · {cs.date}</p>
          <h1 className="rise mt-3 font-serif text-4xl leading-[1.1] text-navy-950 sm:text-5xl" style={{ animationDelay: '120ms' }}>{cs.title}</h1>
          <p className="rise mt-6 text-lg leading-relaxed text-slate-600" style={{ animationDelay: '180ms' }}>{cs.summary}</p>
          <dl className="rise mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4" style={{ animationDelay: '180ms' }}>
            {cs.metrics.map((m) => (
              <div key={m.label} className="border-t border-navy-900 pt-3">
                <dt className="text-xs text-slate-500">{m.label}</dt>
                <dd className="mt-1 font-serif text-xl text-navy-950">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className={`${wrap} max-w-4xl`}>
          <div className="grid gap-10 md:grid-cols-3">
            {[['The problem', cs.challenge], ['Finamoat’s approach', cs.solution], ['The outcome', cs.result]].map(([h, t], i) => (
              <Reveal key={h} delay={i * 60}>
                <h2 className="font-serif text-xl text-navy-950">{h}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 max-w-2xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 pb-4">
              <h2 className="font-serif text-2xl text-navy-950">Client: {cs.client}</h2>
              <a
                href={waLink(SITE_CONFIG.whatsappNumber, `Hi Finamoat, I just read your case study on "${cs.title}" and would like to discuss a similar mandate for my business.`)}
                target="_blank"
                rel="noreferrer"
                className={btnGhost}
              >
                <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.8] text-slate-800">
              {cs.verbatimContent.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal className="mt-20 flex flex-col gap-6 rounded-3xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-md">
              <h3 className="font-serif text-2xl">Facing similar cashflow, compliance or fundraising challenges?</h3>
              <p className="mt-2 text-sm text-slate-300">Book a complimentary Business Finance Check-up with CA Vikram Menda’s team.</p>
            </div>
            <Link to="/check-up" className={btnGold + ' flex-shrink-0'}>Apply for free check-up</Link>
          </Reveal>

          {others.length > 0 && (
            <div className="mt-20">
              <h3 className="mb-6 font-serif text-2xl text-navy-950">More case studies</h3>
              <div className="grid gap-8 md:grid-cols-2">
                {others.map((c) => (
                  <Link key={c.id} to={`/case-studies/${c.slug}`} className="group block border-t border-navy-900 pt-4">
                    <div className="text-sm font-medium text-accent-600">{c.headlineMetric} · {c.industry}</div>
                    <h4 className="mt-2 font-serif text-xl text-navy-950"><span className="u-link">{c.title}</span></h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
