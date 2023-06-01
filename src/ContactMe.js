import React from "react";
import { ReactComponent as Linkedin } from "./Assets/linkedin.svg";
import { ReactComponent as Twitter } from "./Assets/twitter.svg";
import { ReactComponent as Instagram } from "./Assets/instagram.svg";
import { ReactComponent as WhatsApp } from "./Assets/whatsapp.svg";
import { ReactComponent as Github } from "./Assets/github.svg";
import Footer from "./Footer";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contactMe">
      <p className="contactMeText">
        Contact me to collaborate on projects together or to employ my skills to
        bring your ideas to life 😊
      </p>
      <div className="iconsContainer">
        <div className="iconWrapper ">
          <p>Github Repository</p>
          <a href="https://github.com/CollinsOlix">
            <Github className="contactIcons"  />
          </a>
        </div>
        <div className="iconWrapper">
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/collins-olisakwe-6224b8229">
            <Linkedin className="contactIcons" />
          </a>
        </div>
        <div className="iconWrapper">
          <p>Instagram</p>
          <a href="https://www.instagram.com/codhoo_">
            <Instagram className="contactIcons" />
          </a>
        </div>
        <div className="iconWrapper">
          <p>Twitter</p>
          <a href="https://www.twitter.com/codhoo_">
            <Twitter className="contactIcons" />
          </a>
        </div>
        <div className="iconWrapper">
          <p>+905488612003</p>
          <a href="https://www.wa.me/qr/F5NJ22I62THWL1">
            <WhatsApp className="contactIcons" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
