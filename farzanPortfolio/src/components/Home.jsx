import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./Particle";
import "../scss/main.scss";
import self from "../assets/self.jpeg";



export default function Home() {
  return (
    <>
      <Particle id="tsparticles" className="particles-canvas"></Particle>
      <div className="home-img-text-holder">
        <div className="img">
          <img src={self} alt="farhikhta" className="self-portrait" />
        </div>
        <div className="text-container">
          <p className="name introText">Farhikhta Farzan</p>
          <p className="subText introText">An asipiring software developer</p>
        </div>
      </div>
    </>
  );
}
