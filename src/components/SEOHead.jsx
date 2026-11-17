import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../data/finamoatData';

export default function SEOHead({
  title,
  description,
  canonicalPath = '/',
  type = 'website',
  articleData = null,
  faqData = null,
}) {
  const fullTitle = title
    ? /finamoat/i.test(title)
      ? title
      : `${title} | Finamoat — Shared CFO Services Mumbai`
    : 'Finamoat | Shared CFO Services in Mumbai — We Steer Businesses Towards Orbital Growth';

  const metaDescription =
    description ||
    'Finamoat works as a Trusted Finance Partner & Shared CFO for startups and SME business owners in Mumbai & India. Led by CA Vikram Menda: 100% ROI growth, 50% lower finance cost, Daily MIS Dashboards, and 100% compliance.';

  const canonicalUrl = `https://finamoat.com${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', metaDescription);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', metaDescription);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', metaDescription);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);
  }, [fullTitle, metaDescription, canonicalUrl, type]);

  // LocalBusiness + FinancialService Schema for Mulund West, Mumbai
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'AccountingService', 'LocalBusiness'],
    name: 'Finamoat — Shared CFO Services',
    alternateName: 'Finamoat Services',
    description: SITE_CONFIG.positioning,
    url: 'https://finamoat.com',
    slogan: SITE_CONFIG.subTagline,
    telephone: '+91-8070600909',
    email: SITE_CONFIG.email,
    priceRange: '₹₹₹',
    founder: {
      '@type': 'Person',
      name: 'CA Vikram Menda',
      jobTitle: 'Principal Finance Mentor & Chartered Accountant',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '32, Kappeesh Mall, M.G. Road, Mulund West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400080',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.coordinates.lat,
      longitude: SITE_CONFIG.coordinates.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Thane' },
      { '@type': 'City', name: 'Navi Mumbai' },
      { '@type': 'Country', name: 'India' },
    ],
    sameAs: Object.values(SITE_CONFIG.socials),
  };

  const schemas = [localBusinessSchema];

  if (articleData) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleData.title,
      description: articleData.excerpt,
      datePublished: articleData.isoDate,
      author: {
        '@type': 'Person',
        name: 'CA Vikram Menda',
        jobTitle: 'Chartered Accountant & Principal Finance Mentor, Finamoat',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Finamoat — Shared CFO Services',
        url: 'https://finamoat.com',
      },
      mainEntityOfPage: canonicalUrl,
    });
  }

  if (faqData && faqData.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
