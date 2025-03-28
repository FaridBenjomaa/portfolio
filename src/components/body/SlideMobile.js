import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/Caroussel.css";
import mobileInterfaceAnimation from '../../assets/animations/mobile.json';
import Lottie from 'lottie-react';


const SlideMobile = () => {
  return (
   

        <div className="row bg-light position-absolute end-0 top-0 w-100 h-100 m-0 p-0">
            <div className="col-6 ">
            <h3 className="p-5">Développement Mobile : Applications performantes et intuitives</h3>
            <p className="p-5">
                Créer une expérience mobile fluide et engageante est essentiel dans un monde de plus en plus connecté.
                Je conçois des applications mobiles performantes en utilisant les technologies les plus adaptées.
              </p>
              <h4 className="m-5">Compétences :</h4>
              <ul className="m-5">
                <li>✅ Développement natif : Swift (iOS), Kotlin (Android)</li>
                <li>✅ Cross-platform : Flutter, React Native</li>
                <li>✅ Connexion API & gestion des données : Firebase, REST</li>
                <li>✅ Tests & Déploiement : TestFlight, Play Store, App Store</li>
              </ul>
            </div>

            <div className="col-6 p-0 d-flex justify-content-end align-items-end ">
            <Lottie animationData={mobileInterfaceAnimation} loop={true} className="right-smartphone" />
            {/* <img src="../../img/photo/Smartphone.svg" alt="Mobile" className="right-smartphone" /> */}
            </div>
          </div>

        
  

  );
};

export default SlideMobile;
