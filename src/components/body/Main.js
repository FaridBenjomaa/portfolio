import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../../css/Main.css";


const Main = () => {
    return (
        <div>
       {/* About Section */}
<section className="hero py-5 bg-light" id="hero">
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* Image de profil - réduite et collée à gauche */}
      <div className="col-md-6 text-start ms-n5">
        <img src="/img/photo/Farid.png" alt="Farid Benjomaa" className="img-fluid profile-pic" />
      </div>

      {/* Contenu du texte */}
      <div className="col-md-6 text-md-center text-center">
        <h1 className="hero-name fw-bold">Farid Benjomaa</h1>
        <h2 className="hero-title fst-italic">Développeur Fullstack & Designer UI/UX</h2>
        <p className="hero-description pt-5 pb-5">
          Je crée des expériences digitales uniques à travers le code, le design et l’animation.
        </p>

        {/* Boutons */}
        <div className="hero-buttons d-flex justify-content-between mx-5">
          <a href="#projects" className="btn btn-custom rounded-pill me-3 ">Mes Projets</a>
          <a href="#contact" className="btn rounded-pill btn-custom-outline">Me Contacter</a>
        </div>
      </div>
    </div>
  </div>
</section>

  
        </div>
    );
};

export default Main;