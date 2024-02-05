import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

const HomeServices = () => {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2> Our Services</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s1} alt="Maintenance Service" />
              </div>
              <div className="detail-box">
                <h5>Maintenance</h5>
                <p>
                  Keep your property in top-notch condition with our
                  comprehensive maintenance services. Our team ensures
                  everything runs smoothly, so you can focus on what matters.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s2} alt="Electrical Service" />
              </div>
              <div className="detail-box">
                <h5>Electrical</h5>
                <p>
                  Trust our skilled electricians to handle all your electrical
                  needs. From installations to repairs, we ensure your
                  electrical systems are safe and functioning optimally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s3} alt="Plumbing Service" />
              </div>
              <div className="detail-box">
                <h5>Plumbing</h5>
                <p>
                  Our plumbing services guarantee efficient solutions for your
                  plumbing issues. From leaks to installations, we've got your
                  plumbing needs covered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s4} alt="Food Services" />
              </div>
              <div className="detail-box">
                <h5>Food Services</h5>
                <p>
                  Experience culinary excellence with our food services. From
                  catering to personalized meal plans, we bring delicious
                  solutions to your table.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s5} alt="Cleaning Service" />
              </div>
              <div className="detail-box">
                <h5>Cleaning</h5>
                <p>
                  Enjoy a clean and organized space with our professional
                  cleaning services. We take care of the dirt, so you can enjoy
                  a spotless environment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src={s6} alt="Grooming Service" />
              </div>
              <div className="detail-box">
                <h5>Grooming</h5>
                <p>
                  Indulge in our grooming services designed to enhance your
                  personal style. From haircuts to styling, we ensure you leave
                  feeling confident.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="#" style={{ textDecoration: "none" }}>
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
