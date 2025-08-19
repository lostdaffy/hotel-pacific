import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLinkClick = () => setMobileMenu(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-center">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-full mx-auto mt-4 max-w-7xl w-[95vw] flex items-center px-4 sm:px-6 lg:px-16 py-3 justify-between pointer-events-auto transition-all">
        
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="/images/logo.png"
            alt="Hotel Pacific"
            className="h-8 sm:h-9 md:h-10 w-auto"
          />
          <span className="uppercase text-base sm:text-lg md:text-2xl font-bold text-[#F0B74C] whitespace-nowrap">
            Hotel Pacific
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#F0B74C] transition">Home</Link>
          <Link to="/events" className="hover:text-[#F0B74C] transition">Events</Link>
          <Link to="/gallary" className="hover:text-[#F0B74C] transition">Gallary</Link>
          <Link to="/about" className="hover:text-[#F0B74C] transition">About Us</Link>
          <Link to="/contact" className="hover:text-[#F0B74C] transition">Contact Us</Link>
        </nav>

        {/* Right Side Call (Desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:18005555697"
            className="flex items-center gap-2 bg-[#F0B74C] text-white px-5 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-[#f0b74cd2] transition"
          >
            <i className="ri-phone-fill text-lg"></i> Call Now
          </a>
        </div>

        {/* Mobile nav icon */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
          aria-controls="mobile-menu"
        >
          {mobileMenu ? (
            <i className="ri-close-line text-gray-700 text-2xl"></i>
          ) : (
            <i className="ri-menu-line text-gray-700 text-2xl"></i>
          )}
        </button>
      </div>

      {/* Background Overlay (Mobile menu open) */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-20 inset-x-0 mx-auto max-w-xs z-50 bg-white border shadow-lg rounded-2xl p-6 flex flex-col space-y-4 items-center md:hidden transform transition-all duration-300 ${
          mobileMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-[#F0B74C]">Home</Link>
        <Link to="/events" onClick={handleLinkClick} className="text-gray-700 hover:text-[#F0B74C]">Events</Link>
        <Link to="/gallary" onClick={handleLinkClick} className="text-gray-700 hover:text-[#F0B74C]">Gallary</Link>
        <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-[#F0B74C]">About Us</Link>
        <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-[#F0B74C]">Contact Us</Link>

        <Link
          to="tel:917252801000"
          onClick={handleLinkClick}
          className="bg-[#F0B74C] text-white px-4 py-2 rounded-full text-center text-sm font-semibold hover:bg-[#f0b74cd2] transition mt-2 w-full"
        >
         <i className="ri-phone-fill"></i> Call Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
