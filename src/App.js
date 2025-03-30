import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Remplacer Switch par Routes
import Header from './components/header/Header';
import Services from './components/body/Services';  // Assure-toi que Services est importé
import Home from './components/body/Home';        // Assure-toi que Home est importé
import Projects from './components/body/Projects';
import Contact from './components/body/Contact';
import Footer from './components/footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;