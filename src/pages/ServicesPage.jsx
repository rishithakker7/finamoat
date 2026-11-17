import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, More, wrap, btnGhost, waLink } from '../components/ui';
import { SERVICES, SITE_CONFIG, SLEEPLESS_QUESTIONS } from '../data/finamoatData';

const CATEGORIES = ['All', 'Core CFO Advisory', 'Capital & M&A', 'Treasury & Cashflow', 'Governance & Tax'];

export default function ServicesPage() {
  const { hash } = useLocation();
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const list = cat === 'All' ? SERVICES : SERVICES.filter((s) => s.category === cat);

  // Deep links like /services#budgeting-and-financial-control open that row
  useEffect(() => {
    const slug = hash.replace('#', '');
    if (slug && SERVICES.some((s) => s.slug === slug)) {
      setCat('All');
      setOpen(slug);
    }
  }, [hash]);

  return (
    <>
      <SEOHead
        title="10 Shared CFO & Strategic Finance Services | Finamoat Mumbai"
        description="Explore Finamoat’s 10 Shared CFO services: Startup Fundraising & Equity Dilution, Strategic Finance Partner, Budgeting, Forex Risk, MIS Dashboards, M&A, Internal Controls, Tax Planning, and Debt Restructuring."
        canonicalPath="/services"
      />
      <PageHero title="Shared CFO & strategic finance services">
        Gone are the days when CFOs were just bean counters; CFOs today are business enablers. Pick a service to see how we handhold you through it.
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className={wrap}>
          <div className="no-scrollbar mb-4 flex gap-6 overflow-x-auto border-b border-navy-900/10">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition ${cat === c ? 'border-navy-900 text-navy-950' : 'border-transparent text-slate-500 hover:text-navy-900'}`}>{c}</button>
            ))}
          </div>

          <ul>
            {list.map((s) => {
              const isOpen = open === s.slug;
              return (
                <li key={s.id} id={s.slug} className="scroll-mt-28 border-b border-navy-900/10">
                  <button onClick={() => setOpen(isOpen ? null : s.slug)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                    <div>
                      <h2 className="font-serif text-2xl text-navy-950 sm:text-3xl">{s.title}</h2>
                      <p className="mt-2 max-w-2xl text-slate-600">{s.shortDesc}</p>
                    </div>
                    <Plus className={`h-5 w-5 flex-shrink-0 text-accent-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>

                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 pt-2 lg:grid-cols-12 lg:gap-14">
                        <div className="lg:col-span-7">
                          <p className="leading-relaxed text-slate-700">{s.verbatimDescription}</p>
                          {s.stages?.length > 0 && (
                            <ol className="mt-6 space-y-3">
                              {s.stages.map((st, i) => (
                                <li key={i} className="flex gap-4 text-sm leading-relaxed text-slate-700"><span className="font-serif text-lg text-accent-600">{i + 1}</span><span>{st}</span></li>
                              ))}
                            </ol>
                          )}
                        </div>
                        <div className="lg:col-span-5">
                          <ul className="space-y-2.5">
                            {s.deliverables.map((d) => (<li key={d} className="flex gap-3 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />{d}</li>))}
                          </ul>
                          <p className="mt-6 font-serif text-lg leading-snug text-navy-950">{s.outcome}</p>
                          <div className="mt-6 flex flex-wrap items-center gap-4">
                            <More to={`/check-up?service=${s.slug}`}>Request consultation</More>
                            <a
                              href={waLink(SITE_CONFIG.whatsappNumber, `Hi Finamoat, I would like to discuss Service #${s.id}: ${s.title}.`)}
                              target="_blank"
                              rel="noreferrer"
                              className={btnGhost}
                            >
                              <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
                              WhatsApp Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy-900/10 py-20 sm:py-28">
        <div className={wrap}>
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="font-serif text-3xl leading-tight text-navy-950 sm:text-5xl">The questions that cost business owners their sleep.</h2>
          </Reveal>
          <div className="grid gap-x-16 md:grid-cols-2">
            {SLEEPLESS_QUESTIONS.map((q, i) => (
              <Reveal key={i} delay={(i % 2) * 100} className="border-t border-navy-900/15 py-7">
                <h3 className="font-serif text-xl leading-snug text-navy-950">{q.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{q.solution}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
