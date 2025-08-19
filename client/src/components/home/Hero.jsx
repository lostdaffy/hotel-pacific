import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-[100px] md:pt-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.1)), url("/images/32237.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center min-h-[calc(100vh-100px)] md:min-h-screen px-6 lg:px-12 text-center bg-transparent">
        {/* Heading */}
        <h1 className="uppercase text-3xl md:text-5xl lg:text-7xl text-gray-900 leading-tight tracking-tight drop-shadow-lg">
          Where <span className="text-[#F0B74C]">Forever Begins</span>
        </h1>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-[#F0B74C] my-8 mx-auto rounded-full"></div>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Welcome to <span className="font-semibold text-[#F0B74C]">Hotel Pacific</span>,
          where every celebration is crafted with grace and grandeur. <br className="hidden md:block"/>
          From enchanting weddings and glamorous soirées to intimate gatherings,
          our bespoke venues and warm hospitality create the perfect beginning to your forever.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button className="group bg-[#F0B74C] hover:bg-[#E6A639] text-white px-10 py-4 rounded-full text-sm md:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Start Planning Today
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Optional: Add an overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
