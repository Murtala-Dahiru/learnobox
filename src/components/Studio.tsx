import React from 'react';
import { Camera, Mic, Monitor, Lightbulb, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Studio() {
  const studioFeatures = [
    {
      icon: Camera,
      title: 'Professional Equipment',
      description: 'High-end cameras, lighting, and audio equipment for premium production quality.',
    },
    {
      icon: Lightbulb,
      title: 'Flexible Lighting Setup',
      description: 'Customizable lighting arrangements for any mood or style you want to achieve.',
    },
    {
      icon: Mic,
      title: 'Audio Recording',
      description: 'Professional microphones and sound treatment for crystal-clear audio capture.',
    },
    {
      icon: Monitor,
      title: 'Live Streaming Ready',
      description: 'Equipped for live streaming, podcasts, interviews, and virtual events.',
    },
  ];

  const studioServices = [
    'Photography & Videography Studio Rental',
    'Professional Photo & Product Shoots',
    'Podcast & Content Creation Space',
    'Interview & Corporate Video Setup',
    'Live Streaming & Virtual Events',
    'Creative Brainstorming Sessions',
  ];

  const handleBookStudio = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="studio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Creative Studio & Space</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learnobox offers a fully equipped photography and video studio tailored to meet the needs of creatives, 
            influencers, and professionals in Lagos, Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.pinimg.com/736x/e1/07/d7/e107d743bf96188834a243324f653d89.jpg?auto=format&fit=crop&w=800&q=80" 
              alt="Professional podcast setup with two people" 
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">State-of-the-Art Facilities</h3>
            <p className="text-gray-600 mb-8">
              Our studio is designed to be a versatile creative space where ideas come to life. Whether you're shooting 
              a product campaign, recording a podcast, or creating educational content, we have the tools and environment 
              to make your vision a reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {studioFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#46A8AB]/10 p-2 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-[#46A8AB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Studio Services */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Studio Services</h3>
              <ul className="space-y-4">
                {studioServices.map((service, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#46A8AB] rounded-full mr-4"></div>
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Booking Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#46A8AB] mr-3" />
                  <span className="text-gray-700">Flexible hourly and daily rates</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#46A8AB] mr-3" />
                  <span className="text-gray-700">Accommodates teams of all sizes</span>
                </div>
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-[#46A8AB] mr-3" />
                  <span className="text-gray-700">Equipment included in rental</span>
                </div>
              </div>
              <button 
                onClick={handleBookStudio}
                className="w-full mt-6 bg-[#46A8AB] text-white py-3 rounded-lg hover:bg-[#3a8a8d] transition cursor-pointer"
              >
                Book Studio Time
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}