import "bootstrap/dist/css/bootstrap.min.css";
import recipe from "../assets/movie.png";
import styles from "../scss/project.module.scss";
import { easeInOut, motion } from "framer-motion";

function Project2() {
  return (
    <>
      <div className={`container-flex ${styles.projectContainer}`}>
        <div className={styles.projNameContainer}>
          <p className={`${styles.projectName} ${styles.p2name}`}>
            Movie <br />
            Website
          </p>
          <p className={`${styles.desc} ${styles.p2desc}`}>
            A frontend website made with
            <br /> JS, HTML, and CSS
          </p>
          <button className={styles.learnMoreBtn}>
            <a
              href="https://github.com/Ffarzan11/Front-end-MovieDatabase"
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
          <div className={styles.project2BackgroundBox}></div>
          <div className={styles.image}>
            <img
              src={recipe}
              alt="project image"
              className={styles.movieImage}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Project2;
