// // Slider.js
import {
  Asset,
  family,
  honey,
  nsplsh,
  vertikal,
  yzz,
  z42,
  z44,
  syria,
} from "../assets/ASSETES/index";
import { motion } from "framer-motion";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const Slider = () => {
  const topPicks = [
    {
      id: 1,
      title: "رحلات برية",
      price: "$850",
      img: family,
    },
    {
      id: 2,
      title: "رحلات جوية",
      price: "$900",
      img: yzz,
    },
    {
      id: 3,
      title: "رحلات بحرية",
      price: "$450",
      img: syria,
    },
  ];
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-blue-600  text-2xl text-center py-8  ">
          View More{" "}
          <span className="text-5xl m-5 text-black font-bold font-sab">
            الأصناف
          </span>{" "}
        </h1>

        <Swiper
          className=" flex max-w-[80%]   	 gap-2 mt-20  p-2 items-center justify-center   "
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides={true}
        >
          {topPicks.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer  "
                    src={item.img}
                    alt={item.title}
                  />
                  <div
                    dir="rtl"
                    className="  rounded-3xl text-black font-bold font-sab   "
                  >
                    <p className="px-2 pt-4 font-bold text-2xl flex items-center justify-start">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      {/* bg-black/50 */}
    </>
  );
};

export default Slider;
