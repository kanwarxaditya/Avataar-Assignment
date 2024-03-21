import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Navbar from "./components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const swiperRef = useRef();
  const [active, setActive] = useState(1);

  return (
    <>
      <Navbar />

      <div className="flex px-3 mt-20 items-center justify-center flex-col space-y-4">
        <h1 className="text-5xl mt-20  font-semibold">Featured Products</h1>
        <p className="text-lg text-black font-normal">
          Explore and discover a variety of products
        </p>
      </div>
      <div className="flex px-3 items-center justify-center">
        <Swiper
          initialSlide={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <div className="flex items-center gap-2 mt-6 justify-center">
            <button
              onClick={() => {
                swiperRef.current?.slidePrev();
                if (active == 0) {
                  setActive(8);
                } else {
                  setActive(active - 1);
                }
              }}
            >
              <ChevronLeft />
            </button>
            {Array(9)
              .fill(0)
              .map((e, index) => {
                return (
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index == active ? "bg-blue-600" : "bg-blue-200"
                    } `}
                  ></span>
                );
              })}
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
                if (active == 8) {
                  setActive(0);
                } else {
                  setActive(active + 1);
                }
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
}
