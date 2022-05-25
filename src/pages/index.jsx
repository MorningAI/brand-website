import React from "react";
import Navbar from "../components/Navbar/navbar";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import LightTheme from "../layouts/Light";
import Works3 from "../components/Works3/works3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Intro4 from "../components/Intro4/intro4";
import AboutUs3 from "../components/About-us3/about-us3";
import Services3 from "../components/Services3/services3";
import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";
import Sound from 'react-sound';
import loseYourself from '../data/backgroundSound.mp3';
const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Sound url={loseYourself} playStatus={Sound.status.PLAYING} playFromPosition={0} loop={true} />
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro4  />
      <AboutUs3 />
      <Services3 />
      <MinimalArea2 />
      <Team />
      <Blogs4 />
      <CallToAction />
      <Footer />
    </LightTheme>
  );
};

export default Homepage5;
