import React from "react";
import { Link } from "react-router-dom";
import CallToAction from "./CallToAaction";

const GetInTouch = () => {
  return (
    <>
      <section id="contact" className="py-14 sm:py-16 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0B74C] mb-3 sm:mb-4">
              Get In <span style={{ color: "#F0B74C" }}>Touch</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Ready to plan your dream wedding or special event? Contact Hotel
              Pacific today and let us create unforgettable memories for your
              special day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-14 lg:mb-20">
            {/* Left: Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Form Box */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#F0B74C" }}
                  >
                    <i className="ri-mail-line text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F0B74C]">
                      Plan Your Event
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                {/* Web3Forms Contact Form */}
                <form
                  method="POST"
                  action="https://api.web3forms.com/submit"
                  className="space-y-5 sm:space-y-6"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="22238afa-576b-4962-8956-f34bbe920801"
                  />

                  {/* Name & Phone in one row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F0B74C] focus:outline-none transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F0B74C] focus:outline-none transition-colors duration-300"
                        placeholder="+91 123456789"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F0B74C] focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F0B74C] focus:outline-none transition-colors duration-300 resize-y min-h-[120px]"
                      placeholder="Tell us about your event or inquiry..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99] shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#F0B74C" }}
                  >
                    <i className="ri-send-plane-line text-base sm:text-lg" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Card: Contact Details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F0B74C] mb-6 sm:mb-8">
                  Contact Information
                </h3>
                <div className="space-y-5 sm:space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(240, 183, 76, 0.1)" }}
                    >
                      <i
                        className="ri-map-pin-line text-lg sm:text-xl"
                        style={{ color: "#F0B74C" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0B74C] mb-1.5 sm:mb-2">
                        Hotel Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        HOTEL PACIFIC <br />
                        Delhi Road, Roorkee <br />
                        Uttarakhand - 247667 <br />
                        GSTIN: 05AHWPP2867M1ZE
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(240, 183, 76, 0.1)" }}
                    >
                      <i
                        className="ri-phone-line text-lg sm:text-xl"
                        style={{ color: "#F0B74C" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0B74C] mb-1.5 sm:mb-2">
                        Phone Numbers
                      </h4>
                      <p className="text-gray-600">
                        <Link
                          to="tel:+917252801000"
                          className="hover:text-[#F0B74C] transition-colors duration-300"
                        >
                          +91 7252-801000
                        </Link>
                      </p>
                      <p className="text-gray-600">
                        <Link
                          to="tel:+917252802000"
                          className="hover:text-[#F0B74C] transition-colors duration-300"
                        >
                          +91 7252-802000
                        </Link>
                      </p>

                      <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        Available for Bookings & Inquiries
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(240, 183, 76, 0.1)" }}
                    >
                      <i
                        className="ri-mail-line text-lg sm:text-xl"
                        style={{ color: "#F0B74C" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0B74C] mb-1.5 sm:mb-2">
                        Email Address
                      </h4>
                      <p className="text-gray-600">
                        <Link
                          to="mailto:hotelpacificroorkee@gmail.com"
                          className="hover:text-[#F0B74C] transition-colors duration-300 break-all"
                        >
                          hotelpacificroorkee@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(240, 183, 76, 0.1)" }}
                    >
                      <i
                        className="ri-time-line text-lg sm:text-xl"
                        style={{ color: "#F0B74C" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0B74C] mb-1.5 sm:mb-2">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Event Planning: Mon-Sun 9:00 AM - 8:00 PM
                        <br />
                        Hotel Reception: 24/7
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default GetInTouch;
