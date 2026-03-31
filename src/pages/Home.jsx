import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Benefits from "../components/Benefits";
import Brands from "../components/Brands";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Technologies />
        <Projects />
        <Benefits />
        <Brands />
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default Home;
