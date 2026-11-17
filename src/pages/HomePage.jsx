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
  const tilt = (clientX, clientY) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (clientX - r.left) / r.width - 0.5;
    const y = (clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  const move = (e) => tilt(e.clientX, e.clientY);
  const touch = (e) => {
    if (e.touches?.[0]) tilt(e.touches[0].clientX, e.touches[0].clientY);
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div
      className="pointer-events-none relative aspect-square w-[min(70vw,250px)] sm:w-[300px] md:w-[340px] lg:w-[min(38vw,440px)] xl:w-[500px] flex-shrink-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-navy-900/10" />
      <div className="absolute inset-[13.5%] rounded-full border border-navy-900/10" />
      <div className="absolute inset-[27%] rounded-full bg-accent-500/5 pulse-ring" />
      <div className="orbit absolute inset-0">
        <span className="absolute left-1/2 top-0 h-3 w-3 lg:h-4 lg:w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500" />
      </div>
      <div className="orbit-rev absolute inset-[13.5%]">
        <span className="absolute left-0 top-1/2 h-2.5 w-2.5 lg:h-3 lg:w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-900" />
      </div>
      <div
        className="pointer-events-auto absolute inset-0 flex items-center justify-center"
        onMouseMove={move}
        onMouseLeave={leave}
        onTouchMove={touch}
        onTouchEnd={leave}
      >
        <div ref={ref} className="float transition-transform duration-200 ease-out">
          <img
            src="/icon.png"
            alt=""
            className="h-28 sm:h-36 md:h-40 lg:h-48 xl:h-56 w-auto mix-blend-multiply"
          />
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
        <div className={`${wrap} pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-20 lg:pb-28`}>
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <h1 className="rise font-serif text-[clamp(2.25rem,5.2vw,5.1rem)] leading-[1.05] tracking-tight text-navy-950">
                {hero.title}
              </h1>
              <p
                className="rise mt-5 sm:mt-7 max-w-xl text-base sm:text-xl leading-relaxed text-slate-600"
                style={{ animationDelay: '150ms' }}
              >
                {hero.subtitle}
              </p>
              <div
                className="rise mt-8 sm:mt-10 flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                style={{ animationDelay: '300ms' }}
              >
                <Link to="/check-up" className={btnPrimary}>
                  Book a free finance check-up
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <span className="text-center text-xs sm:text-sm font-medium text-slate-400">
                  or
                </span>
                <a
                  href={waLink(
                    SITE_CONFIG.whatsappNumber,
                    'Hi Finamoat, I would like to book a Free Business Finance Check-up for my business.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={btnGhost}
                >
                  <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
              <Knight />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof: the four results */}
      <section className="border-y border-navy-900/10">
        <div className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
          {IMPACT_STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className={`py-7 sm:py-10 lg:py-14 ${
                i >= 2 ? 'border-t border-navy-900/10 lg:border-t-0' : ''
              } ${
                i % 2 === 1
                  ? 'border-l border-navy-900/10 pl-5 sm:pl-8'
                  : 'pr-4 sm:pr-6'
              } ${i > 0 ? 'lg:border-l lg:border-navy-900/10 lg:pl-8' : ''}`}
            >
              <div className="font-serif text-4xl text-navy-950 sm:text-5xl lg:text-6xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-navy-900">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. What we do */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className={`${wrap} grid gap-10 sm:gap-14 lg:grid-cols-12`}>
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl leading-tight text-navy-950 sm:text-5xl">
              We take charge of your finance function, so you can focus on growth.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600">
              {SITE_CONFIG.positioning}
            </p>
            <div className="mt-6 sm:mt-8">
              <More to="/about">Meet CA Vikram Menda & the team</More>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
              {ABOUT_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3.5 py-4 sm:gap-4 sm:py-5">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-600" />
                  <span className="text-sm sm:text-base leading-relaxed text-navy-900">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. Services, grouped into four lines instead of ten cards */}
      <section className="bg-sand-100 py-16 sm:py-24 lg:py-32">
        <div className={wrap}>
          <Reveal className="mb-8 sm:mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">How we help</h2>
            <More to="/services">All 10 services</More>
          </Reveal>
          <ul className="border-t border-navy-900/15">
            {CATEGORIES.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 70} className="border-b border-navy-900/15">
                <Link
                  to="/services"
                  className="group grid gap-2 py-5 sm:py-7 hover-row md:grid-cols-12 md:gap-8"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-navy-950 md:col-span-4">
                    {c}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-8">
                    {SERVICES.filter((s) => s.category === c)
                      .map((s) => s.title)
                      .join(' · ')}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Case studies: two, big numbers */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className={wrap}>
          <Reveal className="mb-8 sm:mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">
              Results we’ve delivered
            </h2>
            <More to="/case-studies">All case studies</More>
          </Reveal>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <Reveal key={cs.id} delay={i * 120}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group block border-t border-navy-900 pt-5 sm:pt-6"
                >
                  <div className="font-serif text-5xl sm:text-6xl text-accent-600">
                    {cs.headlineMetric}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    {cs.headlineMetricLabel}
                  </p>
                  <h3 className="mt-4 sm:mt-6 font-serif text-xl sm:text-2xl leading-snug text-navy-950">
                    <span className="u-link">{cs.client}</span>
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. One closing action */}
      <section className="bg-navy-900 py-16 sm:py-24 text-white">
        <div className={`${wrap} grid items-center gap-10 sm:gap-12 lg:grid-cols-2`}>
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
              Start with a free business finance check-up
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base leading-relaxed text-slate-300">
              Our experts review the financial systems in your business and give you an exhaustive “Report Card” of the tools & techniques you need.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link to="/check-up" className={btnGold + ' w-full sm:w-auto'}>
                Apply now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {CHECKUP_POINTS.map((p) => (
                <li key={p} className="flex gap-3.5 py-4 sm:gap-4 sm:py-5 text-sm sm:text-base">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-400" />
                  <span className="text-slate-100">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
