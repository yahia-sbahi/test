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

// export default Hero
import { honey } from "../assets/ASSETES/index";
import { logoo } from "../assets/index";

const Hero = () => {
  return (
    <section className="mb-9  ">
      <div className=" max-w-full">
          <div className="w-full h-2/5 relative overflow-hidden  ">
            {/* Background Image */}
            <img className="object-cover w-full filter blur-sm" src={honey} alt="" />

            {/* Language Buttons */}
            <div className="  ">
              <div dir="rtl" className="flex absolute top-0 right-0 justify-start p-3 md:p-6 lg:p-9 gap-7 md:mr-14 mr-3 lg:mr-32 z-30 mb-4 hover:cursor-pointer   ">
                <span className="text-1xl md:text-2xl lg:text-3xl pb-2 border-b-2 border-solid  font-sab">العربية</span>
                <span className="text-1xl md:text-2xl lg:text-3xl pb-2 font-sab">تواصل معنا</span>
                <span className="text-1xl md:text-2xl lg:text-3xl pb-2 font-sab">من نحن</span>
              </div>
            </div>

            {/* Logo */}
            <div className=" ">
              <div className=" md:w-16 w-10 lg:w-28 xl:w-32  absolute top-6 left-6 z-40">
                <img className="w-full" src={logoo} alt="" />
              </div>
            </div>

            {/* Centered Image */}
              <div className="flex ">
                    <div className="w-3/4 h-1/2 md:h-[300px] lg:h-[400px] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <img className="w-full h-full rounded-3xl" src={honey} alt="" />
                    </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
