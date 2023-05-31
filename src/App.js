import "./App.css";
import MyNavbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
function App() {
  return (
    <>
      <MyNavbar />
      <div className="maincontainer">
        <div id="aboutme"></div>
        <AboutMe />
        <div id="techstack"></div>
        <TechStack />
        <div id="contactme"></div>
        <ContactMe />
      </div>
    </>
  );
}

export default App;
