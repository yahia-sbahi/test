import { Asset, family, google,honey, nsplsh, vertikal, yzz, z42, z44, syria  } from "../assets/ASSETES/index"
import { Google_play, app_store } from "./../assets/index"
import {motion} from "framer-motion"



const Section2 = () => {
  return (
    <section >
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true , amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
          hidden:{opacity:0 ,x:-50},
          visible:{opacity:1 ,x:0}
      }}>
        <div className='w-[80%] mx-auto flex-row-reverse lg:flex gap-2 lg:gap-8 xl:gap-2 mt-20'>
            <div dir="rtl" className=" flex-1">
                  <h2 className="text-5xl font-bold   text-blue-500 my-12 font-sab">حمّل التطبيق</h2>
                  <p className=" font-sab text-3xl xl:text-4xl mb-12 break-words 	">أصبح حجز الرحلات أسهل وفي متناول يدك...<br/>
                  حمل تطبيق الحياة للسياحة الآن!
                  </p>
                  <div className="gap-8 flex items-center justify-center "> 
                    <button className=" rounded-lg text-xl    border-2 border-stone-950 flex-wrap p-3 flex  justify-center items-center gap-2"> App store <img className="w-12 object-cover" src={app_store} alt="" /></button>
                    <button className="rounded-lg text-xl  text-zinc-100	 bg-black border-stone-950 border-2  p-3  flex-wrap flex  gap-2 justify-center items-center">Google Play<img className="w-12 object-cover" src={Google_play} alt="" /></button>
                  </div>
            </div>
            <div className='flex-1  '>
              <div className="w-full h-full ">
                    
                  <div className=" relative h-full  "> 
                        <div  className=" lg:absolute lg:bottom-0 xl:-top-14 lg:right-10  rounded-3xl bg-[#d6f0f8]   m-5 lg:h-4/5 xl:h-full  lg:w-3/5 "> 
                        </div>
                        <div className="bg-[#d6f0f8] mt-6  rounded-3xl flex  items-center justify-end  "><img className=' lg:absolute  lg:-right-20 lg:bottom-0  xl:-right-14 xl:-bottom-4  ' src={Asset} alt="" /></div>
                  </div>
              </div>
              
            </div> 
        </div>
      </motion.div>
      {/* <motion.div */}
        {/* //  initial="hidden" */}
        {/* //  whileInView="visible" */}
        {/* //  viewport={{once: true , amount: 0.5}} */}
        {/* //  transition={{ delay:0.2, duration: 0.5}} */}
        {/* //  variants={{ */}
        {/* //      hidden:{opacity:0 ,y:50},
        //      visible:{opacity:1 ,y:0}
        //  }} 
      //   initial={{ opacity: 0, scale: 0.8 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1.5 }}
      //  >  */}
       
       
      
            <div className="w-[80%] h-full mx-auto   lg:flex gap-8 my-20">
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true , amount: 0.5}}
                  transition={{duration: 0.5}}
                  variants={{
                      hidden:{opacity:0 ,y:50},
                      visible:{opacity:1 ,y:0}
              }}
                  className="flex-1 bg-[#d6f0f8] rounded-3xl my-5"
              >
                        <div className='flex flex-col'>
                          <div className='flex m-5 justify-center items-center'> <img className=" h-[350px]  object-cover rounded-3xl" src={vertikal} alt='ddd' /> </div>
                          <div  dir='rtl' className="p-4 flex justify-center text-center items-center flex-col">
                            <h3 className="text-3xl font-bold font-sab mb-2  ">توصيل مجاني</h3>
                            <p className="text-black font-sab text-2xl p-5 ">يمكنك طلب سيارة لتقلك مجانا الى نقطة الانطلاق</p>
                          </div>
                        </div>
              </motion.div>
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true , amount: 0.5}}
                  transition={{duration: 0.7}}
                  variants={{
                      hidden:{opacity:0 ,y:50},
                      visible:{opacity:1 ,y:0}
                      
              }}
              className="flex-1 bg-[#d6f0f8] rounded-3xl my-5"
              >
                
                <div className='flex flex-col'>
                        <div className='flex m-5 justify-center items-center'> <img className="h-[350px]   object-cover rounded-3xl" src={family} alt='ddd' /> </div>
                        <div  dir='rtl' className="p-4 flex justify-center text-center items-center flex-col">
                          <h3 className="text-3xl font-bold font-sab mb-2  "> اختر مقعدك</h3>
                          <p className="text-black font-sab text-2xl p-5">يمكنك اختيار مقعد جلوسك في الرحلة...</p>
                        </div>
                </div>
                
              </motion.div>
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true , amount: 0.5}}
                  transition={{duration: 0.9}}
                  variants={{
                      hidden:{opacity:0 ,y:50},
                      visible:{opacity:1 ,y:0}
              }}
                    className="flex-1 bg-[#d6f0f8] rounded-3xl my-5"
              >
                      <div className='flex flex-col'>
                        <div className='flex m-5 justify-center items-center'> <img className="h-[350px]   object-cover rounded-3xl" src={yzz} alt='ddd' /> </div>
                        <div  dir='rtl' className="p-4 flex justify-center text-center  items-center flex-col">
                          <h3 className="text-3xl font-bold font-sab mb-2  "> رحلات متنوعة</h3>
                          <p className="text-black font-sab text-2xl p-5">رحلات يوميّة و فيز الى مختلف المدن</p>
                        </div>
                      </div>
                
              </motion.div>
            
            
            </div>
        
      
    </section>
  )
}

export default Section2