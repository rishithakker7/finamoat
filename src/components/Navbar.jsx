import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { wrap } from './ui';
import { SERVICES, CASE_STUDIES, BLOG_ARTICLES } from '../data/finamoatData';

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((p) => !p);
      } else if (e.key === 'Escape') setSearchOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
    else setQ('');
  }, [searchOpen]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const has = (...t) => t.some((x) => (x || '').toLowerCase().includes(s));
    return [
      ...SERVICES.filter((x) => has(x.title, x.verbatimDescription, x.category)).map((x) => ({
        k: 'Service',
        t: x.title,
        to: `/services#${x.slug}`,
      })),
      ...CASE_STUDIES.filter((x) => has(x.title, x.client, x.summary)).map((x) => ({
        k: 'Case study',
        t: x.title,
        to: `/case-studies/${x.slug}`,
      })),
      ...BLOG_ARTICLES.filter((x) => has(x.title, x.excerpt)).map((x) => ({
        k: 'Article',
        t: x.title,
        to: `/insights/${x.slug}`,
      })),
    ].slice(0, 8);
  }, [q]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-navy-900/10 bg-sand-50/90 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent-500 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className={`${wrap} flex h-20 sm:h-24 items-center justify-between`}>
        <Link to="/" aria-label="Finamoat home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `u-link text-sm font-medium ${
                  isActive
                    ? 'text-navy-950 [background-size:100%_1px]'
                    : 'text-slate-600 hover:text-navy-950'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="text-slate-500 transition hover:text-navy-950"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/check-up"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Free Check-up
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            className="p-2"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="-mr-2 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <nav className="overflow-hidden">
          <div className={`${wrap} flex flex-col pb-6`}>
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2.5 font-serif text-2xl text-navy-950"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/check-up"
              className="mt-4 rounded-full bg-navy-900 py-3.5 text-center text-sm font-semibold text-white"
            >
              Free Business Finance Check-up
            </Link>
          </div>
        </nav>
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-navy-950/40 px-5 pt-24 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="rise w-full max-w-2xl overflow-hidden rounded-2xl bg-sand-50 shadow-2xl"
            style={{ animationDuration: '0.35s' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-navy-900/10 px-5">
              <Search className="h-4 w-4 flex-shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && results[0] && navigate(results[0].to)}
                placeholder="Search services, case studies, articles"
                className="w-full bg-transparent py-5 text-base outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-navy-900/10 hover:text-navy-950"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {q && (
              <ul className="max-h-80 overflow-y-auto py-2">
                {results.map((r, i) => (
                  <li key={i}>
                    <Link
                      to={r.to}
                      className="flex items-baseline justify-between gap-4 px-5 py-3 transition hover:bg-sand-100"
                    >
                      <span className="text-navy-950">{r.t}</span>
                      <span className="flex-shrink-0 text-xs text-slate-400">{r.k}</span>
                    </Link>
                  </li>
                ))}
                {results.length === 0 && (
                  <li className="px-5 py-6 text-sm text-slate-500">
                    Nothing found for “{q}”.
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
