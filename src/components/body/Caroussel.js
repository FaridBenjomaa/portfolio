import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import "../../css/Caroussel.css";


const Caroussel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const nextRef = React.useRef(null);
  const prevRef = React.useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  
  return (
    <section className="container-fluid about-section-2 bg-light" id="about2">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>

          <div className="row bg-light position-absolute end-0 top-0 w-100 h-100 m-0 p-0">
            <div className="col-6 ">
              <h3 className="m-5"> Développement Web : Performante et Sécurité </h3>
              <p className="m-5">
                Créer des applications web performantes, sécurisées et évolutives est ma priorité.
                Grâce à des technologies modernes et une approche fullstack, je développe des
                solutions adaptées aux besoins des utilisateurs et aux exigences du marché.
              </p>
              <h4 className="m-5">Compétences : </h4>
              <ul className="list-unstyled m-5">
                <li>✅ Back-end → PHP, Symfony, Node.js, API REST </li>
                <li>✅ Front-end → React.js, Vue.js, HTML/CSS, JavaScript (ES6)</li>
                <li>✅ Base de Données → MySQL, Firebase, PostgreSQL</li>
                <li>✅ Infrastructure & DevOps → Docker, AWS, OVH, CI/CD</li>
              </ul>

              <p className="m-5">
                Le développement ne se limite pas à coder. <br />
                Une expérience utilisateur fluide et attrayante est essentielle pour la réussite d’un projet.
              </p>
            </div>

            <div className="col-6 p-0 d-flex justify-content-end align-items-end ">
              <img src="../../img/photo/LeftLaptop.svg" alt="Laptop" className="left-laptop" />
            </div>
          </div>


        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="row bg-light w-100 m-0 p-0">
            <div className="col-md-5 p-0 d-flex justify-content-start align-items-end">
              <img src="../../img/photo/RightLaptop.svg" alt="Laptop" className="right-laptop" />
            </div>
            <div className="col-md-6">
              <h3 className="p-5">UI/UX : Design Expérience & Interfaces Optimisées</h3>
              <p className="p-5">Un bon design ne se limite pas à l’esthétique, il doit aussi offrir une navigation fluide et intuitive.
                En tant que designer UI/UX, je m’assure que chaque interface soit réfléchie, ergonomique
                et engageante.</p>
              <h4 className="m-5">Compétences :</h4>
              <ul className="m-5">
                <li>✅ Prototypage & Wireframing → Figma, Adobe XD
                </li>
                <li>✅ Design Visuel → Adobe Photoshop, Illustrator
                </li>
                <li>✅ Interaction & Animations → After Effects, LottieFiles
                </li>
                <li>✅ Accessibilité & Expérience Utilisateur → UX Research, Tests utilisateurs</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Slide 3 */}
        <SwiperSlide>

        <div className="row bg-light position-absolute end-0 top-0 w-100 h-100 m-0 p-0">
            <div className="col-6 ">
            <h3 className="p-5">Développement Mobile : Applications performantes et intuitives</h3>
            <p className="p-5">
                Créer une expérience mobile fluide et engageante est essentiel dans un monde de plus en plus connecté.
                Je conçois des applications mobiles performantes en utilisant les technologies les plus adaptées.
              </p>
              <h4 className="m-5">Compétences :</h4>
              <ul className="m-5">
                <li>✅ Développement natif : Swift (iOS), Kotlin (Android)</li>
                <li>✅ Cross-platform : Flutter, React Native</li>
                <li>✅ Connexion API & gestion des données : Firebase, REST</li>
                <li>✅ Tests & Déploiement : TestFlight, Play Store, App Store</li>
              </ul>
            </div>

            <div className="col-6 p-0 d-flex justify-content-end align-items-end ">
            <img src="../../img/photo/Smartphone.svg" alt="Mobile" className="right-smartphone" />
            </div>
          </div>

        
        </SwiperSlide>
      </Swiper>
      <div ref={nextRef} className="swiper-button-next-custom" style={{ background: "transparent", margin: "10px", visibility: activeIndex < 2 ? "visible" : "hidden" }}>
        <i className={`bi bi-chevron-right ${activeIndex === 0 ? 'text-white' : 'text-dark'}`}></i>
      </div>
      <div ref={prevRef} className="swiper-button-prev-custom" style={{ background: "transparent", margin: "10px", visibility: activeIndex > 0 ? "visible" : "hidden" }}>
        <i className={`bi bi-chevron-left ${activeIndex === 1 ? 'text-white' : 'text-dark'}`}></i>
      </div>
    </section>

  );
};

export default Caroussel;
