import React from 'react';

export default function Partners() {
  const partners = [
    {
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'InnovateX',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'GlobalTech',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'FutureWorks',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 flex items-center justify-center group hover:bg-gray-100 transition duration-300"
            >
              <div className="relative w-full aspect-[3/2] filter grayscale hover:grayscale-0 transition duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Global Partners</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}