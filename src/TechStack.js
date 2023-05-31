import React from "react";
import { ReactComponent as Github } from "./Assets/github.svg";
import { ReactComponent as Html5 } from "./Assets/html5.svg";
import { ReactComponent as PythonSVG } from "./Assets/python.svg";
import { ReactComponent as Cpp } from "./Assets/c++.svg";
import { ReactComponent as CSvg } from "./Assets/c.svg";
import { ReactComponent as Js } from "./Assets/javascript.svg";
import { ReactComponent as ReactSVG } from "./Assets/react.svg";
import { ReactComponent as DsaSvg } from "./Assets/Data.svg";

import { ReactComponent as Css3 } from "./Assets/css3.svg";
import RNative from "./Assets/REACTNATIVE.png";
import "./TechStack.css"

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
          Technologies
        </p>
        <div
          style={{
            width: "90vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >

          <div className="iconWrapper ">
            <p>Github</p>
          <Github style={{ width: "10.4em" }} />
            </div>
          <div className="iconWrapper ">
            <p>HyperText Markup Language</p>
          <div
            style={{
              width: "10.4em",
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
            </div>
          <div className="iconWrapper ">
            <p>Cascading StyleSheets</p>
            <div
              style={{
                width: "10.4em",
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
          </div>
          <div className="iconWrapper ">
            <p>Vanilla JavaScript</p>
            <Js style={{ width: "10.4em" }} />
          </div>
          <div className="iconWrapper ">
            <p>ReactJS</p>
            <ReactSVG style={{ width: "10.4em" }} />
          </div>
          <div className="iconWrapper ">
            <p>React Native</p>
            <img alt="reactNative" src={RNative} style={{ width: "10.4em" }} />
          </div>
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
            alignItems: "start",
          }}
        >
          <div className="iconWrapper ">
            <p>C++</p>
            <Cpp style={{ width: "9em" }} />
          </div>
          <div className="iconWrapper ">
            <p>C Programming</p>
            <CSvg style={{ width: "10.4em" }} />
          </div>
          <div className="iconWrapper ">
            <p>Python</p>
            <PythonSVG style={{ width: "10.4em" }} />
          </div>
          <div className="iconWrapper ">
            <p>Object Oriented Programming</p>
            <span
              style={{
                fontSize: "10.4em",
                padding: 0,
                margin: 0,
                lineHeight: 1,
                letterSpacing: "0px",
                alignSelf: "start",
              }}
            >
              OOP
            </span>
          </div>
          <div className="iconWrapper ">
            <p>Data Structures & Algorithms</p>
            <DsaSvg style={{ width: "10.4em" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
