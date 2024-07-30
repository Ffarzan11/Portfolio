import recipe from "../assets/recipe.png";
import "../scss/main.scss";
import { easeIn, motion } from "framer-motion";
function project1() {
  return (
    <>
      <div className="container-flex projectContainer">
        <div className="projNameContainer">
          <p className="projectName">
            Recipe <br />
            Website
          </p>
          <p className="desc">
            {" "}
            A full stack website including
            <br /> chatbot made with express JS,
            <br /> html, css and, MongoDB
          </p>
          <button className="learnMoreBtn">
            <a
              href="https://github.com/Ffarzan11/Recipe-Website"
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
          <div className="backgroundBox"></div>
          <div className="image">
            <img src={recipe} alt="project image" className="recipeImage" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default project1;
