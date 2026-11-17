import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, More, wrap, inputCls, waLink } from '../components/ui';
import { BLOG_ARTICLES, CASE_STUDIES, TESTIMONIALS, SITE_CONFIG } from '../data/finamoatData';

const TABS = ['All', 'Case Studies', 'Best Business Practices', 'Archive'];

export default function InsightsPage({ initialTab = 'All' }) {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState(pathname === '/case-studies' ? 'Case Studies' : initialTab);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (pathname === '/case-studies') {
      setFilter('Case Studies');
    }
  }, [pathname]);

  const q = query.trim().toLowerCase();

  const articles = BLOG_ARTICLES.filter((a) => {
    const hit = !q || [a.title, a.excerpt, a.subtitle].some((t) => (t || '').toLowerCase().includes(q));
    if (!hit) return false;
    if (filter === 'Archive') return a.isHistorical;
    if (filter === 'Best Business Practices') return !a.isHistorical;
    return true;
  });

  const cases = CASE_STUDIES.filter((cs) => {
    if (!q) return true;
    return [cs.title, cs.client, cs.industry, cs.summary, cs.challenge, cs.solution, cs.result].some((t) =>
      (t || '').toLowerCase().includes(q)
    );
  });

  return (
    <>
      <SEOHead
        title="Insights & Case Studies | Shared CFO Turnarounds & Best Business Practices"
        description="Explore Finamoat’s client case studies and CA Vikram Menda’s articles on Business Dashboards, Role of Shared CFO, Cashflow Management, and Startup Fundraising."
        canonicalPath="/insights"
      />
      <PageHero title="Case studies & best business practices">
        Real Shared CFO client turnarounds alongside financial management practices penned by CA Vikram Menda for Indian startup founders and SME promoters.
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className={wrap}>
          <div className="flex flex-col gap-5 border-b border-navy-900/10 md:flex-row md:items-end md:justify-between">
            <div className="no-scrollbar flex gap-6 overflow-x-auto">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium -mb-px transition-[color,border-color] duration-150 ${
                    filter === t
                      ? 'border-navy-900 text-navy-950'
                      : 'border-transparent text-slate-500 hover:text-navy-900'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative w-full pb-3 md:w-72">
              <Search className="absolute left-3.5 top-[calc(50%-6px)] h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search case studies & articles"
                className={inputCls + ' pl-10'}
              />
            </div>
          </div>

          {/* Case Studies Section */}
          {(filter === 'All' || filter === 'Case Studies') && (
            <div className="mt-12 space-y-16">
              {filter === 'All' && (
                <h2 className="font-serif text-3xl text-navy-950 sm:text-4xl">Client case studies</h2>
              )}
              <div className="space-y-16">
                {cases.map((cs) => (
                  <Reveal
                    key={cs.id}
                    disabled={q.length > 0}
                    className="grid gap-8 border-t border-navy-900/15 pt-8 lg:grid-cols-12 lg:gap-14"
                  >
                    <div className="lg:col-span-4">
                      <div className="font-serif text-5xl sm:text-6xl text-accent-600">
                        {cs.headlineMetric}
                      </div>
                      <p className="mt-2 text-sm text-slate-500">{cs.headlineMetricLabel}</p>
                      <dl className="mt-6 grid grid-cols-2 gap-4">
                        {cs.metrics.map((m) => (
                          <div key={m.label}>
                            <dt className="text-xs text-slate-500">{m.label}</dt>
                            <dd className="mt-0.5 text-sm font-semibold text-navy-950">{m.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-sm text-slate-500">
                        {cs.industry} · {cs.client}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl sm:text-3xl leading-snug text-navy-950">
                        <Link to={`/case-studies/${cs.slug}`} className="u-link">
                          {cs.title}
                        </Link>
                      </h3>
                      <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {[
                          ['The challenge', cs.challenge],
                          ['What we did', cs.solution],
                          ['The result', cs.result],
                        ].map(([h, t]) => (
                          <div key={h}>
                            <h4 className="text-sm font-semibold text-navy-900">{h}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <More to={`/case-studies/${cs.slug}`}>Read the full case study</More>
                      </div>
                    </div>
                  </Reveal>
                ))}
                {cases.length === 0 && (
                  <p className="py-8 text-slate-500">No case studies match that search.</p>
                )}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {filter !== 'Case Studies' && (
            <div className={filter === 'All' ? 'mt-24' : 'mt-8'}>
              {filter === 'All' && (
                <h2 className="mb-4 font-serif text-3xl text-navy-950 sm:text-4xl">
                  Best business practices by CA Vikram Menda
                </h2>
              )}
              <ul>
                {articles.map((a) => (
                  <Reveal as="li" key={a.id} disabled={q.length > 0} className="border-b border-navy-900/10">
                    <Link
                      to={`/insights/${a.slug}`}
                      className="group grid gap-3 py-8 hover-row md:grid-cols-12 md:gap-10"
                    >
                      <div className="md:col-span-3 text-sm text-slate-500">
                        <div>{a.date}</div>
                        <div>
                          {a.readTime}
                          {a.videoEmbed ? ' · includes video' : ''}
                        </div>
                        {a.isHistorical && <div className="mt-1 text-accent-600">Archive (2020–21)</div>}
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-serif text-2xl text-navy-950 sm:text-3xl">
                          <span className="u-link">{a.title}</span>
                        </h3>
                        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{a.excerpt}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
                {articles.length === 0 && (
                  <p className="py-12 text-slate-500">No articles match that search.</p>
                )}
              </ul>
            </div>
          )}

          {/* WhatsApp Learning CTA */}
          <div className="mt-14 sm:mt-20 flex flex-col items-stretch justify-between gap-5 rounded-3xl bg-sand-100 p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="font-serif text-lg sm:text-xl text-navy-950">
              Get free articles on WhatsApp — send “Learning” to {SITE_CONFIG.phones[0].display}.
            </p>
            <a
              href={waLink(SITE_CONFIG.whatsappNumber, 'Learning')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out-strong hover:bg-navy-800 active:scale-[0.97] active:duration-100"
            >
              <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
              Send “Learning”
            </a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-sand-100 py-14 sm:py-20 lg:py-28">
        <div className={wrap}>
          <Reveal className="mb-8 sm:mb-12">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">What our clients say</h2>
          </Reveal>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={i * 60}>
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
