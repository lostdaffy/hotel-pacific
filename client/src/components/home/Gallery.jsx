import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryImages = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    src: `/images/Gallary/${index + 1}.webp`,
    alt: `Event ${index + 1}`,
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Event <span className="text-[#F0B74C]">Gallery</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Take a glimpse into the magical moments and stunning celebrations
            we've hosted at Hotel Pacific
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition duration-500 aspect-square"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <div className="text-white text-center">
                  <i className="ri-eye-line text-2xl sm:text-3xl mb-2 block"></i>
                  <p className="font-medium text-sm sm:text-base">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            to="/gallary"
            className="border-2 border-[#F0B74C] text-[#F0B74C] hover:bg-[#F0B74C] hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 inline-flex items-center"
          >
            <i className="ri-multi-image-line mr-2"></i>
            <span>View More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
