import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Events", to: "/Events" },
    { name: "Gallery", to: "/gallery" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const services = [
    { name: "Luxury Weddings", to: "/contact" },
    { name: "Corporate Events", to: "/contact" },
    { name: "Birthday Parties", to: "/contact" },
    { name: "Anniversary Parties", to: "/contact" },
    { name: "Engagement Galas", to: "/contact" },
    { name: "Luxury Stay", to: "/contact" },
  ];

  const socialLinks = [
    {
      icon: "ri-facebook-fill",
      href: "https://www.facebook.com/hotelpacificweddingroorkeeweddings/",
      name: "Facebook",
    },
    {
      icon: "ri-instagram-line",
      href: "https://www.instagram.com/hotelpacificroorkee/",
      name: "Instagram",
    },
    {
      icon: "ri-youtube-line",
      href: "https://www.youtube.com/@HotelPacific11",
      name: "YouTube",
    },
    {
      icon: "ri-whatsapp-line",
      href: "https://wa.me/917252801000",
      name: "WhatsApp",
    },
  ];

  return (
    <footer
      className="bg-gray-950 text-white relative"
      style={{
        backgroundImage: `url("/images/948996.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hotel Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Hotel Pacific Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold text-[#F0B74C]">
                Hotel Pacific
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where Elegance Meets Timeless Celebrations. Creating unforgettable
              experiences with luxury, sophistication, and world-class
              hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F0B74C] after:mt-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#F0B74C] transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F0B74C] after:mt-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.to}
                    className="text-gray-400 hover:text-[#F0B74C] transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-6 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-[#F0B74C] after:mt-2">
              Stay Connected
            </h4>

            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex gap-2 items-start">
                <i className="ri-map-pin-line text-[#F0B74C]"></i> HOTEL
                PACIFIC, Delhi Road, Roorkee, Uttarakhand – 247667
              </p>
              <p className="flex gap-2 items-start">
                <i className="ri-phone-line text-[#F0B74C]"></i> +91 7252-801000{" "}
                <br /> +91 7252-802000
              </p>
              <p className="flex gap-2 items-start">
                <i className="ri-mail-line text-[#F0B74C]"></i>{" "}
                hotelpacificroorkee@gmail.com
              </p>
              <p className="flex gap-2 items-start">
                <i className="ri-file-list-3-line text-[#F0B74C]"></i> GSTIN:
                05AHWPP2867M1ZE
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-base font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#F0B74C] hover:shadow-lg hover:shadow-[#F0B74C]/30 text-gray-300 hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2025 Hotel Pacific. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="hover:text-[#F0B74C]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#F0B74C]">
                Terms of Service
              </Link>
             
            </div>
            
          </div>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F0B74C] to-transparent"></div>
    </footer>
  );
};

export default Footer;
