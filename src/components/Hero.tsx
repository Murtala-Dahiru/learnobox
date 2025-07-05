import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchReel = () => {
    window.open('https://instagram.com/learnobox01', '_blank');
  };

  return (
    <section id="home" className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-[#46A8AB]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Where Stories Come <span className="text-[#46A8AB]">Alive</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Learnobox is a Nigerian creative agency rooted in innovation, storytelling, and impact. 
            We harness the power of multimedia, design, and education to amplify voices, elevate brands, and inspire change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={handleStartProject}
              className="bg-[#46A8AB] text-white px-8 py-3 rounded-full hover:bg-[#3a8a8d] transition flex items-center justify-center cursor-pointer"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={handleWatchReel}
              className="border-2 border-[#46A8AB] text-[#46A8AB] px-8 py-3 rounded-full hover:bg-[#46A8AB]/10 transition flex items-center justify-center cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Reel
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
            alt="African creative professionals in modern studio setting" 
            className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
          />
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-[#46A8AB] mb-2">200+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#46A8AB] mb-2">50+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#46A8AB] mb-2">5+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#46A8AB] mb-2">100%</div>
            <p className="text-gray-600">Nigerian Made</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}