import React from "react";
import HeroHeading from "../components/common/HeroHeading";
import CallToAction from "../components/common/CallToAaction";

const FEATURES = [
  {
    icon: <i className="ri-award-line text-[#F0B74C] text-3xl sm:text-4xl"></i>,
    title: "30+ Years of Excellence",
    description:
      "Three decades of creating unforgettable moments and celebrations.",
  },
  {
    icon: <i className="ri-team-line text-[#F0B74C] text-3xl sm:text-4xl"></i>,
    title: "Expert Team",
    description:
      "Dedicated professionals committed to making your event perfect.",
  },
  {
    icon: <i className="ri-star-line text-[#F0B74C] text-3xl sm:text-4xl"></i>,
    title: "Premium Quality",
    description: "Luxury amenities and world-class service in every detail.",
  },
  {
    icon: <i className="ri-heart-line text-[#F0B74C] text-3xl sm:text-4xl"></i>,
    title: "Personalized Service",
    description:
      "Tailored experiences that reflect your unique vision and style.",
  },
];

const STATS = [
  { number: "500+", label: "Weddings & Events Hosted" },
  { number: "100+", label: "Luxury Rooms & Suites" },
  { number: "10+", label: "World-Class Dining Options" },
  { number: "1500+", label: "Wedding Guest Capacity" },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroHeading
        heading="About"
        subHeading="Hotel Pacific"
        line="Where timeless elegance meets modern luxury"
      />

      <div className="min-h-screen">
        {/* Our Story Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#F0B74C] mb-3 sm:mb-4 font-semibold">
                    Our Story
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                    A Legacy of{" "}
                    <span className="text-[#F0B74C] font-medium">
                      Celebration
                    </span>
                  </h2>
                </div>

                <div className="space-y-5 sm:space-y-7 text-gray-700">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Hotel Pacific has been the cornerstone of celebration in our
                    city. What began as a vision to create the perfect wedding
                    destination has evolved into a legacy of unforgettable
                    moments and cherished memories.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed">
                    Our commitment to excellence, attention to detail, and
                    passion for hospitality has made us the preferred choice for
                    discerning couples and families who seek nothing but the
                    best for their special occasions.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed">
                    From intimate gatherings to grand celebrations, we bring
                    together luxury, tradition, and modern amenities to create
                    experiences that last a lifetime.
                  </p>
                </div>
              </div>

              {/* Right Image with Accent */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full border-4 border-[#F0B74C] rounded-2xl sm:rounded-3xl"></div>
                <img
                  src="/images/story.webp"
                  alt="Hotel Pacific Story"
                  className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-[#f0b74c10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F0B74C] mb-2 sm:mb-3 font-medium">
                WHY CHOOSE US
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 rounded-full bg-amber-50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#F0B74C] mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CallToAction />
    </>
  );
};

export default AboutUs;
