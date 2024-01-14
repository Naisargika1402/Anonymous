import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

const HomeServices = () =>{
    return(
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
    )
}

export default HomeServices;