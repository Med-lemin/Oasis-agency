import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs.',
    icon: CodeBracketIcon,
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Software',
      'API Development',
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and migration services.',
    icon: CloudArrowUpIcon,
    features: [
      'Cloud Migration',
      'AWS/Azure Services',
      'Cloud Optimization',
      'DevOps',
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that drive business growth and efficiency.',
    icon: CpuChipIcon,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Data Mining',
    ],
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
    features: [
      'Security Audits',
      'Threat Detection',
      'Compliance',
      'Security Training',
    ],
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable business insights.',
    icon: ChartBarIcon,
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Big Data Analytics',
      'Real-time Analytics',
    ],
  },
  {
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive digital transformation.',
    icon: CogIcon,
    features: [
      'Digital Strategy',
      'Technology Assessment',
      'Process Optimization',
      'IT Roadmap',
    ],
  },
];

const ServicesList = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-8"
            >
              <service.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-600">
                    <svg
                      className="h-5 w-5 text-primary-600 mr-2"
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
                    {feature}
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

export default ServicesList; 