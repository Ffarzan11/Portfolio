import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project3 from "./components/Project3";
import { HashLink } from "react-router-hash-link";
import './scss/main.scss';


function App() {
  return (
    <>
      <div className="container-flex main-body">
        <div className="navigation-bar">
          <nav>
            <HashLink smooth to="/#Home" className="navLink">
              Home
            </HashLink>
            <HashLink smooth to="/#Projects" className="navLink">
              Projects
            </HashLink>
            <HashLink smooth to="/#Aboutme" className="navLink">
              About me
            </HashLink>
            <HashLink smooth to="/#Contact" className="navLink">
              Contact
            </HashLink>
          </nav>
          <div id="Home" className="section">
            <Home></Home>
          </div>
          <div id="Projects" className="section">
            <p className="projectHeader"> Projects</p>
            <Project1></Project1>
            <Project3></Project3>
          </div>
          <div id="Aboutme" className="section"></div>
          <div id="Contact" className="section"></div>
        </div>
      </div>
    </>
  );
}

export default App;
