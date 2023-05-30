import React from "react";
import "./AboutMe.css";

import Lottie from "lottie-react";
import Coding from "./Assets/Coding.json";
const styles = {
  aboutme: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "white",
    padding: "8vh 6vh",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
  },
};
const AboutMe = () => {
  return (
    <div id="aboutme" style={styles.aboutme}>
      <Lottie
        animationData={Coding}
        loop={true}
        style={{ width: "40vw", marginRight: "3vh" }}
      />
      <div
        style={{
          borderBottom: "10px solid rgb(10,102,194)",
          width: "55vw",
        }}
      >
        <h1>
          Hi, I am <span style={{ color: "#0A66C2" }}>Collins</span> ✌🏽, And I
          love
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              margin: "70px 0 35px 0",
            }}
          >
            <p
              className="ozzy"
              style={{
                fontSize: "7vw",
                fontWeight: 700,
                lineHeight: "1px",
              }}
            >
              Software & Mobile
            </p>
          </div>
          <div
            style={{
              margin: "100px 0 0 0",
            }}
          >
            <span
              className="ozzy"
              style={{
                lineHeight: "5px",
                fontSize: "11vw",
              }}
            >
              Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
