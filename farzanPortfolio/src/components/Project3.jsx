import "bootstrap/dist/css/bootstrap.min.css";
import todo from "../assets/todo.png";
import styles from "../scss/project.module.scss";
import { easeInOut, motion } from "framer-motion";

function Project3() {
  return (
    <div className={`container-flex ${styles.projectContainer}`}>
      <div className={styles.projNameContainer}>
        <p className={`${styles.projectName} ${styles.p3name}`}>
          Reminder <br />
          App
        </p>
        <p className={`${styles.desc} ${styles.p3desc}`}>
          Reminder app for android made
          <br /> with java using android studio
        </p>
        <button className={styles.learnMoreBtn}>
          <a
            href="https://github.com/Ffarzan11/android/tree/main/Reminder%20App"
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
        <div className={styles.project3BackgroundBox}></div>
        <div className={styles.image}>
          <img src={todo} alt="project image" className={styles.todoImage} />
        </div>
      </motion.div>
    </div>
  );
}

export default Project3;
