import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/Caroussel.css";
import Lottie from 'lottie-react';
import interfaceClick from '../../assets/animations/interface.json';


const SlideDesign = () => {

  return (
    <div className="row bg-light w-100 m-0 p-0">
      <div className="col-md-5 p-0 d-flex justify-content-start align-items-end position-relative">
        <img src="../../img/photo/RightLaptop.svg" alt="Laptop" className="right-laptop" />
        <div className="interface-lottie">
          <Lottie animationData={interfaceClick} loop={true} />
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="p-5">UI/UX : Design Expérience & Interfaces Optimisées</h3>
        <p className="p-5">Un bon design ne se limite pas à l’esthétique, il doit aussi offrir une navigation fluide et intuitive.
          En tant que designer UI/UX, je m’assure que chaque interface soit réfléchie, ergonomique
          et engageante.</p>
        <h4 className="m-5">Compétences :</h4>
        <ul className="m-5">
          <li>✅ Prototypage & Wireframing → Figma, Adobe XD
          </li>
          <li>✅ Design Visuel → Adobe Photoshop, Illustrator
          </li>
          <li>✅ Interaction & Animations → After Effects, LottieFiles
          </li>
          <li>✅ Accessibilité & Expérience Utilisateur → UX Research, Tests utilisateurs</li>
        </ul>
      </div>
    </div>
    
  );
};

export default SlideDesign;
