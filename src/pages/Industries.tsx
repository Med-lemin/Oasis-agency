import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Healthcare',
    description: 'Digital solutions for modern healthcare delivery',
    solutions: [
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'Healthcare Analytics'
    ]
  },
  {
    title: 'Finance',
    description: 'Innovative fintech solutions for the digital age',
    solutions: [
      'Digital Banking Platforms',
      'Payment Processing Systems',
      'Risk Management Tools'
    ]
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing and Industry 4.0 solutions',
    solutions: [
      'IoT Integration',
      'Predictive Maintenance',
      'Supply Chain Optimization'
    ]
  },
  {
    title: 'Retail',
    description: 'Digital transformation for retail businesses',
    solutions: [
      'E-commerce Platforms',
      'Inventory Management',
      'Customer Analytics'
    ]
  }
];

const Industries = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored technology solutions for diverse industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
              <ul className="space-y-3">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <svg className="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries; 