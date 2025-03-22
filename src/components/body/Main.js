import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../../css/Main.css";


const Main = () => {
    return (
        <div>
       {/* Hero Section */}
<section className="hero py-5 bg-light" id="hero">
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* Image de profil - réduite et collée à gauche */}
      <div className="col-md-6 text-start ms-n5">
        <img src="/img/photo/Farid.png" alt="Farid Benjomaa" className="img-fluid profile-pic" />
      </div>

      {/* Contenu du texte */}
      <div className="col-md-6 text-md-center text-center py-5 my-5">
        <h1 className="hero-name fw-bold mt-5">Farid Benjomaa</h1>
        <h2 className="hero-title fst-italic ">Développeur Fullstack & Designer UI/UX</h2>
        <p className="hero-description py-5 mt-5">
          Je crée des expériences digitales uniques à travers le code, le design et l’animation.
        </p>

        {/* Boutons */}
        <div className="hero-buttons d-flex justify-content-center gap-3 me-5">
          <a href="#projects" className="btn btn-custom rounded-pill mx-5">Mes Projets</a>
          <a href="#contact" className="btn rounded-pill btn-custom-outline mx-5">Me Contacter</a>
        </div>
      </div>
    </div>
  </div>
</section>

  
        </div>
    );
};

export default Main;