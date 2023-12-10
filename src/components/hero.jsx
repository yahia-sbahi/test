// import {honey} from "../assets/ASSETES/index"
// import {logoo} from "../assets/index"

// const Hero = () => {
//   return (
//     <section className="mb-9">
//        <div className="w-full h-2/5 relative ">
//             <img className="object-cover w-full   filter blur-sm" src={honey} alt="" />
//             <div dir="rtl" className="flex absolute top-0 right-0 justify-start mr-36 p-9    gap-7">
//                  <span className=" text-3xl content-center border-b-2 border-solid pb-1 font-sab ">العربية</span>
//                  <span className=" text-3xl  pb-1 font-sab ">تواصل معنا </span>
//                  <span className=" text-3xl    pb-1 font-sab">من نحن</span>
//             </div>
//             <div  className="w-[140px] absolute top-6 left-6">
//                     <img className=" w-full" src={logoo} alt="" />
//             </div>

//             <div className="w-3/4 h-[200px] md:h-[300px] lg:h-[400px] z-50 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
//                 <img className="w-full h-full rounded-3xl" src={honey} alt="" />
//             </div>

//        </div>

//     </section>
//   )
// }

// core version + navigation, pagination modules:
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

// });

// export default Hero
import React, { useState, useEffect } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { honey, nsplsh, family } from "../assets/ASSETES/index";
import { logoo } from "../assets/index";

const Hero = () => {
  const [controlledSwiper, setControlledSwiper] = useState(1);

  const images = {
    1: honey,
    2: nsplsh,
    3: family,
  };

  return (
    <section className="mb-5  ">
      <div className=" max-w-full">
        <div className={`w-full felx  h-screen relative   `}>
          {/* Background Image */}
          <img
            className="object-cover w-full h-4/5 filter blur-sm"
            src={images[controlledSwiper]}
            alt=""
          />

          {/* Language Buttons */}
          <div className="  ">
            <div
              dir="rtl"
              className="flex absolute top-0 right-0 justify-start p-3 md:p-6 lg:p-9 gap-1 md:gap-7 md:mr-14 mr-3 lg:mr-32 z-30 mb-4 hover:cursor-pointer   "
            >
              <span className="text-1xl md:text-2xl lg:text-3xl pb-2 border-b-2 border-solid  font-sab">
                العربية
              </span>
              <span className="text-1xl md:text-2xl lg:text-3xl pb-2 font-sab">
                تواصل معنا
              </span>
              <span className="text-1xl md:text-2xl lg:text-3xl pb-2 font-sab">
                من نحن
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className=" ">
            <div className=" md:w-16 w-10 lg:w-28 xl:w-32  absolute top-6 left-6 z-40">
              <img className="w-full" src={logoo} alt="" />
            </div>
          </div>

          {/* Centered Image */}

          <Swiper
            className=" w-3/4 h-4/6 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => setControlledSwiper(swiper.activeIndex + 1)}
            onSlideChange={(swiper) =>
              setControlledSwiper(swiper.activeIndex + 1)
            }
            // Update the controlledSwiper state when the active slide changes
          >
            <SwiperSlide className=" h-4/5 ">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={images[1]}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className=" h-4/5  ">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={images[2]}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className=" h-4/5  ">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={images[3]}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
//   {/* Main Swiper -> pass controlled swiper instance */}
//   <Swiper modules={[Controller]} controller={{ control: controlledSwiper }} >
//   {/* ... */}
//    <div className="flex ">
//        <div className="w-3/4 h-1/2 md:h-[300px] lg:h-[400px] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
//              <img className="w-full h-full rounded-3xl object-cover" src={honey} alt="" />
//        </div>
//    </div>
// </Swiper>

//  {/* Controlled Swiper -> store swiper instance */}
//  <Swiper modules={[Controller]} onSwiper={setControlledSwiper(()=>{

//  })} >
//         {/* ... */}
//  </Swiper>
