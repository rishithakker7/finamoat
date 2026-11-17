import React from 'react';

/* dark  -> full lockup (logo.png, white background, blends into the page)
   light -> icon + white wordmark, for dark backgrounds like the footer */
export default function BrandLogo({ variant = 'dark', className = '' }) {
  if (variant === 'light') {
    return (
      <div className={`group inline-flex select-none items-center gap-3 ${className}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white transition-transform duration-200 ease-out-strong group-hover:-rotate-6">
          <img src="/icon.png" alt="" className="h-9 w-9 object-contain" />
        </span>
        <span className="leading-none">
          <span className="block font-serif text-2xl font-bold tracking-wide text-white">FINAMOAT</span>
          <span className="mt-1 block text-[11px] tracking-[0.18em] text-slate-400">SHARED CFO SERVICES</span>
        </span>
      </div>
    );
  }
  return (
    <img
      src="/logo.png"
      alt="Finamoat — Shared CFO Services"
      className={`h-14 w-auto select-none mix-blend-multiply transition-transform duration-200 ease-out-strong hover:scale-[1.03] sm:h-16 ${className}`}
    />
  );
}
