import React from 'react';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const industries = [
  {
    title: 'Healthcare',
    icon: BeakerIcon,
    description: 'Digital solutions for modern healthcare delivery',
    solutions: [
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'Healthcare Analytics',
      'Patient Engagement Systems'
    ]
  },
  {
    title: 'Finance',
    icon: BanknotesIcon,
    description: 'Innovative fintech solutions for the digital age',
    solutions: [
      'Digital Banking Platforms',
      'Payment Processing Systems',
      'Risk Management Tools',
      'Fraud Detection Systems'
    ]
  },
  {
    title: 'Real Estate',
    icon: BuildingOfficeIcon,
    description: 'Technology solutions for property management',
    solutions: [
      'Property Management Systems',
      'Virtual Tours',
      'Smart Building Solutions',
      'Real Estate Analytics'
    ]
  },
  {
    title: 'Retail',
    icon: ShoppingBagIcon,
    description: 'Digital transformation for retail businesses',
    solutions: [
      'E-commerce Platforms',
      'Inventory Management',
      'Customer Analytics',
      'POS Systems'
    ]
  },
  {
    title: 'Manufacturing',
    icon: TruckIcon,
    description: 'Smart manufacturing and Industry 4.0 solutions',
    solutions: [
      'IoT Integration',
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Quality Control Systems'
    ]
  },
  {
    title: 'Education',
    icon: AcademicCapIcon,
    description: 'Digital solutions for modern education',
    solutions: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Student Analytics',
      'Educational Content Platforms'
    ]
  }
];

const IndustryGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-8"
            >
              <industry.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
              <p className="text-secondary-600 mb-6">{industry.description}</p>
              <ul className="space-y-3">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start text-secondary-600">
                    <svg
                      className="h-5 w-5 text-primary-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid; 