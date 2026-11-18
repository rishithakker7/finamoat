import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Reveal, wrap, btnGold, inputCls, sendEnquiryEmail } from '../components/ui';
import { BLOG_ARTICLES, AUTHOR_SIGNATURE, SITE_CONFIG } from '../data/finamoatData';

function Block({ b }) {
  switch (b.type) {
    case 'lead':
      return <p className="font-serif text-2xl leading-relaxed text-navy-950">{b.text}</p>;
    case 'h3':
      return <h2 className="pt-6 font-serif text-2xl text-navy-950 sm:text-3xl">{b.text}</h2>;
    case 'quote':
      return <blockquote className="border-l-2 border-accent-500 pl-6 font-serif text-xl italic leading-relaxed text-navy-950">“{b.text}”</blockquote>;
    case 'ul':
      return (
        <ul className="space-y-3 pl-1">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4"><span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" /><span>{it}</span></li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4"><span className="w-5 flex-shrink-0 font-serif text-accent-600">{i + 1}.</span><span>{it}</span></li>
          ))}
        </ol>
      );
    default:
      return <p>{b.text}</p>;
  }
}

export default function ArticleDetailPage({ forcedSlug = null }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug || a.id === slug);

  const [form, setForm] = useState({ name: '', email: '', comment: '', honeypot: '' });
  const [local, setLocal] = useState([]);

  if (!article) return <Navigate to="/insights" replace />;

  const comments = [...(article.comments || []), ...local];
  const related = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const shareUrl = `https://finamoat.com/insights/${article.slug}`;

  const submit = (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    setLocal([...local, { author: form.name, date: 'Just now', text: form.comment, isNew: true }]);
    sendEnquiryEmail(SITE_CONFIG.email, `New Blog Comment on "${article.title}" — ${form.name}`, {
      'Enquiry Type': 'Article Comment',
      Article: article.title,
      Name: form.name,
      Email: form.email,
      Comment: form.comment,
    });
    setForm({ name: '', email: '', comment: '', honeypot: '' });
  };

  return (
    <>
      <SEOHead title={`${article.title} — By CA Vikram Menda`} description={article.excerpt} canonicalPath={`/insights/${article.slug}`} type="article" articleData={article} />

      <header className={`${wrap} max-w-3xl pt-14 pb-10 sm:pt-20`}>
        <Link to="/insights" className="rise inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-4 py-2 text-xs font-semibold text-navy-900 transition-[background-color,border-color,transform] duration-200 ease-out-strong hover:border-navy-900 hover:-translate-y-0.5 active:scale-[0.97] active:duration-100">
          <ArrowLeft className="h-3.5 w-3.5" /> All insights
        </Link>
        <p className="rise mt-8 text-sm text-slate-500" style={{ animationDelay: '60ms' }}>{article.date} · {article.readTime} · {article.author}</p>
        <h1 className="rise mt-3 font-serif text-4xl leading-[1.1] tracking-tight text-navy-950 sm:text-6xl" style={{ animationDelay: '120ms' }}>{article.title}</h1>
        {article.subtitle && <p className="rise mt-6 text-xl leading-relaxed text-slate-600" style={{ animationDelay: '180ms' }}>{article.subtitle}</p>}
      </header>

      <article className={`${wrap} max-w-3xl pb-20`}>
        {(article.isHistorical && article.historicalNote) && <p className="mb-8 rounded-2xl bg-sand-100 p-5 text-sm text-slate-700">{article.historicalNote}</p>}
        {article.consolidatedNote && <p className="mb-8 rounded-2xl bg-sand-100 p-5 text-sm text-slate-700">{article.consolidatedNote}</p>}

        {article.keyTakeaways?.length > 0 && (
          <Reveal className="mb-12 rounded-3xl bg-sand-100 p-7">
            <h2 className="font-serif text-xl text-navy-950">Key takeaways</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {article.keyTakeaways.map((k, i) => (<li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />{k}</li>))}
            </ul>
          </Reveal>
        )}

        {article.videoEmbed && (
          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-navy-950">
            <iframe
              title={article.title}
              src={article.videoEmbed}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        <div className="space-y-6 text-[18px] leading-[1.85] text-slate-800">
          {article.blocks.map((b, i) => (<Block key={i} b={b} />))}
        </div>

        <Reveal className="mt-14 border-t border-navy-900/15 pt-8">
          <p className="font-serif text-lg italic leading-relaxed text-navy-900">{AUTHOR_SIGNATURE.line1}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{AUTHOR_SIGNATURE.line2}</p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold text-navy-900">
            <span className="text-slate-500 font-normal">Share:</span>
            <a className="u-link" target="_blank" rel="noreferrer" href={`https://wa.me/?text=${encodeURIComponent(`${article.title} by CA Vikram Menda (Finamoat): ${shareUrl}`)}`}>WhatsApp</a>
            <a className="u-link" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}>LinkedIn</a>
            <a className="u-link" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${article.title} by CA Vikram Menda`)}&url=${encodeURIComponent(shareUrl)}`}>X</a>
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col gap-5 rounded-3xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <h3 className="font-serif text-2xl">Free business finance check-up</h3>
            <p className="mt-2 text-sm text-slate-300">Get an exhaustive “Report Card” of the tools & MIS dashboards your business needs.</p>
          </div>
          <Link to="/check-up" className={btnGold + ' flex-shrink-0'}>Apply now</Link>
        </Reveal>

        <section className="mt-20">
          <h2 className="font-serif text-2xl text-navy-950">Comments ({comments.length})</h2>
          {comments.length > 0 && (
            <div className="mt-6 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {comments.map((c, i) => (
                <div key={i} className={`py-5 ${c.isNew ? 'rise' : ''}`}>
                  <div className="flex justify-between text-sm"><strong className="text-navy-900">{c.author}</strong><span className="text-slate-400">{c.date}</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
                </div>
              ))}
            </div>
          )}
          <form onSubmit={submit} className="mt-8 space-y-3">
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} />
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Your name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="Your email (not published)" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <textarea required rows={3} placeholder="Share your thoughts or ask CA Vikram Menda a question" className={inputCls} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
            <button className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out-strong hover:bg-navy-800 active:scale-[0.97] active:duration-100">Post comment</button>
          </form>
        </section>

        <section className="mt-20">
          <h2 className="mb-6 font-serif text-2xl text-navy-950">More by CA Vikram Menda</h2>
          <ul className="border-t border-navy-900/10">
            {related.map((a) => (
              <li key={a.id} className="border-b border-navy-900/10">
                <Link to={`/insights/${a.slug}`} className="group flex items-baseline justify-between gap-6 py-5 hover-row">
                  <span className="font-serif text-lg text-navy-950">{a.title}</span>
                  <span className="flex-shrink-0 text-sm text-slate-400">{a.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
