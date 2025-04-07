import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/Caroussel.css";
import mobileInterfaceAnimation from '../../assets/animations/mobile.json';
import Lottie from 'lottie-react';


const SlideMobile = () => {
  return (
    <div className="row bg-light position-absolute end-0 top-0 w-100 h-100 m-0 p-0">
      <div className="col-12 col-md-6">
        <h3 className="p-3 p-md-5">Développement Mobile : Applications performantes et intuitives</h3>
        <p className="px-3 px-md-5">
          Créer une expérience mobile fluide et engageante est essentiel dans un monde de plus en plus connecté.
          Je conçois des applications mobiles performantes en utilisant les technologies les plus adaptées.
        </p>
        <h4 className="mx-3 mx-md-5 mt-4">Compétences :</h4>
        <ul className="mx-3 mx-md-5 mb-4">
          <li>✅ Développement natif : Swift (iOS), Kotlin (Android)</li>
          <li>✅ Cross-platform : Flutter, React Native</li>
          <li>✅ Connexion API & gestion des données : Firebase, REST</li>
          <li>✅ Tests & Déploiement : TestFlight, Play Store, App Store</li>
        </ul>
      </div>
      <div className="col-12 col-md-6 p-0 d-flex justify-content-center justify-content-md-end align-items-center align-items-md-end mobile-animation-container">
        <Lottie animationData={mobileInterfaceAnimation} loop={true} className="right-smartphone" />
      </div>
    </div>
  );
};

export default SlideMobile;
