import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';

export const wrap = 'max-w-6xl mx-auto px-5 sm:px-8';
export const btnPrimary =
  'group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-navy-800 hover:-translate-y-0.5 active:scale-95';
export const btnGold =
  'group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-accent-600 hover:-translate-y-0.5 active:scale-95';
export const btnGhost =
  'group inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/20 px-6 py-3.5 text-sm font-semibold text-navy-900 transition duration-300 hover:border-navy-900 hover:-translate-y-0.5 active:scale-95';
export const inputCls =
  'w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-navy-900 focus:ring-4 focus:ring-accent-400/20';

/* Fades + slides children in once they scroll into view */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

/* "100%" -> counts 0 -> 100 and keeps the % */
export function CountUp({ value, duration = 1400 }) {
  const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : 0;
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!m) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {m[1]}
      {Math.round(n)}
      {m[3]}
    </span>
  );
}

/* Plain page header used by every inner page */
export function PageHero({ title, children }) {
  return (
    <section className="border-b border-navy-900/10">
      <div className={`${wrap} pt-16 pb-14 sm:pt-24 sm:pb-20`}>
        <h1 className="rise font-serif text-4xl sm:text-6xl leading-[1.05] tracking-tight text-navy-950 max-w-4xl">{title}</h1>
        {children && (
          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-600" style={{ animationDelay: '150ms' }}>
            {children}
          </p>
        )}
      </div>
    </section>
  );
}

export function More({ to, href, children }) {
  const cls = 'group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900';
  const inner = (
    <>
      <span className="u-link">{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link to={to} className={cls}>{inner}</Link>
  );
}

/* Smooth open/close accordion */
export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl text-navy-950">{it.question}</span>
              <Plus className={`h-5 w-5 flex-shrink-0 text-accent-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-relaxed text-slate-600">{it.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const waLink = (number, text) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
