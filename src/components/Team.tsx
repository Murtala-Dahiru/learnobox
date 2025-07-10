import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: 'Abu Sufiyan Muhammed',
      role: 'Creative Director',
      image: 'Public/Teampics/Sufiyan.jpg',
      bio: 'Visionary leader with 8+ years in creative direction and brand storytelling.',
    },
    {
      name: 'Abdullahi Muhammed',
      role: 'Lead Videographer',
      image: 'Public/Teampics/Amex.jpg',
      bio: 'Award-winning videographer specializing in documentary and commercial production.',
    },
    {
      name: 'Murtala Dahiru',
      role: 'Art Director',
      image: 'Public/Teampics/MD.jpg',
      bio: 'Creative artist blending traditional African aesthetics with modern design.',
    },
    {
      name: 'Joshwa Okwu',
      role: 'Content Strategist',
      image: 'Public/Teampics/Joshwa.jpg',
      bio: 'Strategic thinker crafting compelling narratives for brands and organizations.',
    },
    {
      name: 'Usman Usman',
      role: 'Technical Producer',
      image: 'Public/Teampics/Usman.jpg',
      bio: 'Technical expert ensuring flawless execution of all production projects.',
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate creatives behind Learnobox. Our diverse team brings together years of experience, 
            cultural insight, and innovative thinking to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-[#46A8AB]/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-[#46A8AB] font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div 
          className="mt-16 text-center bg-[#46A8AB] text-white p-8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Creative Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            We're always looking for talented creatives to join our growing team. 
            Be part of Nigeria's most innovative creative agency.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#46A8AB] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}