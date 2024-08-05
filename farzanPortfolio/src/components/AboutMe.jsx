import "bootstrap/dist/css/bootstrap.min.css";
import style from "../scss/about.module.scss";
function AboutMe() {
  return (
    <>
      <div className={`container ${style.aboutMeContainer}`}>
        <p className={style.aboutMeDesc}>
          {" "}
          Hello! I am Farhikhta Farzan. I am currently pursuing my Bachelor’s
          degree on computer science. I am interested in software development.
          My experiences include software development and product management. I
          have experience working with C++, Java, Express.js, React, MongoDB,
          MySQL, and Python. If you want to learn more about me, feel free to dm
          me on LinkedIn!
        </p>
      </div>
    </>
  );
}

export default AboutMe;
