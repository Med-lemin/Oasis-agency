import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Client 1', logo: 'https://placehold.co/200x80' },
  { name: 'Client 2', logo: 'https://placehold.co/200x80' },
  { name: 'Client 3', logo: 'https://placehold.co/200x80' },
  { name: 'Client 4', logo: 'https://placehold.co/200x80' },
  { name: 'Client 5', logo: 'https://placehold.co/200x80' },
  { name: 'Client 6', logo: 'https://placehold.co/200x80' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-secondary-900">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 