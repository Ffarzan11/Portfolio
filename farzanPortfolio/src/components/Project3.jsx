import todo from "../assets/todo.png";
import "../scss/main.scss";
import { easeIn, motion } from "framer-motion";
function project3() {
  return (
    <>
      <div className="container-flex projectContainer">
        <div className="projNameContainer">
          <p className="projectName p2name">
            Reminder <br />
            App
          </p>
          <p className="desc p2desc">
            {" "}
            Reminder app for android made
            <br /> with java using android studio
          </p>
          <button className="learnMoreBtn">
            <a
              href="https://github.com/Ffarzan11/android/tree/main/Reminder%20App"
              className="projLink"
              target="_blank"
            >
              {" "}
              Learn More
            </a>
          </button>
        </div>
        <motion.div
          className="projImageContainer"
          initial={{ x: 0 }}
          animate={{ x: -180 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: easeIn,
          }}
        >
          <div className="project3-backgroundBox"></div>
          <div className="image">
            <img src={todo} alt="project image" className="todoImage" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default project3;
