import { supabase } from '../lib/supabase';
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

console.log('SUPABASE CLIENT:', supabase);


export default function Contact() {

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    service: formData.get("service")?.toString() || "",
    budget: formData.get("budget")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  // 1. Insert into Supabase
  const { error } = await supabase.from('messages').insert([data]);

  if (error) {
    console.error("Submission Error:", error.message);
    alert("❌ Failed to send message. Please try again later.");
    return;
  }

  // 2. Optional: Send as mailto fallback
  const subject = `Project Inquiry - ${data.service}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nBudget: ${data.budget}\n\nProject Details:\n${data.message}`;
  const mailtoLink = `mailto:learnobox01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // 3. Notify user
  alert("✅ Message sent successfully!");
  form.reset();

  // 4. Open mail app
  window.location.href = mailtoLink;
};


  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Create Something Great Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to tell your story? Whether it's a documentary, brand campaign, or educational content, 
            we're here to bring your vision to life with authentic Nigerian creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#46A8AB]/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-[#46A8AB]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <a href="mailto:learnobox01@gmail.com" className="text-gray-600 hover:text-[#46A8AB] transition">
                    learnobox01@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#46A8AB]/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-[#46A8AB]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <a href="tel:07056506206" className="text-gray-600 hover:text-[#46A8AB] transition">
                    07056506206
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM WAT</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#46A8AB]/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-[#46A8AB]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Kaduna, Nigeria</p>
                  <p className="text-sm text-gray-500 mt-1">Serving clients across Nigeria and beyond</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/learnobox01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#46A8AB]/10 p-3 rounded-lg hover:bg-[#46A8AB]/20 transition group"
                >
                  <Instagram className="h-6 w-6 text-[#46A8AB] group-hover:scale-110 transition" />
                </a>
                <a 
                  href="https://facebook.com/learnobox01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#46A8AB]/10 p-3 rounded-lg hover:bg-[#46A8AB]/20 transition group"
                >
                  <Facebook className="h-6 w-6 text-[#46A8AB] group-hover:scale-110 transition" />
                </a>
                <a 
                  href="https://linkedin.com/company/learnobox01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#46A8AB]/10 p-3 rounded-lg hover:bg-[#46A8AB]/20 transition group"
                >
                  <Linkedin className="h-6 w-6 text-[#46A8AB] group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Start Your Project</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46A8AB] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46A8AB] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46A8AB] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Videography & Content Creation">Videography & Content Creation</option>
                  <option value="Art & Design Services">Art & Design Services</option>
                  <option value="Photography & Studio Rental">Photography & Studio Rental</option>
                  <option value="Educational Content">Educational Content</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46A8AB] focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="₦50,000 - ₦100,000">₦50,000 - ₦100,000</option>
                  <option value="₦100,000 - ₦300,000">₦100,000 - ₦300,000</option>
                  <option value="₦300,000 - ₦500,000">₦300,000 - ₦500,000</option>
                  <option value="₦500,000+">₦500,000+</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46A8AB] focus:border-transparent"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#46A8AB] text-white px-6 py-3 rounded-lg hover:bg-[#3a8a8d] transition font-semibold"
              >
                Send Project Inquiry
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                We'll get back to you within 24 hours with a detailed proposal.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}