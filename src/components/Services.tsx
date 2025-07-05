import React from 'react';
import { Video, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Videography & Content Creation',
      description: 'Crafting compelling visual stories tailored for diverse audiences with cinematic quality.',
      features: ['Documentary Production', 'Adverts & Brand Storytelling', 'Wedding & Event Coverage', 'Educational Course Creation', 'Studio Rental'],
    },
    {
      icon: Palette,
      title: 'Art & Design Services',
      description: 'Blending traditional and modern aesthetics to craft visuals that speak, sell, and inspire.',
      features: ['Custom Illustration & Digital Art', 'Comics & Storybooks', 'Flyers & Promotional Designs', 'Product Photography'],
    },
  ];

  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in multimedia production, creative design, and educational content that reflects 
            the rich potential of Nigeria and resonates with global audiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#46A8AB]/10 p-3 rounded-lg mr-4 group-hover:bg-[#46A8AB]/20 transition">
                  <service.icon className="h-8 w-8 text-[#46A8AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-[#46A8AB] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center bg-[#46A8AB] text-white p-12 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Tell Your Story?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's create something great together. From concept to completion, we're here to bring your vision to life.
          </p>
          <button 
            onClick={handleStartProject}
            className="bg-white text-[#46A8AB] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}