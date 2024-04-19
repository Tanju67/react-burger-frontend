import React from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderItem from "./SliderItem";

function Slider({ list }) {
  return (
    <div className="container">
      <Swiper
        // install Swiper modules
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        {list.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderItem image={item.image} title={item.title} />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow"></div>
        </div>
        <div className="slider-controller">
          <div className="swiper-button-next slider-arrow"></div>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default Slider;
