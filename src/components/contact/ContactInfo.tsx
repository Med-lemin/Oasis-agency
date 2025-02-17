import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactDetails = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: [
      '+1 (555) 123-4567',
      '+1 (555) 765-4321'
    ]
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: [
      'info@techcompany.com',
      'support@techcompany.com'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday - Sunday: Closed'
    ]
  }
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-secondary-900 mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <item.icon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-secondary-900">
                {item.title}
              </h3>
              <div className="mt-1 space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-secondary-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo; 