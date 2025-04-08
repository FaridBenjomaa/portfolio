import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer text-center text-md-start py-5">
      <div className="container">
        <div className="row">
          {/* Bloc 1 : Branding */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading">Ecko Dev&Tech</h5>
            <p>Développement web & mobile, UI/UX design et innovation digitale.</p>
          </div>
          
          {/* Bloc 2 : Liens de navigation */}
          <div className="col-md-4 mb-4">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="list-unstyled footer-links">
            <li><Link to="/#hero" onClick={() => { window.scrollTo(0, 0); }}>Accueil</Link></li>
              <li><Link to="/#about" onClick={() => { }}>À propos</Link></li>
              <li><Link to="/services" onClick={() => { window.scrollTo(0, 0); }}>Mes Services</Link></li>
              <li><Link to="/projets" onClick={() => { window.scrollTo(0, 0); }}>Projets</Link></li>
              <li><Link to="/contact" onClick={() => { window.scrollTo(0, 0); }}>Contact</Link></li>
            </ul>
          </div>
          
          {/* Bloc 3 : Contact + réseaux */}
          <div className="col-md-4 mb-3">
            <h6 className="footer-heading">Contact</h6>
            <p>Email : <a href="mailto:farid@eckodev-tech.fr">farid@eckodev-tech.fr</a></p>
            <p>Téléphone : <a href="tel:+33761189439">07 61 18 94 39</a></p>
            <div className="social-icons mt-3">
              <a 
                href="https://www.linkedin.com/in/farid-benjomaa-b56907a5/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="https://github.com/FaridBenjomaa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <p className="text-center mt-3 mb-0 copyright-text">
          &copy; {new Date().getFullYear()} Farid Benjomaa - Ecko Dev&Tech. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;