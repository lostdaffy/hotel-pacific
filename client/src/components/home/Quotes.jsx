import React from "react";

const Quotes = () => {
  return (
    <>
      {/* Bottom Quote Section */}
      <div className="py-10 text-center mt-10 sm:mt-16 md:mt-20">
        <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-7xl bg-[#f0b74c10] mx-auto py-8 sm:py-10 md:py-14 px-6 sm:px-10 md:px-16 lg:px-20 rounded-2xl sm:rounded-3xl border-2 border-[#F0B74C]">
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 italic leading-relaxed">
            "At Hotel Pacific, we don't just host occasions — we craft
            experiences that echo with grace, charm, and unforgettable beauty."
          </blockquote>

          {/* Divider Line */}
          <div className="mt-6 flex justify-center">
            <div className="w-12 sm:w-16 h-1 bg-[#F0B74C] rounded-full"></div>
          </div>

          {/* Author */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            - Hotel Pacific Management
          </p>
        </div>
      </div>
    </>
  );
};

export default Quotes;
