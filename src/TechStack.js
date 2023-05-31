import React from "react";
import { ReactComponent as Github } from "./Assets/github.svg";
import { ReactComponent as Html5 } from "./Assets/html.svg";
import { ReactComponent as PythonSVG } from "./Assets/python.svg";
import { ReactComponent as Cpp } from "./Assets/c++.svg";
import { ReactComponent as CSvg } from "./Assets/c.svg";
import { ReactComponent as Js } from "./Assets/javascript.svg";
import { ReactComponent as ReactSVG } from "./Assets/react.svg";
import { ReactComponent as DsaSvg } from "./Assets/Data.svg";

import { ReactComponent as Css3 } from "./Assets/css3.svg";
import RNative from "./Assets/REACTNATIVE.png";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div id="tech-stack" className="techStackContainer">
      <div>
        <p className="techHeader">Technologies</p>
        <div className="techWrapper">
          <div className="iconWrapper ">
            <p>Github</p>
            <Github className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>HTML5</p>
            <Html5 className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>Cascading StyleSheets</p>
            <Css3 className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>Vanilla JavaScript</p>
            <Js className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>ReactJS</p>
            <ReactSVG className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>React Native</p>
            <img alt="reactNative" src={RNative} className="iconSVG" />
          </div>
        </div>
        <p className="techHeader">Uni Programmes</p>
        <div className="uniWrapper">
          <div className="iconWrapper ">
            <p>C Programming</p>
            <CSvg className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>Python</p>
            <PythonSVG className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>Object Oriented Programming</p>
            <span className="oop">OOP</span>
          </div>
          <div className="iconWrapper ">
            <p>Data Structures & Algorithms</p>
            <DsaSvg className="iconSVG" />
          </div>
          <div className="iconWrapper ">
            <p>C++</p>
            <Cpp className="iconSVG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
