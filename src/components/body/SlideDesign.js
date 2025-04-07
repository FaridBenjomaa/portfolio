import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/SlideDesign.css";
import Lottie from 'lottie-react';
import interfaceClick from '../../assets/animations/interface.json';
import RightLaptop from '../../assets/images/RightLaptop.svg'; // Laptop image for larger screens
import MobileLaptop from '../../assets/images/Laptop.svg'; // Laptop image for mobile

const SlideDesign = () => {
  return (
    <div className="container-fluid">
    <div className="row bg-light w-100 m-0 p-0">
      <div className="col-12 col-md-6 p-0 d-flex justify-content-center justify-content-md-start   position-relative order-2 order-md-1">
        {/* Container for the laptop and animation */}
        <div className="design-laptop-container position-relative">
          {/* Lottie animation as the main element */}
          <div className="design-lottie-wrapper">
            <Lottie 
              animationData={interfaceClick} 
              loop={true}
              className="design-animation"
            />
          </div>
          
          {/* Laptop frame image */}
          <picture>
            {/* Image for mobile devices */}
            <source media="(max-width: 767px)" srcSet={MobileLaptop} />
            {/* Image for larger devices */}
            <source media="(min-width: 768px)" srcSet={RightLaptop} />
            <img 
              src={RightLaptop} 
              alt="Laptop" 
              className="design-laptop-image"
            />
          </picture>
        </div>
      </div>
      
      <div className="col-12 col-md-6 text-center text-md-start p-3 p-md-4 order-1 order-md-2">
        <h3 className="design-title mb-4 px-3 py-2">UI/UX : Design Expérience & Interfaces Optimisées</h3>
        
        <p className="design-description mb-4 px-3">
          Un bon design ne se limite pas à l'esthétique, il doit aussi offrir une navigation fluide et intuitive.
          En tant que designer UI/UX, je m'assure que chaque interface soit réfléchie, ergonomique
          et engageante.
        </p>
        
        <div className="design-skills-container px-3">
          <h4 className="mb-3">Compétences :</h4>
          <ul className="design-skills-list list-unstyled">
            <li className="mb-2">✅ Prototypage & Wireframing → Figma, Adobe XD</li>
            <li className="mb-2">✅ Design Visuel → Adobe Photoshop, Illustrator</li>
            <li className="mb-2">✅ Interaction & Animations → After Effects, LottieFiles</li>
            <li className="mb-2">✅ Accessibilité & Expérience Utilisateur → UX Research, Tests utilisateurs</li>

          </ul>
        </div>

        <p>
        
        </p>
      </div>
    </div>
    </div>
  );
};

export default SlideDesign;