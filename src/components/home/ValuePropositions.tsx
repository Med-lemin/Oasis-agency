import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions to meet your specific needs',
    icon: CodeBracketIcon,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for complex problems',
    icon: CloudIcon,
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protecting your digital assets',
    icon: ShieldCheckIcon,
  },
];

const ValuePropositions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            We combine expertise and innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-8"
            >
              <value.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions; 