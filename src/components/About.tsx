import React from 'react';
import { Heart, Sparkles, Award, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "Licensed makeup artist with advanced certifications"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Products",
      description: "Using only high-end, professional-grade cosmetics"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Approach",
      description: "Every look is tailored to enhance your unique features"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Punctual & Reliable",
      description: "Always on time for your special moments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sophia Rose, Professional Makeup Artist"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-400/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
                Meet <span className="text-rose-400">Sophia</span>
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                With over 8 years of experience in the beauty industry, I've had the privilege of enhancing natural beauty for hundreds of clients across weddings, fashion shoots, and special events.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                My passion lies in creating looks that not only photograph beautifully but also make you feel confident and radiant. Every brush stroke is applied with precision, care, and an artistic eye for detail.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-rose-400">
                    {achievement.icon}
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-rose-50 rounded-xl p-6 border-l-4 border-rose-400">
              <p className="text-gray-700 font-inter italic text-lg leading-relaxed">
                "Beauty is about enhancing what you have. Let yourself shine through!"
              </p>
              <p className="text-rose-400 font-playfair font-semibold mt-2">- Sophia Rose</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;