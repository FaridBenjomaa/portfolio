import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/SlideWeb.css";
import Lottie from 'lottie-react';
import animationCode from '../../assets/animations/code-laptop.json';
import LeftLaptop from '../../assets/images/LeftLaptop.svg'; // Desktop Image
import MobileLaptop from '../../assets/images/Laptop.svg'; // Mobile Image

const SlideWeb = () => {
  return (
    <div className="row bg-light position-relative p-0 m-0">
      <div className="col-12 col-md-6 text-center text-md-start p-4 p-md-5">
        <h2 className="mb-4">Développement Web : Performante et Sécurité</h2>
        <p className="mb-4">
          Créer des applications web performantes, sécurisées et évolutives est ma priorité. 
          Grâce à des technologies modernes et une approche fullstack, je développe des 
          solutions adaptées aux besoins des utilisateurs et aux exigences du marché.
        </p>
        
        <div className="mb-4">
          <h3 className="mb-3">Compétences :</h3>
          <ul className="list-unstyled">
            <li className="mb-2">✅ Back-end → PHP, Symfony, Node.js, API REST</li>
            <li className="mb-2">✅ Front-end → React.js, Vue.js, HTML/CSS, JavaScript (ES6)</li>
            <li className="mb-2">✅ Base de Données → MySQL, Firebase, PostgreSQL</li>
            <li className="mb-2">✅ Infrastructure & DevOps → Docker, AWS, OVH, CI/CD</li>
          </ul>
        </div>
        
        <p>
          Le développement ne se limite pas à coder. 
          Une expérience utilisateur fluide et attrayante est essentielle pour la réussite d'un projet.
        </p>
      </div>
      
      <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end position-relative">
        {/* Container for the laptop and animation */}
        <div className="laptop-container position-relative">
          {/* Lottie animation as the main element */}
          <div className="lottie-container">
            <Lottie 
              animationData={animationCode} 
              className="laptop-animation"
            />
          </div>
          
          {/* Laptop frame image positioned behind the animation */}
          <picture>
            {/* Image for mobile devices */}
            <source media="(max-width: 767px)" srcSet={MobileLaptop} />
            {/* Image for larger devices */}
            <source media="(min-width: 768px)" srcSet={LeftLaptop} />
            <img 
              src={LeftLaptop} 
              alt="Laptop" 
              className="laptop-frame"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SlideWeb;