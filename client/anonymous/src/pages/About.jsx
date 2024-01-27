import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typed from "typed.js";
import Lottie from "react-lottie";
import Hello from "../json files/Hello.json";

function About() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Anonymous - Your Virtual Concierge"],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h1
          className="text-center mt-3 pb-2 font-weight-bold"
          style={{
            fontFamily: "font-family: 'Salsa', cursive;",
          }}
        >
          <span ref={el} />
        </h1>
        <div className="mt-2">
          Welcome to Anonymous, your trusted virtual concierge, where we bring
          convenience and services right to your fingertips. Our mission is to
          simplify your life by providing a platform that connects you with a
          myriad of essential services, from plumbing and repairs to makeup
          artists, house help, packers and movers, and much more.
        </div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Hello,
          }}
          height={400}
          width={600}
        />
        <div>
          What sets us apart is our commitment to recommending the best services
          based on user ratings and experience. Your satisfaction is our
          priority, and our user feedback system ensures that you have a voice
          in shaping your service experience. We believe in transparency and
          accountability, empowering you to make informed decisions.
        </div>
        <br />
        <div>
          Our intuitive system enables you to schedule services at your
          convenience. Whether you prefer a specific time or day, our calendar
          system ensures flexibility. Receive timely notifications to stay
          informed about upcoming appointments, making your experience with
          Anonymous organized and stress-free.
        </div>
        <br />
        <div className="mb-5">
          Anonymous - Your Virtual Concierge, is more than just a service
          platform; it's a commitment to making your life easier, more
          efficient, and more enjoyable. Join us on this journey towards
          seamless convenience, where your needs are met with excellence. Thank
          you for choosing Anonymous, where service meets simplicity.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
