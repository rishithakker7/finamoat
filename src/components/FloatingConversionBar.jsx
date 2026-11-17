import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/finamoatData';
import { waLink } from './ui';

/* One quiet WhatsApp button, appears after you scroll a bit. */
export default function FloatingConversionBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <a
      href={waLink(SITE_CONFIG.whatsappNumber, 'Hi Finamoat, I want to inquire about your Shared CFO Services and Free Business Finance Check-up.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="WhatsApp +91 80706 00909"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-navy-900/10 transition-all duration-500 hover:scale-105 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
}
