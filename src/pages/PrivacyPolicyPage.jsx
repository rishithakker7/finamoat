import React from 'react';
import SEOHead from '../components/SEOHead';
import { PageHero, wrap } from '../components/ui';
import { SITE_CONFIG } from '../data/finamoatData';

const H = ({ children }) => <h2 className="pt-6 font-serif text-2xl text-navy-950">{children}</h2>;

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy & Client Confidentiality | Finamoat Services"
        description="Finamoat Services respects your privacy. Read our client confidentiality, financial data protection, and privacy policy."
        canonicalPath="/privacy-policy"
      />
      <PageHero title="Privacy policy & advisory confidentiality">We respect your privacy. Your information is safe and will never be shared.</PageHero>
      <section className="py-16">
        <div className={`${wrap} max-w-3xl space-y-4 leading-[1.8] text-slate-700`}>
          <H>1. Commitment to financial confidentiality</H>
          <p>At <strong>Finamoat Services</strong> ({SITE_CONFIG.addresses.primary.short}), we operate as a Trusted Finance Partner and Shared CFO for startups, SMEs, and individual tax clients. All financial statements, MIS data, valuation models, and personal networth records shared with our Chartered Accountants and advisory team are treated with strict professional confidentiality.</p>
          <H>2. Information we collect</H>
          <p>When you apply for our <strong>Free Business Finance Check-up</strong>, subscribe to our <strong>Business Learning Articles</strong>, or submit a contact inquiry, we collect only the details you voluntarily provide: your Name, Email Address, Mobile/WhatsApp Number, City, and Business Context.</p>
          <H>3. How we use your information</H>
          <ul className="list-disc space-y-2 pl-5">
            <li>To conduct your requested Business Finance Check-up and prepare your Financial Report Card.</li>
            <li>To deliver CA Vikram Menda’s Best Business Practices articles via Email or WhatsApp when requested.</li>
            <li>To schedule and coordinate Shared CFO, fundraising, or tax advisory consultations.</li>
          </ul>
          <H>4. Zero third-party selling</H>
          <p>We never sell, rent, or trade your personal or corporate contact details to third-party marketers or unauthorized entities.</p>
          <H>5. Contact our privacy & compliance desk</H>
          <p>For any questions regarding this Privacy Policy or to update your communication preferences, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="u-link font-semibold text-navy-950">{SITE_CONFIG.email}</a> or call <span className="font-mono">+91 80 70 60 09 09</span>.</p>
        </div>
      </section>
    </>
  );
}
