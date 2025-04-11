import React from 'react';
import "../../css/Services.css";

const ServiceCard = ({ title, items, titleClass, listClass, blockClass }) => (
  <div className={`service-block ${blockClass}`}>
    <div className="service-content">
      <h3 className={titleClass} dangerouslySetInnerHTML={{ __html: title }} />
      <ul className={listClass}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="services-container bg-light">
      <div className="hero-section text-center bg-light">
        <h1>Mes Services : Une Expertise Complète en Développement & Design</h1>
        <p>
          Développement, UI/UX, Motion Design, Identité Visuelle : je conçois des solutions digitales performantes dans les domaines où j'excelle :
        </p>
      </div>

      <div className="global-vertical-line"></div>

      {/* Section 1 */}
      <div className="services-section section-bg">
        <div className="services-grid">
          <div className="icon developpement-web-icon"></div>
          <ServiceCard
            title={`Développement Web & API`}
            items={[
              "Création d'applications sur mesure",
              "Conception d'architectures robustes",
              "Technologies : React, Node.js, API REST",
              "Sécurité : Authentification JWT, protection des routes",
              "Optimisation des performances backend & frontend",
              "Tests automatisés (unitaires & fonctionnels)",
              "CI/CD : Intégration et déploiement automatisé",
              "Documentation d'API via Swagger / Postman"
            ]}
            titleClass="h3-secondary"
            listClass="ul-secondary"
            blockClass="developpement-web right-align"
          />
        </div>
      </div>

      {/* Section 2 */}
      <section className="services-section section-dark">
        <div className="services-grid">
          <div className="icon design-uiux-icon"></div>
          <ServiceCard
            title={`Design UI/UX & Prototypage`}
            items={[
              "Conception d'interfaces modernes",
              "Prototypage et optimisation pour l'utilisateur",
              "Outils : Figma, Adobe XD",
              "Compétences : Wireframing, Prototypage interactif, Design system, Responsive Design,",
              "Ergonomie web, Tests utilisateurs, Adobe XD, Figma"
            ]}
            titleClass="h3-primary"
            listClass="ul-primary"
            blockClass="design-uiux left-align"
          />
        </div>
      </section>

      {/* Section 3 */}
      <div className="services-section section-dark">
        <div className="services-grid">
          <div className="icon motion-design-icon"></div>
          <ServiceCard
            title={`Motion Design & Animations UI`}
            items={[
              "Création d'animations engageantes",
              "Amélioration de l'expérience utilisateur",
              "Outils : After Effects, Lottie, Adobe Premiere",
              "Compétences : Animation UI/UX, transitions interactives, storytelling visuel"
            ]}
            titleClass="h3-primary"
            listClass="ul-primary"
            blockClass="motion-design right-align"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="services-section section-dark">
        <div className="services-grid">
          <div className="icon logos-identite-icon"></div>
          <ServiceCard
            title={`Création de Logos <br /> & <br /> Identité Visuelle`}
            items={[
              "Conception de logos professionnels",
              "Création d'identités visuelles uniques",
              "Outils : Adobe Illustrator, Photoshop",
              "Compétences : création vectorielle, charte graphique, design typographique",
              "Supports : cartes de visite, affiches, mockups web & print"
            ]}
            titleClass="h3-primary"
            listClass="ul-primary"
            blockClass="logos-identite left-align"
          />
        </div>
      </div>

      {/* Sections 5 et 6 */}
      <section className="services-section section-bg">
        <div className="services-grid">
          <div className="icon developpement-mobile-icon"></div>
          <ServiceCard
            title={`Développement Mobile <br /> (iOS & Android)`}
            items={[
              "Applications mobiles fluides et optimisées",
              "Expérience utilisateur mobile-first",
              "Intégration avec Firebase, API REST",
              "Déploiement App Store & Google Play",
              "Technologies : Swift, Kotlin, React Native, Flutter(Dart)",
              "Compétences : gestion des états, navigation, base de données embarquées",
              "Fonctionnalités : notifications push, géolocalisation, accès natif caméra"
            ]}
            titleClass="h3-secondary"
            listClass="ul-secondary"
            blockClass="developpement-mobile right-align"
          />
        </div>

        <div className="services-grid">
          <div className="icon optimisation-icon"></div>
          <ServiceCard
            title={`Optimisation & Déploiement`}
            items={[
              "Amélioration des performances",
              "CI/CD et hébergement cloud",
              "Outils : AWS, Docker, OVH, Infomaniak",
              "Compétences : GitLab CI, Nginx, PM2, sécurité et monitoring",
              "Méthodes : automatisation des tests & déploiement, logs centralisés"
            ]}
            titleClass="h3-secondary"
            listClass="ul-secondary"
            blockClass="optimisation left-align"
          />
        </div>
      </section>
    </section>
  );
};

export default Services;