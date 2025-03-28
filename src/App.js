import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Remplacer Switch par Routes
import Header from './components/header/Header';
import Services from './components/body/Services';  // Assure-toi que Services est importé
import Home from './components/body/Home';        // Assure-toi que Home est importé
import Footer from './components/footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Remplacer Switch par Routes */}
        <Route exact path="/" element={<Home />} /> {/* Utiliser element au lieu de component */}
        <Route path="/services" element={<Services />} /> {/* Utiliser element au lieu de component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;