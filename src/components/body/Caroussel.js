import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import "../../css/Caroussel.css";
import SlideDesign from "./SlideDesign";
import SlideMobile from "./SlideMobile";
import SlideWeb from "./SlideWeb";

const Caroussel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  
  // Check if on mobile device on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Update navigation visibility when activeIndex changes
  useEffect(() => {
    if (nextRef.current && prevRef.current) {
      nextRef.current.style.visibility = activeIndex < 2 ? "visible" : "hidden";
      prevRef.current.style.visibility = activeIndex > 0 ? "visible" : "hidden";
    }
  }, [activeIndex]);
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  return (
    <section className="container-fluid about-section-2 bg-light" id="about2">
      <div
        ref={nextRef}
        className="swiper-button-next-custom"
        onClick={() => swiperInstance && swiperInstance.slideNext()}
      >
        <i className={`bi bi-chevron-right ${isMobile ? 'text-black' : activeIndex === 0 ? 'text-white' : 'text-dark'}`}></i>
      </div>
      <div
        ref={prevRef}
        className="swiper-button-prev-custom"
        onClick={() => swiperInstance && swiperInstance.slidePrev()}
      >
        <i className={`bi bi-chevron-left ${isMobile ? 'text-black' : 'text-dark'}`}></i>
      </div>
      
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        spaceBetween={0} // Reduced from 50 to prevent unwanted gaps
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance}
        className="about-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-container">
            <SlideWeb />
          </div>
        </SwiperSlide>
        
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-container">
            <SlideDesign />
          </div>
        </SwiperSlide>
        
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-container">
            <SlideMobile />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Caroussel;