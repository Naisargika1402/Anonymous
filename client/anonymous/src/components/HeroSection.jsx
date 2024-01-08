import React from "react";
import Lottie from "react-lottie";
import Animation1 from "../json files/woman-on-phone.json";
import Animation2 from "../json files/male-female-laptop.json";
import "../css files/HeroSection.css";

function HeroSection() {
  const animationOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animationOptions1 = {
    ...animationOptions,
    animationData: Animation1,
  };

  const animationOptions2 = {
    ...animationOptions,
    animationData: Animation2,
  };

  return (
    <div className="hero">
      <div className="animation-container">
        <Lottie options={animationOptions1} style={{ marginTop: "80px" }} />
        <Lottie options={animationOptions2} />
      </div>
      <div className="text-container">
        <p>Anonymous - Your Virtual Concierge</p>
      </div>
    </div>
  );
}

export default HeroSection;
