import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@sophiarose.com",
      link: "mailto:hello@sophiarose.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "New York City & Tri-State Area",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      content: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
            Let's <span className="text-rose-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            Ready to book your makeup session? I'd love to hear about your vision and help bring it to life. Get in touch today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
              Book Your Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party & Event Makeup</option>
                    <option value="editorial">Editorial & Photoshoot</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Tell Me About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all duration-300 font-inter resize-none"
                  placeholder="Describe your event, style preferences, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-400 to-pink-400 text-white py-4 rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-8">
                I'm here to answer any questions and help you prepare for your special day. Whether you need a consultation or want to book a service, I'm just a message away.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-rose-50 transition-all duration-300 group"
                >
                  <div className="text-rose-400 group-hover:text-rose-500 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 font-inter text-sm">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8">
              <h4 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                Follow My Work
              </h4>
              <p className="text-gray-600 font-inter mb-6">
                Stay updated with my latest creations and behind-the-scenes content on social media.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-rose-400 hover:text-white transition-all duration-300 text-gray-600"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-rose-400 hover:text-white transition-all duration-300 text-gray-600"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-rose-400 hover:text-white transition-all duration-300 text-gray-600"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-rose-100 border border-rose-200 rounded-xl p-6">
              <h4 className="font-playfair font-bold text-rose-800 mb-2">
                Last-Minute Bookings?
              </h4>
              <p className="text-rose-700 font-inter text-sm mb-3">
                Need makeup services with short notice? I often have same-day availability for certain services.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center text-rose-600 hover:text-rose-800 font-inter font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call for urgent bookings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;