import React from "react";
import "./AboutMe.css";

import Lottie from "lottie-react";
import Coding from "./Assets/Coding.json";

const AboutMe = () => {
  return (
    <div className="coding">
      <Lottie animationData={Coding} loop={true} className="codingAnimation" />
      <div className="heroText">
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
          <div className="softWrapper">
            <p className="ozzy" style={{}}>
              Software & Mobile
            </p>
          </div>
          <div
            className="devWrapper"
            
          >
            <span className="ozzy">Development</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
