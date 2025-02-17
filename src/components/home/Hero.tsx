import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Innovative Tech Solutions for Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            We deliver cutting-edge technology to drive growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 