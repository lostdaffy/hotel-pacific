import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f0b74c10]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 sm:mb-6 leading-snug">
          Ready to Begin Your <span className="text-[#F0B74C]">Forever</span>?
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Let us help you create the wedding of your dreams with our expert
          planning and luxurious venues.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-[#F0B74C] hover:bg-[#E6A639] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
        >
          Contact Us Today
          <i className="ri-arrow-right-line text-lg"></i>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
