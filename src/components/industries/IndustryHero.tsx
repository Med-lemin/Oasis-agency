import React from 'react';
import { motion } from 'framer-motion';

const IndustryHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 pt-32 pb-20">
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Industries We Serve
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Tailored technology solutions for diverse industry needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero; 