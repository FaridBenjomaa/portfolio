import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../css/Caroussel.css";
import Lottie from 'lottie-react';
import animationCode from '../../assets/animations/code-laptop.json';


const SlideWeb = () => {

  return (

    <div className="row bg-light position-absolute end-0 top-0 w-100 h-100 m-0 p-0">
      <div className="col-6 ">
        <h3 className="m-5"> Développement Web : Performante et Sécurité </h3>
        <p className="m-5">
          Créer des applications web performantes, sécurisées et évolutives est ma priorité.
          Grâce à des technologies modernes et une approche fullstack, je développe des
          solutions adaptées aux besoins des utilisateurs et aux exigences du marché.
        </p>
        <h4 className="m-5">Compétences : </h4>
        <ul className="list-unstyled m-5">
          <li>✅ Back-end → PHP, Symfony, Node.js, API REST </li>
          <li>✅ Front-end → React.js, Vue.js, HTML/CSS, JavaScript (ES6)</li>
          <li>✅ Base de Données → MySQL, Firebase, PostgreSQL</li>
          <li>✅ Infrastructure & DevOps → Docker, AWS, OVH, CI/CD</li>
        </ul>

        <p className="m-5">
          Le développement ne se limite pas à coder. <br />
          Une expérience utilisateur fluide et attrayante est essentielle pour la réussite d’un projet.
        </p>
      </div>

      <div className="col-6 p-0 d-flex justify-content-end align-items-end position-relative">
        <img src="../../img/photo/LeftLaptop.svg" alt="Laptop" className="left-laptop" />
        <div className="laptop-screen">
          <Lottie animationData={animationCode} loop={true} />
        </div>
      </div>
    </div>

  );
};

export default SlideWeb;
