import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
                  Natural Beauty
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-inter leading-relaxed max-w-lg">
                Professional makeup artistry for your most special moments. From bridal elegance to editorial glamour, I create looks that enhance your unique beauty.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-2xl font-playfair font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-inter">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-2xl font-playfair font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-600 font-inter">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-2xl font-playfair font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600 font-inter">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Your Session
              </button>
              <button className="border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all duration-300 font-inter font-semibold text-lg">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional makeup artistry"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-inter font-medium text-gray-700">5.0</span>
              </div>
              <p className="text-xs text-gray-500 font-inter mt-1">200+ Reviews</p>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-rose-400 font-playfair font-bold text-xl">Next Available</div>
              <p className="text-sm text-gray-600 font-inter">Tomorrow 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;