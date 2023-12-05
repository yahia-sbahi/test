// // Slider.js
import { Asset, family, honey, nsplsh, vertikal, yzz, z42, z44, syria  } from "../assets/ASSETES/index"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {motion} from "framer-motion"




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
  ]
 return (

          

        <>
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{once: true , amount: 0.5}}
             transition={{duration: 0.5}}
             variants={{
                 hidden:{opacity:0 ,x:-50},
                 visible:{opacity:1 ,x:0}
             }}
             
          >

              <h1 className="text-blue-600  text-2xl text-center py-8  ">View More <span className="text-5xl m-5 text-black font-bold font-sab">الأصناف</span> </h1>
              <div className=' flex max-w-[1520px]  mx-auto  gap-2 mt-20 m-auto p-2 items-center justify-center'>
                <Splide options={{perPage: 2 , gap:"2rem", drag:"free",arrows:false}}> 
                {
                  topPicks.map((item) =>{
                    return(
                      <SplideSlide  key={item.id}> 
                        <div  className='rounded-3xl relative'>
                          <div className="absolute bottom-3 right-0 rounded-3xl text-black font-bold font-sab   ">
                            <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                          </div>
                          <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-100 '
                            src={item.img}
                            alt={item.title}
                          />
                          
                        </div>
                      </SplideSlide>
                    )
                  })
                }
                </Splide>
              </div>
          </motion.div>
          {/* bg-black/50 */}
        </>

   );
 };

 export default Slider;


