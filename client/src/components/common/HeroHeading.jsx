import React from "react";

const HeroHeading = ({ heading, subHeading, line }) => {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage: `url("/images/129666.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-snug whitespace-nowrap">
          {heading}{" "}
          <span className="text-[#F0B74C] font-semibold">{subHeading}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto px-2 sm:px-6">
          {line}
        </p>
      </div>
    </section>
  );
};

export default HeroHeading;
