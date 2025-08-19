import React from "react";
import HeroHeading from "../components/common/HeroHeading";
import CallToAction from "../components/common/CallToAaction";

const GALLERY_IMAGES = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/images/Gallary/${index + 1}.webp`,
  alt: "photos",
}));

const Gallery = () => (
  <>
    {/* Hero Section */}
    <HeroHeading
      heading="Gallery"
      subHeading="Hotel Pacific"
      line="Let's plan your perfect celebration together"
    />

    {/* Gallery Section */}
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-light mb-10 sm:mb-12 text-center">
          Gallery of{" "}
          <span className="text-[#F0B74C] font-medium">Memories</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-36 sm:h-48 md:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default Gallery;
