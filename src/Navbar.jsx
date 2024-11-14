import React from "react";
import Navdata from "./Navdata";
import { useEffect, useState } from "react";
import Logo1 from "./assets/logo.png";
import Logo2 from "./assets/logotext.png";
import Subbg from "./assets/subnavbg5.png";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import Navdata from './Navdata';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollposition, setScrollposition] = useState(0);
  const [ishover, setIsHover] = useState(false);
  const [sidebtn, setsidebtn] = useState(false);
  const [sidebtnindex, setsidebtnindex] = useState(0);

  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isExtraExtraLargeScreen = useMediaQuery({
    query: "(min-width: 1536px)",
  });

  const handleScroll2 = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollPercent = (currentScroll / totalHeight) * 100;
    if (isExtraExtraLargeScreen) {
      setScrollposition(scrollPercent * 1.96);
    } else {
      setScrollposition(scrollPercent * 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="fixed overflow-hidden top-0 2xl:max-w-[120em] w-full h-full" >
        <nav
          className={`absolute top-0 z-50 w-full flex justify-center items-center ${
            scrolling
              ? "bg-gradient-to-l to-white via-white from-sky-900 2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] md:h-[3rem] h-[2.8rem]"
              : "bg-gradient-to-l to-white via-white/90 from-[#3472b03b] 2xl:h-[7rem] xl:h-[6rem] lg:h-[5rem] md:h-[4rem] h-[3.5rem]"
          }`}
          
        >
          
          <div
            className={`relative z-50 hidden md:flex justify-between w-[98%] p-1  ${
              scrolling ? "2xl:h-[5rem] xl:h-[4.3rem] lg:h-[3.5rem] md:h-[2.6rem] h-[2.5rem]" : "2xl:h-[5.5rem] xl:h-[4.8rem] lg:h-[4rem] md:h-[3.4rem] h-[3rem]"
            }`}
          >
            <div className={`flex justify-between items-center  w-[75%] h-full`}>
              <div className={`flex h-full w-[35%]`}>
                <div
                  className="relative flex justify-center items-center z-50 2xl:w-24 xl:w-20 lg:-w-16 md:w-14 h-full "
                  onMouseEnter={() => setIsHover(true)}
                  // onMouseLeave={()=>setIsHover(false)}
                >
                  {ishover ? (
                    <IoClose className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl" />
                  ) : (
                    <HiMenuAlt1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl"></HiMenuAlt1>
                  )}
                </div>
                <div className="relative z-50 flex w-full pl-6 bg-white h-full pt-1 cursor-pointer items-center">
                  <img
                    src={Logo1}
                    className={`${scrolling ? "2xl:w-[3.3rem] xl:w-[3rem] lg:w-[2.5rem] md:w-[1.8rem] w-[1.5rem]" : "2xl:w-[3.5rem] xl:w-[3.2rem] lg:w-[2.7rem] md:w-[2rem] w-[1.5rem]"}`}
                  ></img>
                  <img
                    src={Logo2}
                    className={`${scrolling ? "2xl:h-[2.2rem] xl:h-[2rem] lg:h-[1.6rem] md:h-[1.3rem] h-[1.3rem]" : "2xl:h-[2.3rem] xl:h-[2.1rem] lg:h-[1.7rem] md:h-[1.4rem] h-[1.2rem]"}`}
                  ></img>
                </div>
              </div>
              <div className=" relative z-40 w-[65%] h-full flex items-center ">
                <div className="absolute w-full h-full">
                  <img src={Subbg} className="w-full h-full"></img>
                </div>
                <div
                  className={`flex w-full h-full 2xl:gap-3 justify-end items-center ${scrolling ? '2xl:pr-[7.3rem] xl:pr-[4.9rem] lg:pr-[3.5rem] md:pr-[2.8rem] pr-[5.5rem]' :  '2xl:pr-[7.3rem] xl:pr-[5rem] lg:pr-[3.5rem] md:pr-[2.7rem] pr-8'} px-2`}
                >
                  {Navdata.map((item, index) => (
                    <div
                      className={`relative group  ${scrolling ? "2xl:h-[2.5rem] xl:h-[2rem] lg:h-[1.5rem] md:h-[1.5rem]" : "2xl:h-[3rem] xl:h-[2.5rem] lg:h-[2rem] md:h-[1.5rem]"}`}
                    >
                      <button
                        className={` w-max  2xl:px-3 xl:px-3 lg:px-3 md:px-[0.3rem] h-full group 2xl:text-lg xl:text-base lg:text-xs  text-[0.65rem] font-extralight font-NavMenuFont`}
                      >
                        {item.buttoname}
                        <div className=" w-0 duration-500 h-[2px] group-hover:w-full bg-black "></div>
                      </button>
                      {item.subbuthai && (
                        <div
                          className={`bg-transparent absolute overflow-hidden group-hover:translate-y-2 group-hover:h-max duration-500 bg-slate-500 h-0 ${
                            scrolling ? "2xl:top-[1.5rem] xl:top-[1.5rem] lg:top-[1rem] md:top-[1rem] 2xl:w-[13rem] xl:w-[12rem] lg:w-[11rem] md:w-[10rem]" : "2xl:top-[2.5rem] xl:top-[1.5rem] lg:top-[1rem] md:top-[1rem] 2xl:w-[14rem] xl:w-[13rem] lg:w-[12rem] md:w-[11rem]"
                          }`}
                        >
                          <div
                            className={`w-full gap-4 px-4 py-6 rounded-lg border-[2px] border-gray-200 backdrop-blur-2xl h-full mt-10 flex flex-col items-start`}
                          >
                            {item.subbut.map((sub) => (
                              <button className="text-white text-base font-subMenuFont border-b-[1px] pb-2 w-full text-left hover:scale-105 duration-300">
                                {sub.subbutname}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative z-10 w-[25%] h-full px-2 pr-2 2xl:gap-6 xl:gap-5 lg:gap-4 md:gap-3 gap-2 text-gray-100 flex justify-end items-center">
              <IoMdCall className={`${scrolling ? '2xl:text-[2.2rem] xl:text-[1.9rem] lg:text-[1.6rem] md:text-[1.3rem] text-[1rem]' :  '2xl:text-[2.5rem] xl:text-[2.2rem] lg:text-[1.9rem] md:text-[1.6rem] text-[1.3rem]'} cursor-pointer`} />
              <IoMailOutline className={`${scrolling ? '2xl:text-[2.2rem] xl:text-[1.9rem] lg:text-[1.6rem] md:text-[1.3rem] text-[1rem]' :  '2xl:text-[2.5rem] xl:text-[2.2rem] lg:text-[1.9rem] md:text-[1.6rem] text-[1.3rem]'} cursor-pointer`} />
              <button
                className={`${
                  scrolling ? "2xl:w-[12rem] xl:w-[11rem] lg:w-[9rem] md:w-[9rem] w-[8rem] 2xl:h-[4rem] xl:h-[3.2rem] lg:h-[2.5rem] md:h-[2rem]" : "2xl:w-[14rem] xl:w-[13rem] lg:w-[10rem] md:w-[11rem] w-[10rem] 2xl:h-[4.5rem] xl:h-[3.5rem] lg:h-[2.7rem] md:h-[2.3rem]"
                } backdrop-blur-xl 2xl:text-lg xl:text-base lg:text-xs md:text-[0.65rem] 2xl:border-[2px] xl:border-[2px] lg:border-[2px] md:border-[1px] border-gray-300 hover:border-gray-100 hover:scale-105 duration-300 rounded-md`}
              >
                Schedule Consulting
              </button>
            </div> 
          </div>
        </nav>
        <div
            className={` absolute z-40 2xl:w-[24rem] xl:w-[22rem] lg:w-20rem] md:w-[18rem]  h-full top-0 left-0 bottom-0 items-center  hidden md:flex flex-col duration-500 ${
              ishover ? "translate-x-0 " : "-translate-x-[110%]"
            }`}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className={` w-full  ${scrolling ? '2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] md:h-[3rem] h-[2.8rem] lg:pb-[4rem] xl:pb-20 pb-12 2xl:pb-24' : '2xl:h-[7rem] xl:h-[6rem] lg:h-[5rem] md:h-[4rem] h-[3.5rem] lg:pb-[4.5rem] xl:pb-20 pb-16 2xl:pb-24'}`}>
            </div>
            <div className={`relative  top-0 hidden md:flex w-full h-full bg-white  2xl:pl-[4.3rem] xl:pl-[4rem] lg:pl-[2rem] md:pl-[2rem] overflow-y-auto`}>
              <div
                className={`w-full h-max flex flex-col justify-start 2xl:pt-8 xl:pt-7 lg:pt-6 md:pt-5 items-start 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-2`}
              >
                <h1 className="w-full pb-5 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-subMenuFont font-semibold">
                  Explore QBC
                </h1>
                {Navdata.map((item, index) => (
                  <div
                    className="relative 2xl:w-72 xl:w-64 lg:w-60 md:w-60 2xl:h-24 xl:h-20 lg:h-16 md:h-[4.5rem] bg-slate-200 rounded-sm flex justify-center items-center hover:scale-105 duration-500 overflow-hidden"
                    onMouseEnter={() => {
                      setsidebtn(true);
                      setsidebtnindex(index);
                    }}
                    onMouseLeave={() => {
                      setsidebtn(false);
                      setsidebtnindex(null);
                    }}
                  >
                    <div
                      className={`absolute  duration-700 w-full h-full ${
                        sidebtn && sidebtnindex === index
                          ? "opacity-100 scale-110"
                          : "opacity-0 scale-100"
                      } `}
                    >
                      <img
                        src={item.src}
                        className="w-full rounded-sm h-full object-cover"
                      ></img>
                    </div>
                    <button className="z-50 2xl:text-xl md:text-base w-full h-full bg-black/30 text-left px-4 rounded-sm text-gray-100 font-NavMenuFont font-semibold ">
                      {item.buttoname}
                    </button>
                  </div>
                ))}
                <div className="w-full h-[30%] mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 w-full">
                    <h1 className="2xl:text-sm my-2 md:text-xs text-gray-600 font-subMenuFont font-extralight">
                      CONTACT US
                    </h1>
                    <hr className="w-2/3 text-gray-300"></hr>
                  </div>
                  <button className="2xl:w-72 xl:w-64 lg:w-60 md:w-60 2xl:h-20 xl:h-20 lg:h-16 md:h-[4rem] bg-gray-200  hover:scale-95 duration-500 text-left px-4 2xl:text-lg md:text-sm rounded-sm">
                    info@qbc.com
                  </button>
                  <button className="2xl:w-72 xl:w-64 lg:w-60 md:w-60 2xl:h-20 xl:h-20 lg:h-16 md:h-[4rem] bg-gray-200 hover:scale-95 duration-500 text-left px-4 2xl:text-lg md:text-sm rounded-sm">
                    +917283748723
                  </button>
                </div>
                <div className="w-full h-20 flex justify-between items-center ">
                  <h1 className="2xl:text-sm md:text-xs font-subMenuFont font-extralight text-gray-600">
                    FOLLOW US:
                  </h1>
                  <div className="flex w-2/3 justify-end px-4 gap-2">
                    <FaFacebookF className="rounded-full border-[1px] border-gray-400 2xl:w-8 2xl:h-8 md:w-7 md:h-7 p-2 " />
                    <FaInstagram className="rounded-full border-[1px] border-gray-400 2xl:w-8 2xl:h-8 md:w-7 md:h-7 p-2" />
                    <FaLinkedinIn className="rounded-full border-[1px] border-gray-400 2xl:w-8 2xl:h-8 md:w-7 md:h-7 p-2" />
                    <FaXTwitter className="rounded-full border-[1px] border-gray-400 2xl:w-8 2xl:h-8 md:w-7 md:h-7 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* mobile navbar */}

        {/* <nav className="flex sm:hidden">
          <div className="text-white">
            shgdfkljhasdfk
          </div>
        </nav> */}

        {/* <div className="absolute z-20 top-0 pt-32 2xl:w-[6.5rem] pb-2 xl:w-[5.8rem] lg:w-[4.8rem] md:w-[4rem] h-full border-r-[1px] border-gray-400 hidden md:flex flex-col justify-center gap-20 items-center">
          <div
            className={`h-96 py-[1px] flex justify-center w-2 rounded-xl border-[1px] border-gray-400`}
          >
            <div
              style={{ transform: `translateY(${scrollposition}%)` }}
              className="w-1 flex 2xl:h-32 xl:h-[4.95rem] lg:h-[3.55rem] md:h-[2.45rem] bg-gray-100 rounded-xl"
            ></div>
          </div>
          <div
            className={` flex flex-col  items-center 2xl:gap-6 md:gap-2 text-white xl:h-[30%] md:h-[50%] w-[80%]`}
          >
            <FaFacebookF className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg p-1 border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaInstagram className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg p-1 border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaLinkedinIn className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg p-1 border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaXTwitter className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg p-1 border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
