import "bootstrap/dist/css/bootstrap.min.css";
import recipe from "../assets/recipe.png";
import styles from "../scss/project.module.scss";
import { easeInOut, motion } from "framer-motion";

function Project1() {
  return (
    <>
      <div className={`container-flex ${styles.projectContainer}`}>
        <div className={styles.projNameContainer}>
          <p className={styles.projectName}>
            Recipe <br />
            Website
          </p>
          <p className={styles.desc}>
            A full stack website including
            <br /> chatbot made with express JS,
            <br /> HTML, CSS, and MongoDB
          </p>
          <button className={styles.learnMoreBtn}>
            <a
              href="https://github.com/Ffarzan11/Recipe-Website"
              className={styles.projLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </button>
        </div>
        <motion.div
          className={styles.projImageContainer}
          initial={{ x: 0 }}
          whileInView={{ x: -180 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: easeInOut,
          }}
          
        >
          <div className={styles.backgroundBox}></div>
          <div className={styles.image}>
            <img
              src={recipe}
              alt="project image"
              className={styles.recipeImage}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Project1;
