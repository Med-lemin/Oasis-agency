import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Digital Transformation for Major Healthcare Provider',
    client: 'Healthcare Corp',
    challenge: 'Legacy systems causing inefficiencies in patient care delivery',
    solution: 'Implemented modern EHR system with integrated telemedicine capabilities',
    results: [
      '45% reduction in administrative tasks',
      '98% patient satisfaction rate',
      '60% faster appointment scheduling'
    ],
    image: 'https://placehold.co/600x400'
  },
  {
    title: 'AI-Powered Analytics Platform for Retail Chain',
    client: 'RetailCo',
    challenge: 'Inability to predict inventory needs and customer behavior',
    solution: 'Custom AI solution for inventory and customer analytics',
    results: [
      '32% reduction in stockouts',
      '28% increase in sales',
      '40% better demand forecasting'
    ],
    image: 'https://placehold.co/600x400'
  }
];

const CaseStudies = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses transform and grow
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={study.image}
                    alt={study.title}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Results</h4>
                      <ul className="mt-2 space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 