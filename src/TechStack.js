import React from "react";
import { ReactComponent as Github } from "./Assets/github.svg";
import { ReactComponent as Html5 } from "./Assets/html5.svg";
import { ReactComponent as PythonSVG } from "./Assets/python.svg";
import { ReactComponent as Cpp } from "./Assets/c++.svg";
import { ReactComponent as CSvg } from "./Assets/c.svg";
import { ReactComponent as Js } from "./Assets/javascript.svg";
import { ReactComponent as ReactSVG } from "./Assets/react.svg";
import { ReactComponent as Css3 } from "./Assets/css3.svg";
import RNative from "./Assets/REACTNATIVE.png";

const styles = {
  mycontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "sticky",
    backgroundColor: "#42a5f5",
    padding: "8vh 6vh",
    top: 0,
  },
};

const TechStack = () => {
  return (
    <div id="tech-stack" style={styles.mycontainer}>
      <div style={styles.reachMe}>
        <p
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "90px",
            borderBottom: "10px solid white",
          }}
        >
          Tech Stack
        </p>
        <div
          style={{
            maxWidth: "80vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Github style={{ width: "130px" }} />
          <div
            style={{
              width: "130px",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid grey",
              borderRadius: "30px",
            }}
          >
            <Html5 />
          </div>
          <div
            style={{
              width: "130px",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "5px solid grey",
              borderRadius: "30px",
            }}
          >
            <Css3 />
          </div>
          <Js style={{ width: "130px" }} />
          <ReactSVG style={{ width: "130px" }} />
          <img alt="reactNative" src={RNative} style={{ width: "130px" }} />
        </div>
        <p
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "90px",
            borderBottom: "10px solid white",
          }}
        >
          Uni Programmes
        </p>
        <div
          style={{
            maxWidth: "80vw",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Cpp />
          <CSvg />
          <PythonSVG style={{ width: "130px" }} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
