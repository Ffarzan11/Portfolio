import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Project3 from "./components/Project3";
import Project2 from "./components/Project2";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { HashLink } from "react-router-hash-link";
import style from "./scss/main.module.scss";

function App() {
  return (
    <div className={`container-flex ${style.mainBody}`}>
      <div className={style.navigationBar}>
        <nav>
          <HashLink smooth to="/#Home" className={style.navLink}>
            Home
          </HashLink>
          <HashLink smooth to="/#Projects" className={style.navLink}>
            Projects
          </HashLink>
          <HashLink smooth to="/#Aboutme" className={style.navLink}>
            About me
          </HashLink>
          <HashLink smooth to="/#Contact" className={style.navLink}>
            Contact
          </HashLink>
          <a href="https://docs.google.com/document/d/1xYXIIDSWYGGnjCrGnaCplF0eW-sq3q3zHl4_lxN1Iag/edit?usp=sharing" target="_blank" className={style.navLink}>Resume</a>
        </nav>
      </div>
      <div id="Home" className={style.section}>
        <Home />
      </div>
      <div id="Projects" className={style.section}>
        <p className={style.projectHeader}> Projects</p>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>

      <div id="Aboutme" className={style.section}>
        <p className={style.aboutMeHeader}>About Me</p>
        <AboutMe />
      </div>
      <div id="contact">
        <Contact/>
      </div>

      <div id="Contact" className={style.section}></div>
    </div>
  );
}

export default App;
