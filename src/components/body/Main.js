import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Main.css";

const Main = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-light" id="hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Image de profil */}
            <div className="col-lg-4 col-md-8 mx-auto mx-lg-0 text-center text-lg-start mb-4 mb-lg-0">
              <img 
                src="/img/photo/Farid.png" 
                alt="Farid Benjomaa" 
                className="img-fluid profile-pic" 
              />
            </div>
            
            {/* Contenu du texte */}
            <div className="col-lg-8 text-center text-lg-center">
              <h1 className="hero-name fw-bold">Farid Benjomaa</h1>
              <h2 className="hero-title fst-italic">Développeur Fullstack & Designer UI/UX</h2>
              <p className="hero-description my-4">
                Je crée des expériences digitales uniques à travers le code, le design et l'animation.
              </p>
              
              {/* Boutons */}
              <div className="hero-buttons d-flex flex-column flex-md-row justify-content-center gap-3">
                <Link to="/projets" className="btn btn-custom rounded-pill">Mes Projets</Link>
                <Link to="/contact" className="btn rounded-pill btn-custom-outline">Me Contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;