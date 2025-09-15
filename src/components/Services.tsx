import React from 'react';
import { Video, Camera, Zap, Palette, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Videography & Content Creation',
      description: 'Crafting cinematic experiences that connect, inspire, and sell.',
      features: [
        'Commercials & Brand Films (Ads & Product Launch Videos, Corporate Promos)',
        'Documentaries & Features (Social Impact Stories, Corporate & Institutional History Films)',
        'Event Cinematics (Weddings, Conferences, Concerts, Brand Activations)',
        'Educational & Training Videos'
      ],
    },
    {
      icon: Camera,
      title: 'Photography & Visual Imaging',
      description: 'Capturing visuals that elevate personal moments and brand presence.',
      features: [
        'Brand & Product Photography',
        'Lifestyle & Portrait Sessions',
        'Event Photography (Weddings, Corporate Events, Cultural Functions)',
        'Institutional & Editorial Coverage'
      ],
    },
    {
      icon: Zap,
      title: 'Creative Media Innovation',
      description: 'Pushing the boundaries of digital storytelling.',
      features: [
        'Motion Graphics & Animation',
        'Visual Effects (VFX)',
        'Virtual & Hybrid Event Coverage (Multi-cam Live Streaming, Interactive Experiences)',
        '360° & Immersive Media (VR-ready Content, Real Estate & Tourism Showcases)'
      ],
    },
    {
      icon: Palette,
      title: 'Design & Creative Arts',
      description: 'Blending imagination with design for visuals that inspire action.',
      features: [
        'Illustration & Digital Art',
        'Visual Campaign Assets',
        'Product Imaging & Mockups',
        'Concept Art & Storyboarding'
      ],
    },
    {
      icon: Target,
      title: 'Brand Identity Design',
      description: 'Building identities that resonate and last.',
      features: [
        'Logo & Identity Systems',
        'Brand Guidelines',
        'Marketing Collateral',
        'Brand Refresh & Redesign'
      ],
    },
  ];

  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomServices = () => {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in comprehensive creative solutions that reflect the rich potential of Nigeria 
            and resonate with global audiences through innovative storytelling and design.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#46A8AB]/10 p-3 rounded-lg mr-4 group-hover:bg-[#46A8AB]/20 transition">
                  <service.icon className="h-8 w-8 text-[#46A8AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-600">
                    <span className="h-2 w-2 bg-[#46A8AB] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Premium Custom Services CTA */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#46A8AB] via-[#46A8AB] to-[#3a8a8d] text-white p-12 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full opacity-50"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-3xl font-bold mb-4">Need something tailored just for you?</h3>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              We also offer <span className="font-semibold text-white">custom creative solutions</span> designed around your unique needs. 
              From concept to completion, we'll craft something extraordinary that\'s perfectly aligned with your vision.
            </p>
            
            <button 
              onClick={handleCustomServices}
              className="group bg-white text-[#46A8AB] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer inline-flex items-center"
            >
              Request Custom Services 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <p className="text-sm mt-6 opacity-80">
              Let's discuss your project and create something amazing together
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}