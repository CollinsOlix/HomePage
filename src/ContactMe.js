import React from "react";
import { ReactComponent as Linkedin } from "./Assets/linkedin.svg";
import { ReactComponent as Twitter } from "./Assets/twitter.svg";
import { ReactComponent as Instagram } from "./Assets/instagram.svg";
import { ReactComponent as WhatsApp } from "./Assets/whatsapp.svg";
import { ReactComponent as Github } from "./Assets/github.svg";
import Footer from "./Footer";
import "./ContactMe.css";

const styles = {
  contactMe: {
    backgroundColor: "#0A66C2",
    minHeight: "100dvh",
    maxHeight: "100vh",
    width: "100vw",
    position: "sticky",
    top: 0,
    padding: "8vw 0",
  },
};
const ContactMe = () => {
  return (
    <div id="contact-me" style={styles.contactMe}>
      <p className="contactMeText">
        Contact me to collaborate on projects together or to employ my skills to
        bring your ideas to life 😊
      </p>
      <div className="iconsContainer">
        <div className="iconWrapper ">
          <p>Github Repository</p>
          <a href="https://github.com/CollinsOlix">
            <Github style={{ width: "10.4em" }} />
          </a>
        </div>
        <div className="iconWrapper">
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/collins-olisakwe-6224b8229">
            <Linkedin
              style={{ width: "13rem", position: "relative", zIndex: 1 }}
            />
          </a>
        </div>
        <div className="iconWrapper">
          <p>Instagram</p>
          <a href="https://www.instagram.com/codhoo_">
            <Instagram
              style={{ width: "13rem", position: "relative", zIndex: 1 }}
            />
          </a>
        </div>
        <div className="iconWrapper">
          <p>Twitter</p>
          <a href="https://www.twitter.com/codhoo_">
            <Twitter
              style={{ width: "13rem", position: "relative", zIndex: 1 }}
            />
          </a>
        </div>
        <div className="iconWrapper">
          <p>+905488612003</p>
          <a href="https://www.wa.me/qr/F5NJ22I62THWL1">
            <WhatsApp
              style={{ width: "13rem", position: "relative", zIndex: 1 }}
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
