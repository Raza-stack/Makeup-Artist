import React from 'react';
import { Crown, PartyPopper, Camera, Clock, DollarSign, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Complete bridal transformation including trial session, wedding day application, and touch-up kit.",
      features: ["Pre-wedding consultation", "Trial makeup session", "Wedding day application", "Touch-up kit included", "Hair styling available"],
      price: "From $350",
      duration: "4-5 hours",
      popular: true,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Party & Event Makeup",
      description: "Glamorous looks for special occasions, parties, galas, and celebrations.",
      features: ["Custom look design", "Premium products", "Long-lasting formula", "Photo-ready finish", "Quick touch-ups"],
      price: "From $180",
      duration: "2-3 hours",
      popular: false,
      image: "https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Editorial & Photoshoot",
      description: "Professional makeup for fashion shoots, portfolios, and creative projects.",
      features: ["Creative collaboration", "Trend-focused looks", "HD makeup techniques", "Multiple look changes", "Professional products"],
      price: "From $250",
      duration: "3-6 hours",
      popular: false,
      image: "https://images.pexels.com/photos/3997999/pexels-photo-3997999.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
            My <span className="text-rose-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            Professional makeup artistry tailored to your unique style and occasion. Each service includes personalized consultation and premium products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-inter font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="text-rose-400">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 font-inter">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing & Duration */}
                  <div className="flex justify-between items-center py-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-inter">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-rose-400" />
                      <span className="text-lg font-playfair font-bold text-gray-900">{service.price}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-rose-400 to-pink-400 text-white py-3 rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-semibold transform hover:scale-105">
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-gray-900">
              All Services Include
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-rose-400" />
                </div>
                <p className="font-inter font-medium text-gray-700">Premium Products</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-rose-400" />
                </div>
                <p className="font-inter font-medium text-gray-700">Punctual Service</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Camera className="w-6 h-6 text-rose-400" />
                </div>
                <p className="font-inter font-medium text-gray-700">Photo Ready</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Crown className="w-6 h-6 text-rose-400" />
                </div>
                <p className="font-inter font-medium text-gray-700">Luxury Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;