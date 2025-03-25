import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import "../../css/Caroussel.css";
import SlideDesign from "./SlideDesign";
import SlideMobile from "./SlideMobile";
import SlideWeb from "./SlideWeb";


const Caroussel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const nextRef = React.useRef(null);
  const prevRef = React.useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  
  return (
    <section className="container-fluid about-section-2 bg-light" id="about2">
      <div ref={nextRef} className="swiper-button-next-custom" style={{ background: "transparent", margin: "10px", visibility: activeIndex < 2 ? "visible" : "hidden" }}>
        <i className={`bi bi-chevron-right ${activeIndex === 0 ? 'text-white' : 'text-dark'}`}></i>
      </div>
      <div ref={prevRef} className="swiper-button-prev-custom" style={{ background: "transparent", margin: "10px", visibility: activeIndex > 0 ? "visible" : "hidden" }}>
        <i className={`bi bi-chevron-left ${activeIndex === 1 ? 'text-white' : 'text-dark'}`}></i>
      </div>
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
        <SlideWeb />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
         <SlideDesign />
        </SwiperSlide>
        
        {/* Slide 3 */}
        <SwiperSlide>
        <SlideMobile />
        </SwiperSlide>
      </Swiper>
    </section>

  );
};

export default Caroussel;
