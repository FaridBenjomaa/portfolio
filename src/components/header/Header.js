import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Header.css";
import useSectionInView from "../../hooks/useSectionInView";
import { Link } from 'react-router-dom';  // Importation de Link

const Header = () => {

    const isHeroVisible = useSectionInView("hero");
    const isAboutVisible = useSectionInView("about");
    const isAboutVisible2 = useSectionInView("about2");
    const isServiceVisible = useSectionInView("services");

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
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
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Liens de Navigation */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
            
                                href="/#hero"
                                className={`nav-link ${isHeroVisible ? "active" : ""}`}
                            >
                                Accueil
                            </a>
                        </li>
                        {/* Utiliser <a> pour gérer l'ancre dans la même page */}
                        <li className="nav-item">
                            <a
                                href="/#about"
                                className={`nav-link ${isAboutVisible ? "active" : ""} ${isAboutVisible2 ? "active" : ""}`}
                            >
                                À Propos
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/services"
                                className={`nav-link ${isServiceVisible ? "active" : ""}`}
                            >
                                Mes Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#projet" className="nav-link">Projets</a> {/* Ancre pour Projet */}
                        </li>
                        <li className="nav-item">
                            <a href="#cont" className="nav-link">Contact</a> {/* Ancre pour Contact */}
                        </li>
                    </ul>
                </div>

                {/* Icônes Sociales */}
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/farid-benjomaa-b56907a5/"
                        className="mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/FaridBenjomaa"
                        className="mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;