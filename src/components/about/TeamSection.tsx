import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://placehold.co/300x300',
    bio: 'Over 15 years of experience in technology leadership',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://placehold.co/300x300',
    bio: 'Expert in cloud architecture and digital transformation',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Innovation',
    image: 'https://placehold.co/300x300',
    bio: 'Leading AI and machine learning initiatives',
  },
  {
    name: 'Emily Brown',
    role: 'Head of Design',
    image: 'https://placehold.co/300x300',
    bio: 'Passionate about creating exceptional user experiences',
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Meet the experts leading our mission to transform businesses through technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-primary-600 opacity-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <p className="text-secondary-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 