import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Bride",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Sophia made me feel absolutely stunning on my wedding day. Her attention to detail and ability to enhance my natural features was incredible. I felt like the most beautiful version of myself!",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Jessica Martinez",
      role: "Fashion Model",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Working with Sophia for my portfolio shoot was amazing. She understood the vision perfectly and created looks that photographed beautifully. Her professionalism is unmatched.",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Corporate Executive",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "I hired Sophia for a gala event and received so many compliments! She knew exactly how to create a sophisticated look that lasted all evening. Will definitely book again.",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Amanda Wilson",
      role: "Bride",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "From the trial to the wedding day, Sophia was professional, talented, and so sweet. She made my bridal party and me feel so special. The makeup was flawless and lasted through happy tears!",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Michelle Davis",
      role: "Photographer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "As a photographer, I work with many makeup artists, and Sophia is by far one of the best. Her work is consistently flawless and photographs beautifully. Highly recommend!",
      date: "November 2023"
    },
    {
      id: 6,
      name: "Rachel Green",
      role: "Prom Queen",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Sophia made my prom night extra special! She listened to what I wanted and created the perfect glamorous look. I felt confident and beautiful all night long.",
      date: "October 2023"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
            Client <span className="text-rose-400">Love</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my amazing clients have to say about their experience working with me.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-playfair font-bold text-rose-400 mb-2">500+</div>
            <div className="text-gray-600 font-inter">Happy Clients</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-playfair font-bold text-rose-400 mb-2">5.0</div>
            <div className="text-gray-600 font-inter">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-playfair font-bold text-rose-400 mb-2">98%</div>
            <div className="text-gray-600 font-inter">Return Rate</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-playfair font-bold text-rose-400 mb-2">200+</div>
            <div className="text-gray-600 font-inter">5-Star Reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Quote Icon */}
              <div className="text-rose-400 mb-4">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 font-inter leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-playfair font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-inter">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 font-inter">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Ready to Be My Next Success Story?
          </h3>
          <p className="text-lg text-gray-600 font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who've experienced the magic of professional makeup artistry. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Your Session
            </button>
            <button className="border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all duration-300 font-inter font-semibold text-lg">
              View More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;