import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lottie from "react-lottie";
import Animation1 from "../json files/woman-on-phone.json";
import "../css files/Services.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

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
      <section class="service_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2> Our Services</h2>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s1} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Maintenance</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s2} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Electrical</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s3} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Plumbing</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s4} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Food Services</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s5} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Cleaning</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 mx-auto">
              <div class="box">
                <div class="img-box"><img src={s6} alt="website template image"/></div>
                <div class="detail-box">
                  <h5>Grooming</h5>
                  <p>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box"><a>Know More</a></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
