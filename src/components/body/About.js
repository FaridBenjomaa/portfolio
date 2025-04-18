import React from "react";
import "../../css/About.css";
import Caroussel from "./Caroussel";

const About = () => {
  return (
    <div>
      <section className="container-fluid about-section" id="about">
        <div className="col-12 py-3 py-md-5">
          <h2 className="about-title d-flex justify-content-center justify-content-md-end mx-2 mx-md-5 py-3 py-md-5">À propos de Moi</h2>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <img src="/img/photo/profilPicture.png" alt="Farid Benjomaa" className="img-fluid profile-pic-rounded mb-4 mb-md-5" />
          </div>
          <div className="col-12 col-md-6 p-3 p-md-4">
            <p className="about-description py-2 py-md-3">
              Je suis Farid, un développeur fullstack et designer UI/UX passionné
              par la création de solutions numériques performantes. Mon parcours
              m'a permis de travailler sur divers projets allant du développement
              d'applications web et mobiles à la conception d'interfaces intuitives et animées.
            </p>
            <p className="about-description py-2 py-md-3">
              Grâce à mon expertise en PHP/Symfony et JavaScript (React.js, Vue.js),
              je développe des applications robustes et évolutives. Mon sens du design me pousse également
              à créer des interfaces modernes et fluides avec Adobe XD, Figma et After Effects.
              J'aime optimiser les performances, travailler sur des infrastructures cloud et implémenter
              des solutions DevOps (Docker, CI/CD, AWS).
            </p>
            <p className="about-description py-2 py-md-3">
              Toujours en quête d'innovation, je cherche à allier performance et créativité
              pour offrir des expériences utilisateur uniques.
            </p>
          </div>
          <div className="col-12">
            <p className="about-expertise d-flex flex-column flex-md-row justify-content-center align-items-center mx-2 mx-md-5 py-3 py-md-5">
              Explorez mes domaines d'expertise :
              <span className="expertise-items mt-2 mt-md-0">
                <strong className="mx-1 mx-md-2">Développement Web</strong>,
                <strong className="mx-1 mx-md-2">Design UI/UX</strong> et
                <strong className="mx-1 mx-md-2">Développement Mobile</strong>.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Caroussel />
    </div>
  );
};

export default About;