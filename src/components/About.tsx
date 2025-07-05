import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    { 
      icon: Heart,
      title: 'Youth-Led Innovation', 
      description: 'A passionate team of young creatives driving change through authentic storytelling.' 
    },
    { 
      icon: Target,
      title: 'Cultural Relevance', 
      description: 'Deep understanding of Nigerian culture woven into every project we create.' 
    },
    { 
      icon: Eye,
      title: 'Educational Impact', 
      description: 'Focused on empowerment and digital transformation through creative education.' 
    },
    { 
      icon: CheckCircle,
      title: 'Quality & Affordability', 
      description: 'High-quality service delivery that\'s flexible and accessible to all.' 
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Learnobox</h2>
            <p className="text-gray-600 mb-6">
              Learnobox is a visionary creative agency founded on the principles of innovation, storytelling, and purposeful expression. 
              At our core, we believe creativity is not just art, it's a powerful tool for education, empowerment, and social transformation.
            </p>
            <p className="text-gray-600 mb-8">
              We are committed to reshaping narratives, documenting realities, and nurturing talents through cutting-edge multimedia 
              and design services built not only for aesthetics, but for impact.
            </p>
            
            {/* Vision & Mission */}
            <div className="bg-[#46A8AB]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#46A8AB] mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To transform Nigeria into a global hub for creative excellence by empowering individuals and organizations 
                to tell authentic stories, build strong brands, and access impactful education through innovative content.
              </p>
              <h3 className="text-xl font-bold text-[#46A8AB] mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver world-class creative solutions in videography, design, and digital education to promoting Nigerian culture, 
                supporting youth development, and connecting with global audiences through compelling visual storytelling.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.pinimg.com/736x/f8/ff/2b/f8ff2b262e4bb46bdfbad821613841cd.jpg?auto=format&fit=crop&w=800&q=80" 
              alt="African creative professionals collaborating in modern workspace" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#46A8AB] text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold mb-2">🇳🇬</div>
              <div className="text-sm">Proudly Nigerian</div>
            </div>
          </motion.div>
        </div>

        {/* What Makes Us Unique */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Makes Us Unique</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-[#46A8AB]/5 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="h-12 w-12 text-[#46A8AB] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}