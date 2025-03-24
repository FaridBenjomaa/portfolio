import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer text-center text-md-start py-5">
    <div className="container">
      <div className="row">
        {/* Bloc 1 : Branding */}
        <div className="col-md-4 mb-3">
          <h5>Ecko Dev&Tech</h5>
          <p>Développement web & mobile, UI/UX design et innovation digitale.</p>
        </div>
  
        {/* Bloc 2 : Liens de navigation */}
        <div className="col-md-4 mb-3">
          <h6>Navigation</h6>
          <ul className="list-unstyled">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
  
        {/* Bloc 3 : Contact + réseaux */}
        <div className="col-md-4 mb-3">
          <h6>Contact</h6>
          <p>Email : <a href="mailto:farid@eckodev-tech.fr">farid@eckodev-tech.fr</a></p>
          <p>Téléphone : 07 61 18 94 39</p>
          <div className="social-icons mt-2">
            <a href="https://www.linkedin.com/in/farid-benjomaa-b56907a5/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/FaridBenjomaa" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
  
      <hr />
      <p className="text-center mt-3 mb-0">
        &copy; {new Date().getFullYear()} Farid Benjomaa - Ecko Dev&Tech. Tous droits réservés.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
