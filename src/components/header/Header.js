import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Header.css";
import useSectionInView from "../../hooks/useSectionInView";


const Header = () => {

    const isHeroVisible = useSectionInView("hero");
    const isAboutVisible = useSectionInView("about");
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand" href="#hero">
                    <img src="/img/logo/Logo.svg" alt="Logo" style={{ height: "50px", width: "auto" }} />
                </a>

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
                        <li className="nav-item"><a
                            href="#hero"
                            className={`nav-link ${isHeroVisible ? "active" : ""}`}
                        >
                            Accueil
                        </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#about"
                                className={`nav-link ${isAboutVisible ? "active" : ""}`}
                            >
                                À Propos
                            </a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Mes Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Projets</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
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

}

export default Header;