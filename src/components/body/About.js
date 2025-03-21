import React from "react";
import "../../css/About.css";




const About = () => {
  return (
    <section className="about-section " id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Image de profil avec contour */}
          <div className="col-md-6 about-image ">
          <img src="/img/photo/profilPicture.png" alt="Farid Benjomaa" className="img-fluid profile-pic" />
          </div>

          {/* Contenu texte */}
          <div className="col-md-6 about-text-content">
            <h2 className="about-title">À propos de Moi</h2>
            <p className="about-description">
              Je suis Farid, un développeur fullstack et designer UI/UX passionné
              par la création de solutions numériques performantes. Mon parcours
              m’a permis de travailler sur divers projets allant du développement
              d’applications web et mobiles à la conception d’interfaces intuitives et animées.
            </p>
            <p className="about-description">
              Grâce à mon expertise en PHP/Symfony et JavaScript (React.js, Vue.js),
              je développe des applications robustes et évolutives. Mon sens du design me pousse également
              à créer des interfaces modernes et fluides avec Adobe XD, Figma et After Effects.
              J’aime optimiser les performances, travailler sur des infrastructures cloud et implémenter
              des solutions DevOps (Docker, CI/CD, AWS).
            </p>
            <p className="about-description">
              Toujours en quête d’innovation, je cherche à allier performance et créativité
              pour offrir des expériences utilisateur uniques.
            </p>

            <p className="about-expertise">
              Explorez mes domaines d’expertise : <strong>Développement Web</strong>,
              <strong> Design UI/UX</strong> et <strong>Développement Mobile</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;