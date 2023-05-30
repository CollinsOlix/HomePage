import React from "react";
import { ReactComponent as Linkedin } from "./Assets/linkedin.svg";
import { ReactComponent as Github } from "./Assets/github.svg";
import Footer from "./Footer";

const styles = {
  contactMe: {
    backgroundColor: "#0A66C2",
    minHeight: "100dvh",
    maxHeight: "100vh",
    width: "100vw",
    position: "sticky",
    top: 0,
  },
};
const ContactMe = () => {
  return (
    <div id="contact-me" style={styles.contactMe}>
      ContactMe
      <Linkedin style={{ width: "250px" }} />
      <Github style={{ width: "250px" }} />
      <Footer />
    </div>
  );
};

export default ContactMe;
