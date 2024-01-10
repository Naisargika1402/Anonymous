import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <section>
          Welcome to Anonymous - Your Virtual Concierge, where convenience meets
          excellence. We specialize in providing a diverse array of essential
          services, including plumbing, repairs, makeup, house help, packers and
          movers, along with weekly/monthly food and maid services.
        </section>
        <section>
          Our platform ensures optimal user experience by recommending top-rated
          professionals based on their expertise. With a seamless feedback
          system, users can contribute to the community's trust and reliability.
        </section>
        <section>
          Experience the epitome of service with our subscription management and
          booking system, making Anonymous your go-to for hassle-free living.
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
