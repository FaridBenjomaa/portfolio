import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Header.css";
import useSectionInView from "../../hooks/useSectionInView";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // Ajouter l'état pour contrôler le menu
    const isHeroVisible = useSectionInView("hero");
    const isAboutVisible = useSectionInView("about");
    const isAboutVisible2 = useSectionInView("about2");
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);  // Fonction pour fermer le menu
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Défilement vers le haut de la page
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/img/logo/Logo.svg" alt="Logo" style={{ height: "50px", width: "auto" }} />
                </Link>

                {/* Bouton Menu Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMenuToggle}  // Toggle le menu quand on clique sur le bouton burger
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}  // Si le menu est ouvert, l'aria-expanded doit être "true"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Liens de Navigation et Icônes Sociales */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
                    <div className="navbar-menu-container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    href="/#hero"
                                    className={`nav-link ${isHeroVisible ? "active" : ""}`}
                                    onClick={() => { closeMenu(); scrollToTop(); }}  // Ferme le menu et fait défiler vers le haut
                                >
                                    Accueil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/#about"
                                    className={`nav-link ${isAboutVisible || isAboutVisible2 ? "active" : ""}`}
                                    onClick={closeMenu}  // Ferme le menu après le clic
                                >
                                    À Propos
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
                                    onClick={() => { closeMenu(); scrollToTop(); }}  // Ferme le menu et fait défiler vers le haut
                                >
                                    Mes Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projets"
                                    className={`nav-link ${location.pathname === "/projets" ? "active" : ""}`}
                                    onClick={() => { closeMenu(); scrollToTop(); }}  // Ferme le menu et fait défiler vers le haut
                                >
                                    Projets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                                    onClick={() => { closeMenu(); scrollToTop(); }}  // Ferme le menu et fait défiler vers le haut
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Séparateur visible uniquement sur Desktop */}
                    <div className="nav-separator"></div>

                    {/* Icônes Sociales alignées à droite */}
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/farid-benjomaa-b56907a5/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/FaridBenjomaa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;