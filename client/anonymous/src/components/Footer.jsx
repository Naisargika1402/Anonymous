import React from "react";
import "../css files/Footer.css";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
    <section class="info_section">
    <div class="container-fluid">
      <h4>Get In Touch</h4>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="info_items">
            <div class="row">
              <div class="col-md-4"><a href="https://www.free-css.com/free-css-templates">
                <div class="item">
                  <div class="img-box"><CiLocationOn></CiLocationOn></div>
                  <p>Lorem Ipsum is simply dummy text</p>
                </div>
                </a></div>
              <div class="col-md-4"><a href="https://www.free-css.com/free-css-templates">
                <div class="item">
                  <div class="img-box"><BsFillTelephoneFill></BsFillTelephoneFill></div>
                  <p>+02 1234567890</p>
                </div>
                </a></div>
              <div class="col-md-4"><a href="https://www.free-css.com/free-css-templates">
                <div class="item">
                  <div class="img-box"><MdEmail></MdEmail></div>
                  <p>mail@domain.com</p>
                </div>
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-box">
      <h4>Follow Us</h4>
      <div class="box">
        <a href=""><FaFacebookF></FaFacebookF></a> 
        <a href=""><FaInstagram></FaInstagram></a> 
        <a href=""><FaTwitter></FaTwitter></a> 
      </div>
    </div>
  </section>
  <footer class="footer_section">
  <div class="container">
    <p>© <span id="displayDateYear">Copyright 2024 </span>| Anonymous | All Rights Reserved.</p>
  </div>
</footer>
</>
  );
}

export default Footer;
