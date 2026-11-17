import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingConversionBar from './components/FloatingConversionBar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import InsightsPage from './pages/InsightsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CheckUpPage from './pages/CheckUpPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-navy-900">
      <ScrollToTop />
      <Navbar />
      <main key={pathname} className="page-in flex-1">
        <Routes>
          {/* Modern Clean Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<PricingPage />} />
          <Route path="/case-studies" element={<InsightsPage initialTab="Case Studies" />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<ArticleDetailPage />} />
          <Route path="/check-up" element={<CheckUpPage isSubscribeMode={false} />} />
          <Route path="/subscribe" element={<CheckUpPage isSubscribeMode={true} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Legacy WordPress Sitemap Route Redirects (100% SEO Preservation) */}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/business-learnings" element={<Navigate to="/insights" replace />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/apply-now" element={<Navigate to="/check-up" replace />} />
          <Route path="/1880-2" element={<Navigate to="/subscribe" replace />} />
          <Route path="/category/case-studies" element={<Navigate to="/case-studies" replace />} />
          <Route path="/category/best-business-practices" element={<Navigate to="/insights" replace />} />
          <Route path="/category/best-business-practices/page/2" element={<Navigate to="/insights" replace />} />
          <Route path="/author/finamoat" element={<Navigate to="/about#leadership" replace />} />

          {/* Legacy Case Study Slugs */}
          <Route path="/case-study-1" element={<Navigate to="/case-studies/business-scalability" replace />} />
          <Route path="/case-study-2" element={<Navigate to="/case-studies/daksh-it-consulting" replace />} />

          {/* Legacy Blog Post Slugs + Duplicate Consolidation */}
          <Route path="/vehicle-without-dashboard" element={<Navigate to="/insights/vehicle-without-dashboard" replace />} />
          <Route path="/role-of-shared-cfo" element={<Navigate to="/insights/role-of-shared-cfo" replace />} />
          <Route path="/how-to-accumulate-wealth" element={<Navigate to="/insights/how-to-accumulate-wealth" replace />} />
          <Route path="/cash-is-king" element={<Navigate to="/insights/cash-is-king" replace />} />
          <Route path="/sustainable-business" element={<Navigate to="/insights/sustainable-business" replace />} />
          <Route path="/lockdown-impact" element={<Navigate to="/insights/lockdown-impact" replace />} />
          <Route path="/love-your-vocation" element={<Navigate to="/insights/love-your-vocation" replace />} />
          <Route
            path="/warrior-mindset-of-an-entrepreneur"
            element={<Navigate to="/insights/warrior-mindset-of-an-entrepreneur" replace />}
          />
          <Route path="/why-business-fail" element={<Navigate to="/insights/why-business-fail" replace />} />
          <Route
            path="/which-type-of-constitution-will-suit-your-business"
            element={<Navigate to="/insights/why-business-fail" replace />}
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingConversionBar />
    </div>
  );
}
