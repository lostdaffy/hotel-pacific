import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import Gallery from "../components/home/Gallery";
import BestForYouSlider from "../components/home/BestForYouSlider";
import Quotes from "../components/home/Quotes";
import GetInTouch from "../components/common/GetInTouch";
import CallToAction from "../components/common/CallToAaction";

const Home = () => {
  return (
    <>
      <Hero />
      <Quotes />
      <About />
      <BestForYouSlider />
      <Gallery />
      <Testimonials />
      <GetInTouch />
      <CallToAction />
    </>
  );
};

export default Home;
