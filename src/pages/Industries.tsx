import React from 'react';
import IndustryHero from '../components/industries/IndustryHero';
import IndustryGrid from '../components/industries/IndustryGrid';
import IndustryStats from '../components/industries/IndustryStats';
import ServiceCTA from '../components/services/ServiceCTA';

const Industries = () => {
  return (
    <main>
      <IndustryHero />
      <IndustryGrid />
      <IndustryStats />
      <ServiceCTA />
    </main>
  );
};

export default Industries; 