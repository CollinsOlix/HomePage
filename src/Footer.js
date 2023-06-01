import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <h5 style={{ textAlign: "center" }}>
        Special Thanks and Attributions go to
      </h5>
      <div className="mentions">
        <div className="rowAttr">
          <div className="column">
            <p>Icon54_PythonSVG_from_IconScout.com</p>
            <p>IconMafia__C_LangSVG_from_IconScout.com</p>
            <p>IconMafia__Cpp_LangSVG_from_IconScout.com</p>
          </div>
          <div className="column">
            <p>UniconsFont_Instagram SVG_from_IconScout.com</p>
            <p>UniconsFont_Twitter SVG_from_IconScout.com</p>
            <p>UniconsFont_WhatsappSVG_from_IconScout.com</p>
            <p>KreasiKanvas_DSASVG_from_IconScout.com</p>
          </div>
        </div>
        <div className="rowAttr">
          <div className="column">
            <p>VjParihar_LinkedInSVG_from_IconScout.com</p>
            <p>JagathishSaravanan_JavaScriptSVG_from_IconScout.com</p>
            <p>Icon54_CSS3SVG_from_IconScout.com</p>
          </div>
          <div className="column">
            <p>Icon54_HTML5SVG_from_IconScout.com</p>
            <p>SamatOledara_ReactSVG_from_IconScout.com</p>
            <p>Suayip_CodingAnimation_from_LottieFiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
