import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Future of AI in Enterprise Software',
    category: 'Artificial Intelligence',
    date: 'March 15, 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise software and transforming business operations.',
    author: {
      name: 'John Smith',
      role: 'AI Solutions Architect',
      avatar: 'https://placehold.co/100x100'
    },
    image: 'https://placehold.co/800x400'
  },
  {
    title: 'Cloud Migration: Best Practices for 2024',
    category: 'Cloud Computing',
    date: 'March 10, 2024',
    excerpt: 'Learn the latest strategies and best practices for successful cloud migration in 2024.',
    author: {
      name: 'Sarah Johnson',
      role: 'Cloud Solutions Expert',
      avatar: 'https://placehold.co/100x100'
    },
    image: 'https://placehold.co/800x400'
  },
  {
    title: 'Cybersecurity Trends to Watch',
    category: 'Cybersecurity',
    date: 'March 5, 2024',
    excerpt: 'Stay ahead of the curve with these emerging cybersecurity trends and threats.',
    author: {
      name: 'Michael Chen',
      role: 'Security Specialist',
      avatar: 'https://placehold.co/100x100'
    },
    image: 'https://placehold.co/800x400'
  }
];

const Blog = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-3"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 