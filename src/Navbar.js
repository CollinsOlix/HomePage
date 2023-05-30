import Container from "react-bootstrap/Container";
import MyAvatar from "./Avatar";
import "./navbar.css";

function MyNavbar() {
  return (
    <div className="mynavbar">
      <Container className="container">
        <a href="#">
          <MyAvatar />
        </a>
        <div className="mynav-items">
          <a className="navlinks" href="#aboutme">{`<whoami/>`}</a>
          <a className="navlinks" href="#tech-stack">{`<tech-stack/>`}</a>
          <a className="navlinks" href="#contact-me">{`<contact-me/>`}</a>
        </div>
      </Container>
    </div>
  );
}

export default MyNavbar;
