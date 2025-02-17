import React from 'react';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';

const About = () => {
  return (
    <main className="pt-16">
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </main>
  );
};

export default About; 