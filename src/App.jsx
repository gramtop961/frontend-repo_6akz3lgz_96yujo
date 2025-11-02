import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import KnowledgeTeaser from './components/KnowledgeTeaser.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSection />
      <HowItWorks />
      <KnowledgeTeaser />
      <SiteFooter />
    </div>
  );
}

export default App;
