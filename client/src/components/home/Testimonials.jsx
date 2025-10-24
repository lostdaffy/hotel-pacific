import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Raj",
      event: "Wedding Celebration",
      image: "/images/couple1.webp",
      text: "Hotel Pacific made our dream wedding come true. Every detail was perfect, from the stunning décor to the impeccable service. Our guests are still talking about it!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      event: "Corporate Event",
      image: "/images/client1.webp",
      text: "The professionalism and attention to detail at Hotel Pacific exceeded our expectations. Our product launch was a huge success thanks to their seamless coordination.",
      rating: 5,
    },
    {
      name: "The Sharma Family",
      event: "Anniversary Party",
      image: "/images/family1.webp",
      text: "Celebrating our 25th anniversary at Hotel Pacific was magical. The venue, food, and hospitality made it an unforgettable evening for our entire family.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f0b74c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
            What Our <span className="text-[#F0B74C]">Guests Say</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued guests have
            to say about their experiences at Hotel Pacific.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="ri-star-fill text-[#F0B74C] text-lg sm:text-xl"
                  ></i>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F0B74C]">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
