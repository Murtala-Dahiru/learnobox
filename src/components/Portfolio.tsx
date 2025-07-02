import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Lagos Youth Documentary',
      category: 'Documentary',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      description: 'Authentic stories from Lagos youth showcasing resilience and creativity.',
    },
    {
      title: 'Brand Campaign for Local Business',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      description: 'Compelling brand storytelling that drove 300% engagement increase.',
    },
    {
      title: 'Educational Series Production',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      description: 'Interactive learning content for Nigerian schools and online platforms.',
    },
  ];

  const handleViewPortfolio = () => {
    window.open('https://instagram.com/learnobox01', '_blank');
  };

  const handleFollowJourney = () => {
    window.open('https://instagram.com/learnobox01', '_blank');
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grassroots documentaries to global brand campaigns, see how we've helped tell authentic Nigerian stories 
            and build impactful content that resonates worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => window.open('https://instagram.com/learnobox01', '_blank')}
                      className="bg-[#46A8AB] text-white p-3 rounded-full hover:bg-[#3a8a8d] transition cursor-pointer"
                    >
                      <Play className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#46A8AB]/10 text-[#46A8AB] px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button 
                  onClick={() => window.open('https://instagram.com/learnobox01', '_blank')}
                  className="text-[#46A8AB] font-medium flex items-center hover:text-[#3a8a8d] transition cursor-pointer"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
          <p className="text-gray-600 mb-6">
            Check out our full portfolio and behind-the-scenes content on our social media channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleViewPortfolio}
              className="bg-[#46A8AB] text-white px-6 py-3 rounded-full hover:bg-[#3a8a8d] transition cursor-pointer"
            >
              View Full Portfolio
            </button>
            <button 
              onClick={handleFollowJourney}
              className="border-2 border-[#46A8AB] text-[#46A8AB] px-6 py-3 rounded-full hover:bg-[#46A8AB]/10 transition cursor-pointer"
            >
              Follow Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}