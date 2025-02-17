import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Industries Served', value: '6+' },
  { label: 'Successful Projects', value: '200+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Years Experience', value: '15+' }
];

const IndustryStats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-secondary-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryStats; 