import { i } from "../assets/ASSETES/index";
import {
  website,
  logoo,
  app,
  EMAIL,
  location,
  facebook,
  phone,
} from "../assets/index";

const Footer = () => {
  return (
    <footer className="mt-16  ">
      <div className="    ass    ">
        <h2
          dir="rtl"
          className=" mx-auto  w-5/6  md:flex font-sab text-5xl font-black py-7"
        >
          تواصل معنا
        </h2>
        <div
          dir="rtl"
          className=" mx-auto justify-between w-5/6 gap-16 md:flex "
        >
          <div className="text-2xl  mt-8 lg:mt-16 basis-1/4 md:mt-0">
            <p className="flex  items-center  gap-3 flex-wrap">
              <a href="#">
                {" "}
                <img className="w-5 " src={EMAIL} alt="" />
              </a>
              alhayat@gmail.com{" "}
            </p>
            <p className="my-5 flex  items-center flex-wrap gap-3">
              <a href="#">
                {" "}
                <img className="w-5" src={facebook} alt="" />
              </a>
              hayat travel agency
            </p>
            <p className="my-5 flex  items-center flex-wrap  gap-3">
              <a href="#">
                {" "}
                <img className="w-5" src={website} alt="" />
              </a>
              www.Alhayat.Sy.com
            </p>
          </div>
          <div className=" text-2xl lg:mt-16 basis-1/4 md:mt-0">
            <p className="  flex  items-center flex-wrap  gap-3">
              <a href="#">
                {" "}
                <img className="w-5" src={phone} alt="" />
              </a>{" "}
              202 420 0964
            </p>
            <p className="my-5 flex  items-center  flex-wrap gap-3">
              <a href="#">
                {" "}
                <img className="w-5" src={location} alt="" />
              </a>
              حلب-العزيزية-شارع بارون
            </p>
            <p className="my-5 flex  items-center flex-wrap  gap-3 ">
              سياسة الخصوصية
            </p>
          </div>
        </div>
        <div className="mt-16  flex  items-end justify-center md:mt-0 ">
          <p className="p-6 text-xl">Powered & Designed By Levant Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
