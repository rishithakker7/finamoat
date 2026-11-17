import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Reveal, CountUp, More, wrap, btnPrimary, btnGhost, btnGold, waLink } from '../components/ui';
import { SITE_CONFIG, HERO_SLIDES, IMPACT_STATS, ABOUT_BULLETS, SERVICES, CASE_STUDIES, FAQS } from '../data/finamoatData';

const CHECKUP_POINTS = [
  'Cashflow & Working Capital Blockage Audit',
  'Cost of Capital & Loan Interest Reduction Check',
  '10-Point Executive MIS & Compliance Readiness Score',
  'Promoter Networth & Tax Optimization Roadmap',
];

const CATEGORIES = ['Core CFO Advisory', 'Capital & M&A', 'Treasury & Cashflow', 'Governance & Tax'];

function Knight() {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  const leave = () => { ref.current.style.transform = ''; };
  return (
    <div className="pointer-events-none absolute -right-10 top-6 hidden h-[520px] w-[520px] lg:block" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-navy-900/10" />
      <div className="absolute inset-[70px] rounded-full border border-navy-900/10" />
      <div className="absolute inset-[140px] rounded-full bg-accent-500/5 pulse-ring" />
      <div className="orbit absolute inset-0"><span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500" /></div>
      <div className="orbit-rev absolute inset-[70px]"><span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-900" /></div>
      <div className="pointer-events-auto absolute inset-0 flex items-center justify-center" onMouseMove={move} onMouseLeave={leave}>
        <div ref={ref} className="float transition-transform duration-200 ease-out">
          <img src="/icon.png" alt="" className="h-60 w-auto mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const hero = HERO_SLIDES[0];

  return (
    <>
      <SEOHead
        title="Shared CFO Services in Mumbai | Trusted Finance Partner for Startups & SMEs"
        description="At FINAMOAT, we work like a Trusted Finance Partner for startups and business owners. Increase ROI by 100%, reduce finance cost by 50%, and get Daily MIS Dashboards. Book a Free Business Finance Check-up."
        canonicalPath="/"
        faqData={FAQS.slice(0, 4)}
      />

      {/* 1. Hero: one message, one action */}
      <section className="relative overflow-hidden">
        <Knight />
        <div className={`${wrap} relative pt-20 pb-24 lg:pt-32 lg:pb-32`}>
          <h1 className="rise max-w-4xl font-serif text-5xl leading-[1.03] tracking-tight text-navy-950 sm:text-7xl lg:text-[84px]">{hero.title}</h1>
          <p className="rise mt-8 max-w-xl text-xl leading-relaxed text-slate-600" style={{ animationDelay: '150ms' }}>{hero.subtitle}</p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: '300ms' }}>
            <Link to="/check-up" className={btnPrimary}>
              Book a free finance check-up
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="text-sm font-medium text-slate-500">or</span>
            <a
              href={waLink(SITE_CONFIG.whatsappNumber, 'Hi Finamoat, I would like to book a Free Business Finance Check-up for my business.')}
              target="_blank"
              rel="noreferrer"
              className={btnGhost}
            >
              <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. Proof: the four results */}
      <section className="border-y border-navy-900/10">
        <div className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={i} delay={i * 90} className={`py-10 pr-6 lg:py-14 ${i > 0 ? 'lg:border-l lg:border-navy-900/10 lg:pl-8' : ''}`}>
              <div className="font-serif text-5xl text-navy-950 sm:text-6xl"><CountUp value={s.value} /></div>
              <div className="mt-3 text-sm font-semibold text-navy-900">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. What we do */}
      <section className="py-24 sm:py-32">
        <div className={`${wrap} grid gap-14 lg:grid-cols-12`}>
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">We take charge of your finance function, so you can focus on growth.</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-slate-600">{SITE_CONFIG.positioning}</p>
            <div className="mt-8"><More to="/about">Meet CA Vikram Menda & the team</More></div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
              {ABOUT_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-4 py-5">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-600" />
                  <span className="leading-relaxed text-navy-900">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. Services, grouped into four lines instead of ten cards */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <div className={wrap}>
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-navy-950 sm:text-5xl">How we help</h2>
            <More to="/services">All 10 services</More>
          </Reveal>
          <ul className="border-t border-navy-900/15">
            {CATEGORIES.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 70} className="border-b border-navy-900/15">
                <Link to="/services" className="group grid gap-2 py-7 hover-row md:grid-cols-12 md:gap-8">
                  <h3 className="font-serif text-2xl text-navy-950 md:col-span-4">{c}</h3>
                  <p className="leading-relaxed text-slate-600 md:col-span-8">
                    {SERVICES.filter((s) => s.category === c).map((s) => s.title).join(' · ')}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Case studies: two, big numbers */}
      <section className="py-24 sm:py-32">
        <div className={wrap}>
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-navy-950 sm:text-5xl">Results we’ve delivered</h2>
            <More to="/case-studies">All case studies</More>
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <Reveal key={cs.id} delay={i * 120}>
                <Link to={`/case-studies/${cs.slug}`} className="group block border-t border-navy-900 pt-6">
                  <div className="font-serif text-6xl text-accent-600">{cs.headlineMetric}</div>
                  <p className="mt-1 text-sm text-slate-500">{cs.headlineMetricLabel}</p>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-navy-950"><span className="u-link">{cs.client}</span></h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. One closing action */}
      <section className="bg-navy-900 py-24 text-white">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`}>
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Start with a free business finance check-up</h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Our experts review the financial systems in your business and give you an exhaustive “Report Card” of the tools & techniques you need.
            </p>
            <div className="mt-8"><Link to="/check-up" className={btnGold}>Apply now <ArrowUpRight className="h-4 w-4" /></Link></div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {CHECKUP_POINTS.map((p) => (<li key={p} className="flex gap-4 py-5"><Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-400" /><span className="text-slate-100">{p}</span></li>))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
