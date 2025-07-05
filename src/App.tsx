import React from 'react';
import { Menu, X, ArrowRight, CheckCircle, Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Studio from './components/Studio';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleGetStarted = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#46A8AB]">Learnobox</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#46A8AB] transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#46A8AB] transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#46A8AB] transition">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#46A8AB] transition">Portfolio</a>
              <a href="#team" className="text-gray-700 hover:text-[#46A8AB] transition">Team</a>
              <a href="#studio" className="text-gray-700 hover:text-[#46A8AB] transition">Studio</a>
              <a href="#contact" className="text-gray-700 hover:text-[#46A8AB] transition">Contact</a>
              <button 
                onClick={handleGetStarted}
                className="bg-[#46A8AB] text-white px-6 py-2 rounded-full hover:bg-[#3a8a8d] transition flex items-center cursor-pointer"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#46A8AB] transition"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Portfolio</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Team</a>
              <a href="#studio" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Studio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#46A8AB] transition">Contact</a>
              <button 
                onClick={handleGetStarted}
                className="w-full mt-4 bg-[#46A8AB] text-white px-6 py-2 rounded-full hover:bg-[#3a8a8d] transition flex items-center justify-center cursor-pointer"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Studio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#46A8AB]">Learnobox</h3>
              <p className="text-gray-400">A Nigerian creative agency rooted in innovation, storytelling, and impact. Empowering voices, elevating brands, inspiring change.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-[#46A8AB] transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#46A8AB] transition">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#46A8AB] transition">Services</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-[#46A8AB] transition">Portfolio</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-[#46A8AB] transition">Team</a></li>
                <li><a href="#studio" className="text-gray-400 hover:text-[#46A8AB] transition">Studio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#46A8AB]" />
                  learnobox01@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-[#46A8AB]" />
                  07056506206
                </li>
                <li>Kaduna, Nigeria</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/learnobox01" className="text-gray-400 hover:text-[#46A8AB] transition"><Facebook className="h-6 w-6" /></a>
                <a href="https://instagram.com/learnobox01" className="text-gray-400 hover:text-[#46A8AB] transition"><Instagram className="h-6 w-6" /></a>
                <a href="https://linkedin.com/company/learnobox01" className="text-gray-400 hover:text-[#46A8AB] transition"><Linkedin className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Learnobox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;