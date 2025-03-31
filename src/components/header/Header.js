import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Header.css";
import useSectionInView from "../../hooks/useSectionInView";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const isHeroVisible = useSectionInView("hero");
    const isAboutVisible = useSectionInView("about");
    const isAboutVisible2 = useSectionInView("about2");
    const location = useLocation();

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
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Liens de Navigation et Icônes Sociales */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-menu-container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    href="/#hero"
                                    className={`nav-link ${isHeroVisible ? "active" : ""}`}
                                >
                                    Accueil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/#about"
                                    className={`nav-link ${isAboutVisible || isAboutVisible2 ? "active" : ""}`}
                                >
                                    À Propos
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
                                >
                                    Mes Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projets"
                                    className={`nav-link ${location.pathname === "/projets" ? "active" : ""}`}
                                >
                                    Projets
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
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