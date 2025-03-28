import React from 'react';
import "../../css/Services.css";

const Services = () => {
  return (
    <div className="services-container bg-light">
      <div className="hero-section text-center bg-light">
        <h1>Mes Services : Une Expertise Complète en Développement & Design</h1>
        <p>Développement, UI/UX, Motion Design, Identité Visuelle : je conçois des solutions digitales performantes dans les domaines où j'excelle :</p>
      </div>

      {/* Section 1 */}
      <div className="services-section section-dark">
        <div className="services-grid">
          <div className="vertical-line"></div>
          <div className="icon developpement-web-icon"></div>
          <div className="service-block developpement-web right-align">
            <div className="service-content">
              <h3>Développement Web & API</h3>
              <ul>
                <li>Création d'applications sur mesure</li>
                <li>Conception d'architectures robustes</li>
                <li>Technologies : React, Node.js, API REST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="services-section section-bg">
        <div className="services-grid">
          <div className="vertical-line"></div>
          <div className="icon design-uiux-icon"></div>
          <div className="service-block design-uiux left-align">
            <div className="service-content">
              <h3>Design UI/UX & Prototypage</h3>
              <ul>
                <li>Conception d'interfaces modernes</li>
                <li>Prototypage et optimisation pour l'utilisateur</li>
                <li>Outils : Figma, Adobe XD</li>
              </ul>
            </div>
          </div>
          <div className="icon motion-design-icon"></div>
          <div className="service-block motion-design right-align">
            <div className="service-content">
              <h3>Motion Design & Animations UI</h3>
              <ul>
                <li>Création d'animations engageantes</li>
                <li>Amélioration de l'expérience utilisateur</li>
                <li>Outils : After Effects, Lottie</li>
              </ul>
            </div>
          </div>
          <div className="icon logos-identite-icon"></div>
          <div className="service-block logos-identite left-align">
            <div className="service-content">
              <h3>Création de Logos & Identité Visuelle</h3>
              <ul>
                <li>Conception de logos professionnels</li>
                <li>Création d'identités visuelles uniques</li>
                <li>Outils : Adobe Illustrator, Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="services-section section-dark">
        <div className="services-grid">
          <div className="vertical-line"></div>
          <div className="icon developpement-mobile-icon"></div>
          <div className="service-block developpement-mobile right-align">
            <div className="service-content">
              <h3>Développement Mobile (iOS & Android)</h3>
              <ul>
                <li>Applications mobiles fluides et optimisées</li>
                <li>Technologies : Swift, Kotlin, React Native</li>
              </ul>
            </div>
          </div>
          <div className="icon optimisation-icon"></div>
          <div className="service-block optimisation">
            <div className="service-content">
              <h3>Optimisation & Déploiement</h3>
              <ul>
                <li>Amélioration des performances</li>
                <li>CI/CD et hébergement cloud</li>
                <li>Outils : AWS, Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;