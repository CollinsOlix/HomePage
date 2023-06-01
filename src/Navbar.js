import Container from "react-bootstrap/Container";
import MyAvatar from "./Avatar";
import "./navbar.css";

function MyNavbar() {
  return (
    <div className="mynavbar">
      <Container className="container">
        <div className="avatar">
          <MyAvatar />
        </div>
        <div className="mynav-items">
          <a
            onClick={() => document.querySelector("#aboutme").scrollIntoView()}
            className="navlinks"
            href="#aboutme"
          >{`<whoami/>`}</a>
          <a
            onClick={() =>
              document.querySelector("#techstack").scrollIntoView()
            }
            className="navlinks"
            href="#techstack"
          >{`<tech-stack/>`}</a>
          <a
            onClick={() =>
              document.querySelector("#contactme").scrollIntoView()
            }
            className="navlinks"
            href="#contactme"
          >{`<contact-me/>`}</a>
        </div>
      </Container>
    </div>
  );
}

export default MyNavbar;
