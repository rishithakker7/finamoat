import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, Accordion, wrap } from '../components/ui';
import { ENGAGEMENT_MODELS, CFO_COMPARISON_TABLE, FAQS } from '../data/finamoatData';

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Engagement Models, Retainers & Shared CFO vs. CA FAQ | Finamoat"
        description="Explore Finamoat’s Shared CFO engagement models: Free Business Finance Check-up, Monthly Shared CFO Retainer for SMEs, and Fundraising/Debt Restructuring Mandates."
        canonicalPath="/pricing"
        faqData={FAQS}
      />
      <PageHero title="Institutional CFO leadership at a fraction of an in-house CFO’s cost">
        Start with our complimentary Business Finance Check-up & Report Card, then choose a retainer or milestone mandate tailored to your scale.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className={`${wrap} grid gap-6 lg:grid-cols-3`}>
          {ENGAGEMENT_MODELS.map((m, i) => (
            <Reveal key={m.id} delay={i * 60} className={`flex flex-col rounded-3xl p-8 ${m.featured ? 'bg-navy-900 text-white' : 'border border-navy-900/15'}`}>
              <h2 className="font-serif text-2xl">{m.name}</h2>
              <p className={`mt-2 text-sm ${m.featured ? 'text-slate-300' : 'text-slate-600'}`}>{m.tagline}</p>
              <div className="mt-6 font-serif text-4xl">{m.price}</div>
              <div className={`text-sm ${m.featured ? 'text-slate-400' : 'text-slate-500'}`}>{m.priceSub}</div>
              <p className={`mt-6 text-sm ${m.featured ? 'text-accent-300' : 'text-accent-600'}`}>Best for: {m.idealFor}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${m.featured ? 'text-accent-400' : 'text-accent-600'}`} />
                    <span className={m.featured ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to={m.ctaLink} className={`mt-8 rounded-full py-3.5 text-center text-sm font-semibold transition-[background-color,transform] duration-200 ease-out-strong hover:-translate-y-0.5 active:scale-[0.97] active:duration-100 ${m.featured ? 'bg-accent-500 text-white hover:bg-accent-600' : 'bg-navy-900 text-white hover:bg-navy-800'}`}>
                {m.ctaLabel}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand-100 py-20 sm:py-28">
        <div className={wrap}>
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-4xl">What is a Shared CFO, and how is it different from your existing CA?</h2>
            <p className="mt-4 text-slate-600">SMEs need forward-looking financial controls — not just year-end tax returns.</p>
          </Reveal>
          <Reveal className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-navy-900 text-navy-950">
                  <th className="py-4 pr-4 font-semibold"></th>
                  <th className="py-4 pr-4 font-medium text-slate-500">Traditional CA firm</th>
                  <th className="py-4 pr-4 font-medium text-slate-500">Full-time in-house CFO</th>
                  <th className="py-4 font-semibold text-accent-600">Finamoat Shared CFO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-900/10">
                {CFO_COMPARISON_TABLE.map((r) => (
                  <tr key={r.dimension} className="align-top">
                    <td className="py-4 pr-4 font-semibold text-navy-900">{r.dimension}</td>
                    <td className="py-4 pr-4 text-slate-600">{r.traditionalCA}</td>
                    <td className="py-4 pr-4 text-slate-600">{r.inHouseCFO}</td>
                    <td className="py-4 font-medium text-navy-950">{r.finamoatSharedCFO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
          <Reveal className="lg:col-span-4"><h2 className="font-serif text-4xl text-navy-950">Frequently asked questions</h2></Reveal>
          <Reveal delay={60} className="lg:col-span-8"><Accordion items={FAQS} /></Reveal>
        </div>
      </section>
    </>
  );
}
