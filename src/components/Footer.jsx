import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { wrap } from './ui';
import { SITE_CONFIG, SERVICES } from '../data/finamoatData';

const SOCIAL_ICONS = [
  { name: 'LinkedIn', href: SITE_CONFIG.socials.linkedin, icon: '/icons/linkedin.svg' },
  { name: 'Instagram', href: SITE_CONFIG.socials.instagram, icon: '/icons/instagram.svg' },
  { name: 'YouTube', href: SITE_CONFIG.socials.youtube, icon: '/icons/youtube.svg' },
  { name: 'Facebook', href: SITE_CONFIG.socials.facebook, icon: '/icons/facebook.svg' },
  { name: 'X', href: SITE_CONFIG.socials.twitter, icon: '/icons/x.svg' },
];

export default function Footer() {
  const s = SITE_CONFIG;
  const col = 'mb-4 text-sm font-semibold text-white';
  const link = 'u-link hover:text-white';
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className={`${wrap} py-20`}>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <BrandLogo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{s.positioning}</p>
          </div>

          <div className="md:col-span-2">
            <div className={col}>Explore</div>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/about', 'About & CA Team'],
                ['/pricing', 'Engagement Models'],
                ['/insights', 'Insights & Case Studies'],
                ['/faq', 'Shared CFO vs. CA FAQ'],
                ['/contact', 'Contact Us'],
                ['/subscribe', 'Subscribe'],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className={link}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className={col}>Services</div>
            <ul className="max-h-48 space-y-2.5 overflow-y-auto pr-2 text-sm">
              {SERVICES.map((x) => (
                <li key={x.id}>
                  <Link to={`/services#${x.slug}`} className={link}>
                    {x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className={col}>Reach us</div>
            <address className="space-y-3 text-sm not-italic leading-relaxed">
              <p>{s.addresses.primary.short}</p>
              {s.phones.map((p) => (
                <p key={p.raw}>
                  <a href={`tel:${p.raw}`} className="u-link text-white tabular-nums">
                    {p.display}
                  </a>{' '}
                  <span className="text-slate-500">{p.label}</span>
                </p>
              ))}
              <p>
                <a href={`mailto:${s.email}`} className="u-link text-white">
                  {s.email}
                </a>
              </p>
              <p>
                <a
                  href={`https://www.google.com/maps?ll=${s.coordinates.lat},${s.coordinates.lng}&z=15`}
                  target="_blank"
                  rel="noreferrer"
                  className={link}
                >
                  Open in Google Maps
                </a>
              </p>
            </address>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_ICONS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 p-1.5 transition hover:scale-105 hover:bg-white/15"
                >
                  <img src={item.icon} alt={item.name} className="h-5 w-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Finamoat Services. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className={link}>
              Privacy Policy
            </Link>
            <Link to="/check-up" className={link}>
              Free Finance Check-up
            </Link>
            <span className="inline-flex items-center gap-1.5 text-xs text-inherit opacity-80">
              <span>Developed by</span>
              <a
                href="https://kantadvertising.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-wider underline underline-offset-4 decoration-current transition-all hover:text-white hover:opacity-100"
              >
                KANT
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
