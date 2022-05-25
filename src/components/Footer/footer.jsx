/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from 'next/router'

const Footer = ({ hideBGCOLOR }) => {
  const router = useRouter()
  console.log(router.pathname.split("/"));
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Address</h6>
                    <p>Algiers, Algeria</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>ai.morning2021@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+213781799991
</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Sitemap</h5>
              </div>
              <ul>
                <li  className={router.pathname == "/" ? "link-is-active" : ""}>
                 <a href="/">Home</a>
                </li>
                <li className={router.pathname == "/about" ? "link-is-active" : ""}>
                  <a href="/about">About</a>
                </li>
                <li className={router.pathname == "/our-projects" ? "link-is-active" : ""}>
                <a href="/our-projects">Works</a>
                </li>
                <li className={router.pathname == "/blog" ? "link-is-active" : ""}><a href="/blog">Blog</a></li>
                <li className={router.pathname == "/contact" ? "link-is-active" : ""}><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
{/*                 <a href="#0">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/morning_ai_">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022 Made with <i class="icon ion-heart"></i> By Our Team at 
                  <Link
                    href="/"
                    
                  >
                    <a target="_blank"> Morning AI </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
