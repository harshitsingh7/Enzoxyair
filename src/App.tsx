/**
 * ENZOXY AIR - Environmental Technology & Precision Air Purification
 * Design System: Atmospheric Precision
 * Content Source: https://www.enzoxyair.com/
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { PolicyModal } from './components/PolicyModal';
import { ArticleModal } from './components/ArticleModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { AirWellnessPage } from './pages/AirWellnessPage';
import { BusinessPage } from './pages/BusinessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Article } from './data/siteData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderProductType, setOrderProductType] = useState<'device' | 'filter'>('device');
  const [activePolicy, setActivePolicy] = useState<'terms' | 'privacy' | 'shipping' | 'returns' | 'warranty' | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleOpenOrder = (productType: 'device' | 'filter' = 'device') => {
    setOrderProductType(productType);
    setOrderModalOpen(true);
  };

  const handleOpenPolicy = (policyKey: 'terms' | 'privacy' | 'shipping' | 'returns' | 'warranty') => {
    setActivePolicy(policyKey);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#191c1c] selection:bg-[#2DE2BA] selection:text-[#0B1919]">
      {/* Global Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenOrder={handleOpenOrder}
      />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={setCurrentTab}
            onOpenOrder={handleOpenOrder}
          />
        )}
        {currentTab === 'products' && (
          <ProductsPage
            onOpenOrder={handleOpenOrder}
          />
        )}
        {currentTab === 'technology' && (
          <TechnologyPage
            onOpenOrder={handleOpenOrder}
          />
        )}
        {currentTab === 'air-wellness' && (
          <AirWellnessPage
            onSelectArticle={setActiveArticle}
          />
        )}
        {currentTab === 'business' && (
          <BusinessPage />
        )}
        {currentTab === 'about' && (
          <AboutPage
            onNavigate={setCurrentTab}
          />
        )}
        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Dark Atmospheric Footer */}
      <Footer
        onNavigate={setCurrentTab}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialProductType={orderProductType}
      />

      <PolicyModal
        policyKey={activePolicy}
        onClose={() => setActivePolicy(null)}
        onSelectPolicy={setActivePolicy}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
