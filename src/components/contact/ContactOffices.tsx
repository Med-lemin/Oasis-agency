import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';

const offices = [
  {
    city: 'New York',
    country: 'United States',
    address: '123 Tech Avenue, Suite 100',
    postalCode: 'NY 10001',
    image: 'https://placehold.co/400x300'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '456 Innovation Street',
    postalCode: 'EC2A 1AB',
    image: 'https://placehold.co/400x300'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Digital Road, #08-01',
    postalCode: '049315',
    image: 'https://placehold.co/400x300'
  }
];

const ContactOffices = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Our Global Offices
          </h2>
          <p className="text-xl text-secondary-600">
            Visit us at one of our locations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={office.image}
                alt={`${office.city} Office`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {office.country}
                </p>
                <div className="flex items-start text-secondary-600">
                  <MapPinIcon className="h-5 w-5 text-primary-600 mt-1 mr-2" />
                  <div>
                    <p>{office.address}</p>
                    <p>{office.postalCode}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOffices; 