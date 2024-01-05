import React from "react";
import contactimg from "../assets/contactimg.png";
import "../css files/ContactUs.css"

function ContactUs() {
  return (
    <div className="container-fluid">
      <div class="heading_container">
            <h2>Contact Us</h2>
      </div>
      <div class="row px-3 py-5">
        <div class="col-md-6 contact_section">
          <form action="#" method="post">
          <div>
            <input type="text" placeholder="Name" fdprocessedid="6gbrm"/>
          </div>
          <div>
            <input type="text" placeholder="Phone Number" fdprocessedid="9ykr8n"/>
          </div>
          <div>
            <input type="email" placeholder="Email" fdprocessedid="ifgt3c"/>
          </div>
          <div>
            <input type="text" class="message-box" placeholder="Message" fdprocessedid="kedw1d"/>
          </div>
          <div class="d-flex">
            <button fdprocessedid="leew5l">SEND</button>
          </div>
          </form>
        </div>
        <div className="col-md-6 myimg">
          <img src={contactimg}/>
        </div>
      </div>
    </div>
);
}

export default ContactUs;
