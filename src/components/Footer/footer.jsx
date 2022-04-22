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
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
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
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                  <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">ThemesCamp</a>
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
