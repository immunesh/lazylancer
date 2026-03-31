import React, { useState } from "react";
import "../styles/main.css";

const Hero = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section
      className="hero relative flex min-h-[calc(100vh-80px)] items-center justify-between px-20 pt-20 overflow-hidden
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >

      {/* Glow orb */}
      <div className="glow-orb w-[800px] h-[800px] -top-1/4 -right-1/4 opacity-40"></div>

      {/* LEFT */}
      <div className="hero-left z-10 max-w-[600px] flex-shrink-0">
        <h1 className="text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
          Top Online <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Bidding
          </span>{" "}
          Site
        </h1>

        <p className="text-lg text-[var(--text-secondary)] mb-10 whitespace-nowrap">
          We are the Top Rated agency on{" "}
          <span className="font-semibold text-[var(--text-main)]">
            Clutch 5.0
          </span>
          <span className="text-red-500 ml-2 tracking-widest text-sm">
            ★★★★★
          </span>
        </p>

        <button
          onClick={() => setShowDashboard(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:scale-105 active:scale-95"
        >
          Start your Bid
        </button>
      </div>

      {/* RIGHT */}
      <div className="hero-right z-10 flex-shrink-0 ml-20">
        <div className="orbit-container">
          <div className="orbit-ring"></div>

          {/* Planets */}
          <div className="orbit-wrapper">
            <div className="planet purple"></div>
            <div className="planet blue"></div>
          </div>

          {/* Cards */}
          <div className="card card1 font-medium">
            I need Freelancer
          </div>

          <div className="card card2 font-medium">
            I need MVP for startup
          </div>

          <div className="card card3 font-medium">
            We are looking for Shopify Experts
          </div>

          <div className="card card4 font-medium">
            I need web development
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;