import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./Particle";
import style from "../scss/home.module.scss";
import self from "../assets/self.jpeg";



export default function Home() {
  return (
    <>
      <Particle id="tsparticles" className="particles-canvas"></Particle>
      <div className={style.homeImgTextHolder}>
        <div className={style.img}>
          <img src={self} alt="farhikhta" className={style.selfPortrait} />
        </div>
        <div className={style.textContainer}>
          <p className={`${style.name} ${style.introText}`}>Farhikhta Farzan</p>
          <p className={`${style.subText} ${style.introText}`}>An aspiring software developer</p>
        </div>
      </div>
    </>
  );
}
