import Main from "./Main";
import About from "./About";

import '../../index.css';
import React, { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    if (window.location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (window.location.hash === '#hero') {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
        <section id="hero">
        <Main />
        </section>
       
      <section id="about">
        <About />
      </section>
      
    
    </div>
    
      
  );
};

export default Home;

