import "bootstrap/dist/css/bootstrap.min.css";
import style from "../scss/about.module.scss";
function AboutMe() {
  return (
    <>
      <div className={`container ${style.aboutMeContainer}`}>
        <p className={style.aboutMeDesc}>
          {" "}
          Hello! I am Farhikhta Farzan. I am currently pursuing my Bachelor’s
          degree in computer science. My journey so far has been a mix of
          software development and product management, with hands-on experience
          in C++, Java, Express.js, React, MongoDB, MySQL, and Python. When I am
          not coding, I am probably diving into a good book. If you would like to
          connect, discuss tech, or share book recommendations, feel free to DM
          me on LinkedIn!
        </p>
      </div>
    </>
  );
}

export default AboutMe;
