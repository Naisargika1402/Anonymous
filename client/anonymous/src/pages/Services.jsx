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
              <div class="img-box"><Lottie options={animationOptions1}/></div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <h2>We Provide Professional<br/>
                  Home Services.</h2>
                <p>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>
              <a>Try Them</a></div>
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
