import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Areas of Expertise
              </h6>
              <h3 className="wow color-font">
                We help to create strategies, design &amp; development.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-light"></i>
              </span>
              <h5>Creative always</h5>
              <p>
              Creativity can solve almost any problem. Imagine what you desire, our team will create it!
              </p>
              <Link href="/about/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-display1"></i>
              </span>
              <h5>Branding strategy</h5>
              <p>
              Let us create a strong and positive perception of your company, it is more than just a logo! 
              </p>
              <Link href="/about/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-monitor"></i>
              </span>
              <h5>Software development</h5>
              <p>
              Plan tailored software solutions for you to achieve operational excellence and deliver them fast and error-free. 
              </p>
              <Link href="/about/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="pe-7s-browser"></i>
              </span>
              <h5>Interface design</h5>
              <p>
              Our UI/UX experts will work with you to create a design that matches your brand while giving your customers a seamless user experience that will delight them.
              </p>
              <Link href="/about/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
