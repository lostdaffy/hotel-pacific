import React from "react";
import HeroHeading from "../components/common/HeroHeading";
import CallToAction from "../components/common/CallToAaction";

const EVENTS = [
  {
    id: 1,
    image: "/images/weddings.jpg",
    title: "Luxury Weddings",
    date: "By Appointment",
    description: "Elegant weddings with bespoke décor and gourmet experiences.",
  },
  {
    id: 2,
    image: "/images/Birthday-Parties.jpg",
    title: "Premium Birthday Parties",
    date: "Anytime",
    description:
      "Exclusive birthday celebrations with designer themes and luxe treats.",
  },
  {
    id: 3,
    image: "/images/Corporate-Events.jpg",
    title: "Elite Corporate Events",
    date: "Anytime",
    description: "Sophisticated setups for impactful corporate gatherings.",
  },
  {
    id: 4,
    image: "/images/Anniversary-Parties.jpg",
    title: "Anniversary Parties",
    date: "By Appointment",
    description: "Romantic anniversaries in refined and intimate settings.",
  },
  {
    id: 5,
    image: "/images/Engagement-Galas.jpg",
    title: "Engagement Galas",
    date: "By Appointment",
    description: "Cherish new beginnings with lavish engagement parties.",
  },
  {
    id: 6,
    image: "/images/luxury-stay.webp",
    title: "Luxury Stay",
    date: "Anytime",
    description:
      "Experience comfort and elegance with our premium rooms and world-class hospitality.",
  },
];

const Events = () => (
  <>
    {/* Hero Heading */}
    <HeroHeading
      heading="Events"
      subHeading="Hotel Pacific"
      line="Let's plan your perfect celebration together"
    />

    {/* Events Section */}
    <section className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-light mb-10 sm:mb-12 text-center">
          Events at{" "}
          <span className="text-[#F0B74C] font-medium">Hotel Pacific</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[360px] sm:min-h-[400px]"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl sm:rounded-2xl h-40 sm:h-48 object-cover mb-5"
              />

              {/* Event Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {event.title}
              </h3>
              <span className="text-xs sm:text-sm text-[#F0B74C] font-medium mb-2">
                {event.date}
              </span>
              <p className="text-gray-700 text-sm sm:text-base font-light flex-grow leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default Events;
