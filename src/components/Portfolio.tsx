import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "bridal",
      title: "Classic Bridal Elegance",
      description: "Timeless bridal look with soft glam and natural glow"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "party",
      title: "Glamorous Evening Look",
      description: "Bold and dramatic makeup for special evening events"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3997999/pexels-photo-3997999.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "editorial",
      title: "Fashion Editorial",
      description: "Creative and artistic makeup for fashion photography"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "bridal",
      title: "Romantic Bridal Glow",
      description: "Soft and romantic makeup perfect for garden weddings"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "party",
      title: "Red Carpet Ready",
      description: "High-glamour makeup for red carpet events"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "editorial",
      title: "Artistic Expression",
      description: "Bold and creative makeup for artistic photoshoots"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/3373715/pexels-photo-3373715.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "bridal",
      title: "Modern Bride",
      description: "Contemporary bridal makeup with perfect contouring"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "party",
      title: "Night Out Glam",
      description: "Sultry and sophisticated makeup for parties"
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/3998365/pexels-photo-3998365.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "editorial",
      title: "High Fashion",
      description: "Avant-garde makeup for high fashion shoots"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Work' },
    { value: 'bridal', label: 'Bridal' },
    { value: 'party', label: 'Party & Events' },
    { value: 'editorial', label: 'Editorial' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
            My <span className="text-rose-400">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto leading-relaxed">
            Explore my recent work showcasing a diverse range of makeup artistry from bridal elegance to editorial creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-rose-50 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-rose-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-inter opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="font-inter opacity-90">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Instagram Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Follow My Journey
          </h3>
          <p className="text-lg text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
            Stay updated with my latest work, behind-the-scenes moments, and beauty tips on Instagram.
          </p>
          <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-8 py-4 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            @SophiaRoseMUA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;