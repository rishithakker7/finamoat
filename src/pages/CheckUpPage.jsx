import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, wrap, btnGold, inputCls, waLink } from '../components/ui';
import { SITE_CONFIG } from '../data/finamoatData';

const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'mis',
    question: '1. Do you receive a structured Daily or Monthly MIS Dashboard tracking Topline, Bottomline & Cashflow?',
    options: [
      { label: 'No — we mostly rely on tally/bank balance or year-end CA statements', score: 5 },
      { label: 'Partial — we get irregular Excel sheets when we ask for them', score: 12 },
      { label: 'Yes — we track structured monthly & daily KPIs', score: 20 },
    ],
  },
  {
    id: 'statutory',
    question: '2. How smooth are your monthly GST (20th) and TDS (7th) statutory compliance payments?',
    options: [
      { label: 'Stressful — collected GST/TDS often gets absorbed in working capital', score: 5 },
      { label: 'Manageable — paid on time most months, but tight on cashflow', score: 12 },
      { label: 'Ring-fenced — we maintain separate dedicated accounts for GST & TDS', score: 20 },
    ],
  },
  {
    id: 'dependency',
    question: '3. Can your business run smoothly for 30 days without the promoter’s daily operational involvement?',
    options: [
      { label: 'No — almost every major deal and decision depends on the promoter', score: 5 },
      { label: 'Somewhat — department heads exist, but SOPs and KRAs are informal', score: 12 },
      { label: 'Yes — we operate on a Promoter-CEO model with documented SOPs', score: 20 },
    ],
  },
  {
    id: 'wealth',
    question: '4. As a business owner, do you withdraw a fixed monthly salary & build passive income outside the business?',
    options: [
      { label: 'No — I often reinvest personal funds or take loans to plug business deficits', score: 5 },
      { label: 'Ad-hoc — I withdraw money when needed, without a structured wealth plan', score: 12 },
      { label: 'Yes — I withdraw a fixed salary and review personal networth monthly', score: 20 },
    ],
  },
  {
    id: 'capital',
    question: '5. Are you confident your borrowing cost (loan interest) and valuation readiness are optimized?',
    options: [
      { label: 'High finance costs / unable to secure cheaper long-term bank or equity capital', score: 5 },
      { label: 'Standard bank rates, haven’t restructured or benchmarked recently', score: 12 },
      { label: 'Optimized cost of capital with strong credit rating & investor-ready books', score: 20 },
    ],
  },
];

export default function CheckUpPage({ isSubscribeMode = false }) {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';
  const [answers, setAnswers] = useState({});
  const [form, setForm] = useState({
    name: '', email: '', city: 'Mumbai', phone: '', preferredDate: '',
    notes: preselected ? `Interested in: ${preselected}` : '', honeypot: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const total = Object.values(answers).reduce((a, v) => a + v, 0);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const band =
    total <= 45
      ? { label: 'High priority for Shared CFO intervention', text: 'Your business shows classic signs of blocked working capital, promoter overload, and preventable finance/compliance leakage. A Shared CFO framework can unlock immediate cashflow and cut finance costs by up to 50%.' }
      : total <= 75
      ? { label: 'Growth stage — ready for 10-point MIS & systems', text: 'You have foundational operations in place, but transitioning to Daily MIS Scorecards, GST/TDS ring-fencing, and the Promoter-CEO model will accelerate your annual growth trajectory.' }
      : { label: 'Strong foundation — ready for orbital scale & M&A', text: 'Your financial discipline is strong. Our Capital Allocation, Valuation, and PE/VC Fundraising practice can help you scale nationally or optimize promoter wealth.' };

  const submit = (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title={isSubscribeMode ? 'Subscribe for Latest Business Learning Articles | Finamoat' : 'Apply Now: FREE Business Finance Check-up & Report Card | Finamoat'}
        description="Apply for Finamoat’s Free Business Finance Check-up. Our experts conduct an in-depth audit of your existing systems and deliver an exhaustive Report Card of tools & techniques for better financial management."
        canonicalPath={isSubscribeMode ? '/subscribe' : '/check-up'}
      />
      <PageHero title={isSubscribeMode ? 'Subscribe for the latest articles by CA Vikram Menda' : 'Free business finance check-up & exhaustive report card'}>
        {isSubscribeMode
          ? 'Actionable articles on Cashflow Management, MIS Dashboards, Business Constitutions, and Promoter Wealth, delivered to your inbox and WhatsApp.'
          : 'Our experts conduct an in-depth check-up of the existing systems in your business. You get an exhaustive “Report Card” of specific tools & techniques required for better financial management.'}
      </PageHero>

      <section className="py-12 sm:py-20 lg:py-24">
        <div className={`${wrap} grid gap-12 sm:gap-16 lg:grid-cols-12`}>
          {/* Form first on mobile */}
          <Reveal className="lg:order-2 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              {submitted ? (
                <div className="rise py-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  <h2 className="mt-5 font-serif text-3xl text-navy-950">Application confirmed</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    Thank you, <strong>{form.name}</strong> from {form.city}. CA Vikram Menda’s advisory desk has received your request and will contact you on <span className="tabular-nums font-medium">{form.phone}</span>.
                  </p>
                  {answered > 0 && <p className="mt-3 text-sm text-accent-600">Preliminary health score attached: {total}/100</p>}
                  <a
                    href={waLink(SITE_CONFIG.whatsappNumber, `Hi Finamoat, I am ${form.name} (${form.city}). I just applied for the Free Business Finance Check-up on your website.${answered > 0 ? ` My preliminary health score is ${total}/100.` : ''}`)}
                    target="_blank" rel="noreferrer"
                    className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out-strong hover:bg-emerald-600 active:scale-[0.97] active:duration-100"
                  >
                    <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4 rounded-3xl bg-sand-100 p-6 sm:p-8">
                  <h2 className="font-serif text-2xl text-navy-950">{isSubscribeMode ? 'Subscribe for latest articles' : 'Book your free finance check-up'}</h2>
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={form.honeypot} onChange={set('honeypot')} />
                  <input required placeholder="Full name *" className={inputCls} value={form.name} onChange={set('name')} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required type="email" placeholder="Email *" className={inputCls} value={form.email} onChange={set('email')} />
                    <input required placeholder="City *" className={inputCls} value={form.city} onChange={set('city')} />
                    <input required type="tel" placeholder="Contact / WhatsApp *" className={inputCls} value={form.phone} onChange={set('phone')} />
                    <input type="date" className={inputCls} value={form.preferredDate} onChange={set('preferredDate')} />
                  </div>
                  {!isSubscribeMode && <input placeholder="Key focus area (cashflow, MIS, fundraising…)" className={inputCls} value={form.notes} onChange={set('notes')} />}
                  <button className={btnGold + ' w-full'}>
                    {isSubscribeMode ? 'Subscribe now' : 'Submit & request free check-up'} <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-slate-500">We respect your privacy. Your financial information is 100% confidential.</p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:order-1 lg:col-span-7">
            <div className="flex items-baseline justify-between border-b border-navy-900/10 pb-4">
              <div>
                <h2 className="font-serif text-2xl text-navy-950 sm:text-3xl">Preview your finance health score</h2>
                <p className="mt-1 text-sm text-slate-500">Optional · about 45 seconds</p>
              </div>
              <span className="font-mono text-sm text-slate-500">{answered}/5</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-navy-900/10">
              <div
                className="h-full w-full origin-left rounded-full bg-accent-500 transition-transform duration-300 ease-out-strong"
                style={{ transform: `scaleX(${answered / 5})` }}
              />
            </div>

            <div className="mt-10 space-y-10">
              {DIAGNOSTIC_QUESTIONS.map((q) => (
                <fieldset key={q.id}>
                  <legend className="font-serif text-lg leading-snug text-navy-950">{q.question}</legend>
                  <div className="mt-4 space-y-2">
                    {q.options.map((o) => {
                      const on = answers[q.id] === o.score;
                      return (
                        <button
                          key={o.label} type="button"
                          onClick={() => setAnswers({ ...answers, [q.id]: o.score })}
                          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98] active:duration-100 ${on ? 'border-navy-900 bg-navy-900 text-white' : 'border-navy-900/15 text-slate-700 hover:border-navy-900/50'}`}
                        >
                          <span className={`h-4 w-4 flex-shrink-0 rounded-full border-2 transition-[background-color,border-color] duration-150 ${on ? 'border-accent-400 bg-accent-400' : 'border-slate-300'}`} />
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            {answered > 0 && (
              <div className="rise mt-12 rounded-3xl bg-navy-950 p-7 text-white">
                <div className="font-serif text-5xl text-accent-300">{total}<span className="text-2xl text-slate-500"> / 100</span></div>
                <div className="mt-3 font-serif text-xl">{band.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{band.text}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
