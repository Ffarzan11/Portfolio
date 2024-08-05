import "bootstrap/dist/css/bootstrap.min.css";
import style from "../scss/contact.module.scss";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
function contact() {
  return (
    <>
      <div className={style.contactContainer}>
        <a href="https://github.com/Ffarzan11" className={style.contact} target="_blank">
          <img src={github} className={style.git}></img>
        </a>
        <a href="https://www.linkedin.com/in/farhikhta-farzan/" className={style.contact} target="_blank">
          <img src={linkedIn} className={style.linked}></img>
        </a>
      </div>
    </>
  );
}

export default contact;
