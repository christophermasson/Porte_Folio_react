import "./works.scss";
import Carousel from "react-bootstrap/Carousel";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="right">
        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block imgCarou"
                src="assets/Quizz.PNG"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="textCarou">
                  <p>Un petit quizz, réaliser en HTML, CSS et javascript</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imgCarou"
                src="assets/battleship.PNG"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="textCarou">
                  <p>
                    Battleship, réaliser en javaScrip. Bot 3 niveaux de
                    difficultés, et des effets visuel et sonore.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imgCarou"
                src="assets/puissance4.PNG"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="textCarou">
                  <h3>Projet Epitech Puissance 4</h3>
                  <p>Un puissance 4 Réaliser en javaScript.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="left">
        <p className="p_work">
          Voici un aperçu de mes projets epitech en JavaScript et React pour mes
          projets personelle. Je pratique aussi le php à épitech quelques
          projets seront sur mon gitHub.
        </p>
        <p className="p_work">
          JavaScript est pour moi un langage avec beaucoup d'outil pour le web
          ainsi que le mobile. Mon temps libre est consacré à pousser mes
          limites sur ce language et proposer des interfaces moderne et simple
          aux utilisateurs.
        </p>
        <p className="p_work">
          Mon Github "LIEN DU GIT" pour voir l'intégralité du projet.
        </p>
      </div>
    </div>
  );
}

// Présenter 5 projets avec photo

// bonus
// Rajouter un canvas pour avoir des précision sur le projet
