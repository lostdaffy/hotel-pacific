import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SERVICES = [
  {
    id: 1,
    icon: <i className="ri-hotel-line text-[#F0B74C] text-4xl sm:text-5xl"></i>,
    title: "Luxury Accommodation",
    description:
      "Premium rooms and suites with elegant decor and modern amenities for your wedding guests comfort.",
  },
  {
    id: 2,
    icon: <i className="ri-building-3-line text-[#F0B74C] text-4xl sm:text-5xl"></i>,
    title: "Banquet Halls",
    description:
      "Spacious and beautifully designed banquet halls perfect for wedding ceremonies and receptions.",
  },
  {
    id: 3,
    icon: <i className="ri-restaurant-line text-[#F0B74C] text-4xl sm:text-5xl"></i>,
    title: "Catering Services",
    description:
      "Exquisite multi-cuisine dining with customizable menus crafted by our expert chefs.",
  },
  {
    id: 4,
    icon: <i className="ri-magic-line text-[#F0B74C] text-4xl sm:text-5xl"></i>,
    title: "Event Decoration",
    description:
      "Professional decoration services with floral arrangements and theme-based wedding setups.",
  },
  {
    id: 5,
    icon: <i className="ri-user-heart-line text-[#F0B74C] text-4xl sm:text-5xl"></i>,
    title: "Guest Management",
    description:
      "Complete guest services including coordination, hospitality and personalized assistance throughout.",
  },
];

const BestForYouSlider = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#f0b74c10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F0B74C] mb-2 sm:mb-3 font-medium">
            THE BEST FOR YOU
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-800 leading-snug md:leading-tight">
            Wedding Services
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          allowTouchMove={true}
          grabCursor={true}
          className="wedding-services-slider"
        >
          {SERVICES.concat(SERVICES).map((service, index) => (
            <SwiperSlide key={`${service.id}-${index}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 min-h-[320px] sm:min-h-[360px] md:min-h-[380px] flex flex-col group cursor-pointer">
                {/* Icon */}
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="p-3 sm:p-4 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title + Description */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-3 sm:mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-2">
                    {service.description}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex justify-center mt-auto">
                  <button className="flex items-center text-[#F0B74C] transition-all duration-300">
                    <i className="ri-arrow-right-line text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .wedding-services-slider {
          padding-bottom: 50px !important;
        }
        .wedding-services-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .wedding-services-slider .swiper-slide {
          height: auto !important;
        }
        .wedding-services-slider .swiper-pagination {
          bottom: 10px !important;
        }
        .custom-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .custom-bullet-active {
          background: #f0b74c !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default BestForYouSlider;
