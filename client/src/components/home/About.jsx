import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative">
              <img
                src="/images/8911.jpg"
                alt="Luxury Wedding Hall"
                className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug md:leading-tight">
              Welcome to{" "}
              <span className="text-[#F0B74C] font-medium border-b-2 border-[#F0B74C]">
                Hotel Pacific
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Nestled in the city's heart,{" "}
                <span className="font-medium text-gray-900">Hotel Pacific</span>{" "}
                blends timeless luxury with contemporary elegance. For nearly
                three decades, we have been the premier destination for life's
                most precious celebrations.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                Why Choose Hotel Pacific?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-check-line text-[#F0B74C] text-lg sm:text-xl mt-1"></i>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Luxurious banquet halls
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-check-line text-[#F0B74C] text-lg sm:text-xl mt-1"></i>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Premium accommodation
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-check-line text-[#F0B74C] text-lg sm:text-xl mt-1"></i>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Expert event planning
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <i className="ri-check-line text-[#F0B74C] text-lg sm:text-xl mt-1"></i>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Multi-cuisine dining
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="border-2 border-[#F0B74C] text-[#F0B74C] hover:bg-[#F0B74C] hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center group"
              >
                <i className="ri-phone-fill mr-2"></i>
                <span>Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
