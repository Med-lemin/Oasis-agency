import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServicesList from '../components/services/ServicesList';
import ServiceCTA from '../components/services/ServiceCTA';

const Services = () => {
  return (
    <main>
      <ServiceHero />
      <ServicesList />
      <ServiceCTA />
    </main>
  );
};

export default Services; 