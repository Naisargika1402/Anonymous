import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lottie from "react-lottie";
import Animation1 from "../json files/woman-on-phone.json";
import "../css files/Services.css";
import HomeServices from "../components/HomeServices";

function Services() {
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

  return (
    <div>
      <Header />
      <section class="professional_section layout_padding">
        <div class="container">
          <div class="row ht">
            <div class="col-md-6">
              <div class="img-box">
                <Lottie options={animationOptions1} />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <h2>
                  We Provide Professional
                  <br />
                  Home Services.
                </h2>
                <p>
                  Anonymous - Your Virtual Concierge, is more than just a
                  service platform; it's a commitment to making your life
                  easier, more efficient, and more enjoyable. Join us on this
                  journey towards seamless convenience, where your needs are met
                  with excellence. Thank you for choosing Anonymous, where
                  service meets simplicity.
                </p>
                {/*<a>Try Them</a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeServices></HomeServices>
      <Footer />
    </div>
  );
}

export default Services;
