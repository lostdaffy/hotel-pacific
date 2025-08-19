import React from "react";
import HeroHeading from "../components/common/HeroHeading";
import CallToAction from "../components/common/CallToAaction";
import GetInTouch from "../components/common/GetInTouch";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroHeading
        heading="Contact"
        subHeading="Hotel Pacific"
        line="Let's plan your perfect celebration together"
      />

      {/* Contact Form / Info Section */}
      <GetInTouch />

      {/* Map Section */}
      <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 pb-10 md:pb-16 lg:pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.090553631077!2d77.87980927533606!3d29.82515757503475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb25e3775aebd%3A0xcb7565666fdb904c!2sHotel%20GSP%20Pacific!5e1!3m2!1sen!2sin!4v1755524556063!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hotel Pacific Location"
        ></iframe>
      </div>

      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default Contact;
