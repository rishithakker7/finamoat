import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PageHero, Reveal, wrap, btnPrimary, inputCls, waLink } from '../components/ui';
import { SITE_CONFIG } from '../data/finamoatData';

const MODES = [
  'In-Person (Mulund West Office)',
  'Video Call (Zoom / Google Meet)',
  'Phone / WhatsApp Call',
];

function Choice({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-2 text-sm transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.97] active:duration-100 ${
            value === o
              ? 'border-navy-900 bg-navy-900 text-white'
              : 'border-navy-900/20 text-slate-700 hover:border-navy-900'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const s = SITE_CONFIG;
  const [mode, setMode] = useState(MODES[0]);
  const [f, setF] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    honeypot: '',
  });
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <>
      <SEOHead
        title="Contact Us & Book a Consultation | Finamoat Mulund West, Mumbai"
        description="Reach Finamoat Services at M.G. Road, Mulund West, Mumbai 400080. Call +91 80706 00909 / +91 80706 00505 or book a Shared CFO consultation online."
        canonicalPath="/contact"
      />
      <PageHero title="Contact us & schedule your consultation">
        Speak directly with CA Vikram Menda’s Shared CFO team by phone or WhatsApp, or send us a message below.
      </PageHero>

      <section className="py-12 sm:py-20 lg:py-24">
        <div className={`${wrap} grid gap-12 sm:gap-16 lg:grid-cols-12`}>
          <Reveal className="space-y-8 sm:space-y-10 lg:col-span-5">
            <div>
              <h2 className="font-serif text-xl text-navy-950">{s.addresses.primary.label}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                {s.addresses.primary.line1}
                <br />
                {s.addresses.primary.line2}
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-navy-950">Phone & WhatsApp</h2>
              <div className="mt-2 space-y-1">
                {s.phones.map((p) => (
                  <a
                    key={p.raw}
                    href={`tel:${p.raw}`}
                    className="flex items-center justify-between border-b border-navy-900/10 py-2.5 text-navy-950 hover:text-accent-600"
                  >
                    <span className="font-sans text-base font-medium tabular-nums tracking-normal">
                      {p.display}
                    </span>
                    <span className="text-sm text-slate-500">{p.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-xl text-navy-950">Email</h2>
              <a
                href={`mailto:${s.email}`}
                className="u-link mt-2 inline-block text-navy-950"
              >
                {s.email}
              </a>
            </div>
            <a
              href={waLink(
                s.whatsappNumber,
                'Hi Finamoat, I would like to schedule a consultation with your Shared CFO team.'
              )}
              target="_blank"
              rel="noreferrer"
              className={btnPrimary + ' w-full sm:w-auto !bg-emerald-700 hover:!bg-emerald-600'}
            >
              <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
              WhatsApp Us
            </a>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-7">
            {done ? (
              <div className="rise py-16">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                <h2 className="mt-5 font-serif text-3xl text-navy-950">
                  Consultation request logged
                </h2>
                <p className="mt-3 max-w-md text-slate-600">
                  Thank you, <strong>{f.name}</strong>. We have noted your preferred meeting format ({mode}).
                </p>
                <a
                  href={waLink(
                    s.whatsappNumber,
                    `Hi Finamoat, I am ${f.name}. I requested a ${mode} consultation. Message: ${f.message}`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary + ' mt-8 !bg-emerald-700'}
                >
                  <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!f.honeypot) setDone(true);
                }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl text-navy-950">Send us a message</h2>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  value={f.honeypot}
                  onChange={set('honeypot')}
                />
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-navy-900">Meeting format</p>
                  <Choice options={MODES} value={mode} onChange={setMode} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full name *"
                    className={inputCls}
                    value={f.name}
                    onChange={set('name')}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email *"
                    className={inputCls}
                    value={f.email}
                    onChange={set('email')}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    className={inputCls}
                    value={f.phone}
                    onChange={set('phone')}
                  />
                  <input
                    type="date"
                    className={inputCls}
                    value={f.date}
                    onChange={set('date')}
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your business, current challenges, or which Shared CFO service you are exploring *"
                  className={inputCls}
                  value={f.message}
                  onChange={set('message')}
                />
                <button className={btnPrimary + ' w-full sm:w-auto'}>
                  Submit & request consultation
                </button>
              </form>
            )}
          </Reveal>
        </div>
        {s.mapEmbedUrl && (
          <div className={`${wrap} mt-12 sm:mt-20`}>
            <iframe
              title="Finamoat office on Google Maps"
              src={s.mapEmbedUrl}
              loading="lazy"
              className="h-64 sm:h-80 w-full rounded-3xl border-0 [@media(hover:hover)_and_(pointer:fine)]:grayscale [@media(hover:hover)_and_(pointer:fine)]:hover:grayscale-0 transition-[filter] duration-300"
            />
          </div>
        )}
      </section>
    </>
  );
}
