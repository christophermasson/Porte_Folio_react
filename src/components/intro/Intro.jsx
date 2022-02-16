import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Ambitieux et Rigoureux", "Motivé", "Passionné"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="imgContainer">
        <img className="img" src="assets/profil.JPG" alt="" />
        <p className="idendite">Christopher MASSON</p>
      </div>
      <div className="textIntro">
        <p className="introh1">
          Etudiant <span ref={textRef}></span>
        </p>
        <p className="introp">
          Le code est avant tout une passion, <br></br>
          Réaliser une App est vraiment gratifiant.<br></br>
          Bonne visite. :D
        </p>
        <a href="#portfolio">
          <img className="fleche" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
