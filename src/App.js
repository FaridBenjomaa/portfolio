import Main from "./components/body/Main";
import Header from "./components/header/Header";
import About from "./components/body/About";
import './index.css';
import Footer from "./components/footer/Footer";

function App() {
  return(
    <div>
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
