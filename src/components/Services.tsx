import React from 'react';
import { Video, Palette, Camera, BookOpen, Film, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Videography & Content Creation',
      description: 'Crafting compelling visual stories tailored for diverse audiences with cinematic quality.',
      features: ['Documentary Production', 'Adverts & Brand Storytelling', 'Wedding & Event Coverage', 'Educational Course Creation', 'Short Films & Movies'],
    },
    {
      icon: Palette,
      title: 'Art & Design Services',
      description: 'Blending traditional and modern aesthetics to craft visuals that speak, sell, and inspire.',
      features: ['Custom Illustration & Digital Art', 'Comics & Storybooks', 'Magazine Design & Publishing', 'Flyers & Promotional Designs'],
    },
    {
      icon: Camera,
      title: 'Photography & Studio',
      description: 'Professional photography services and fully equipped studio space for all your creative needs.',
      features: ['Professional Portraits', 'Product Photography', 'Event Photography', 'Studio Rentals'],
    },
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Making learning engaging and accessible through creative educational materials and courses.',
      features: ['Online Course Production', 'Educational Videos', 'Children\'s Content', 'Training Materials'],
    },
  ];

  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in multimedia production, creative design, and educational content that reflects 
            the rich potential of Nigeria and resonates with global audiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group">
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
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-[#46A8AB] text-white p-12 rounded-2xl">
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
        </div>
      </div>
    </section>
  );
}