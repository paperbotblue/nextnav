import React from "react";
import Navdata from "./Navdata";
import { useEffect, useState } from "react";
import Logo1 from "../../assets/logo.png";
import Logo2 from "../../assets/logotext.png";
import Subbg from "../../assets/subnavbg5.png";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { WiSnow } from "react-icons/wi";
// import Navdata from './Navdata';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollposition, setScrollposition] = useState(0);
  const [ishover, setIsHover] = useState(false);
  const [sidebtn, setsidebtn] = useState(false);
  const [sidebtnindex, setsidebtnindex] = useState(0);
  const [menu, setmenu] = useState(false);
  const [btn, setbtn] = useState(false);
  const [btnindex, setbtnindex] = useState(null);
  const [width, setwidth] = useState('');

  // const isIphone = useMediaQuery({query: "(min-width: 450px)"})
  // const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  // const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  // const isExtraExtraLargeScreen = useMediaQuery({
  //   query: "(min-width: 1536px)",
  // });

  

  const handleScroll2 = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollPercent = (currentScroll / totalHeight) * 100;
    setScrollposition(scrollPercent);
  };

  useEffect(() => {
    
    
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  const sidemenuwidthhandler = () => {
    if(window.innerWidth < 768){
      let crr = window.innerWidth/10+1;
      setwidth(crr);}
  }

  useEffect(() => {
    if (ishover || menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if(window.innerWidth > 768){
      setmenu(false)
    }
    sidemenuwidthhandler();
    console.log(window.innerWidth);
    // Clean up on component unmount or when the menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ishover, menu]);

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
    <div className="flex justify-center ">
      <div className="relative flex overflow-hidden  top-0 2xl:max-w-[120em] w-full h-full" >
        <nav
          className={`fixed top-0 z-50 w-full 2xl:max-w-[120em] flex justify-center items-center ${
            scrolling
              ? "bg-gradient-to-l to-white  from-sky-900 md:bg-gradient-to-l md:to-white  md:from-[#255788] 2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] md:h-[3rem] h-[3.5rem]"
              : "bg-gradient-to-l to-white from-[#3472b03b] md:bg-gradient-to-l md:to-white md:via-white/90 md:from-[#3472b03b] 2xl:h-[7rem] xl:h-[6rem] lg:h-[5rem] md:h-[4rem] h-[4rem]"
          }`}
          
        >
          
          <div
            className={`relative z-50 hidden md:flex justify-between w-[99%] p-1  ${
              scrolling ? "2xl:h-[5rem] xl:h-[4.3rem] lg:h-[3.5rem] md:h-[2.6rem] h-[2.5rem]" : "2xl:h-[5.5rem] xl:h-[4.8rem] lg:h-[4rem] md:h-[3.4rem] h-[3rem]"
            }`}
          >
            <div className={`flex justify-between items-center w-[75%] h-full`}>
              <div className={`flex h-full bg-white w-[35%]`}>
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
                <Link to='/' onClick={()=>window.scrollTo({top: 0, behavior:"smooth"})}>
                <div className="relative z-50 flex w-full lg:ml-6 md:ml-3 bg-white h-full pt-1 cursor-pointer items-center">
                  <img
                    src={Logo1}
                    className={`${scrolling ? "2xl:w-[3.3rem] xl:w-[2.9rem] lg:w-[2.5rem] md:w-[1.7rem] w-[1.5rem]" : "2xl:w-[3.5rem] xl:w-[3.1rem] lg:w-[2.7rem] md:w-[1.9rem] w-[1.5rem]"}`}
                  ></img>
                  <img
                    src={Logo2}
                    className={`w-full ${scrolling ? "2xl:h-[2.2rem] xl:h-[2rem] lg:h-[1.6rem] md:h-[1.2rem] h-[1.3rem]" : "2xl:h-[2.3rem] xl:h-[1.9rem] lg:h-[1.7rem] md:h-[1.3rem] h-[1.2rem]"}`}
                  ></img>
                  </div>
                </Link>
              </div>
              <div className=" relative z-40 w-full h-full flex items-center ">
                <div className="absolute w-full h-full">
                  <img src={Subbg} className="w-full h-full"></img>
                </div>
                <div
                  className={`flex w-full h-full 2xl:gap-2 justify-end items-center pr-[12%] px-2`}
                >
                  {Navdata.map((item, index) => (
                    <div
                      className={`relative group  ${scrolling ? "2xl:h-[2.5rem] xl:h-[2rem] lg:h-[1.5rem] md:h-[1.5rem]" : "2xl:h-[3rem] xl:h-[2.5rem] lg:h-[2rem] md:h-[1.5rem]"}`}
                    >
                      <NavLink to={item.add} onClick={()=>window.scrollTo({top: 0, behavior:"smooth"})}>
                      <button
                        className={` w-max  2xl:px-3 xl:px-2 lg:px-2 md:px-1 h-full group 2xl:text-lg xl:text-base lg:text-xs  text-[0.65rem] font-extralight font-NavMenuFont`}
                      >
                        {item.buttoname}
                        <div className=" w-0 duration-500 h-[2px] group-hover:w-full bg-black "></div>
                        </button>
                        </NavLink>
                      {item.subbuthai && (
                        <div
                          className={`bg-transparent absolute overflow-hidden group-hover:translate-y-2 group-hover:h-max duration-500 bg-slate-500 h-0 ${
                            scrolling ? "2xl:top-[1.5rem] xl:top-[1.5rem] lg:top-[1rem] md:top-[1rem] 2xl:w-[13rem] xl:w-[12rem] lg:w-[11rem] md:w-[10rem]" : "2xl:top-[2.5rem] xl:top-[1.5rem] lg:top-[1rem] md:top-[1rem] 2xl:w-[14rem] xl:w-[13rem] lg:w-[12rem] md:w-[11rem]"
                          }`}
                        >
                          <div
                            className={`w-full gap-4 px-4 py-6 rounded-lg border-[2px] border-gray-200 bg-black/50 backdrop-blur-2xl h-full mt-10 flex flex-col items-start`}
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
              <Link to='/contact'>
              <button
                className={`${
                  scrolling ? "2xl:w-[11.5rem] xl:w-[9.5rem] lg:w-[7.5rem] md:w-[5.5rem] w-[6rem] 2xl:h-[3.8rem] xl:h-[3.2rem] lg:h-[2.5rem] md:h-[2rem]" : "2xl:w-[12rem] xl:w-[10rem] lg:w-[8rem] md:w-[6rem] w-[10rem] 2xl:h-[4rem] xl:h-[3.5rem] lg:h-[2.7rem] md:h-[2.3rem]"
                } backdrop-blur-xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm 2xl:border-[2px] xl:border-[2px] lg:border-[2px] md:border-[1px] border-gray-300 hover:border-gray-100 hover:scale-105 duration-300 rounded-md`}
              >
                Contact us
              </button>
              </Link>
            </div> 
          </div>
          {/* mobile navbar */}
            <div className="relative z-50 md:hidden flex w-full h-[90%] items-center justify-between px-2 md:px-4">
              <Link to='/'>
              <div className="w-12  h-[3rem]">
                <img src={Logo1} className="w-full h-full"></img>
              </div>
              </Link>
              <div className="flex items-center gap-4">
                 <IoMdCall className="text-2xl text-gray-900"/>
                <IoMailOutline className="text-2xl text-gray-950"/>
                <Link to='/contact'> <button className={`${scrolling ? 'text-sm' : 'text-base'} border-[1px] border-white px-2 py-1 rounded-md text-white`}>Contact us</button>
                </Link>
                <div 
                className="relative text-4xl text-white"
                onClick={()=>setmenu(!menu)}
                >
                  {
                    menu ? <IoClose /> : <HiMenuAlt1/>
                  }
                </div>
              </div>
            </div>
            <div 
            // style={{width:`30%`}}
            className={`md:hidden absolute z-30 top-0 right-0 w-64 h-screen bottom-0 duration-500 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className={`w-full ${scrolling ? 'h-[3.5rem]' : 'h-[4rem]'}  `}></div>
              <div className="pl-8 pt-10 w-full h-full flex flex-col gap-5 bg-white overflow-y-auto justify-between">
                <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-NavMenuFont">Explore QBC</h1>
                <div className="flex flex-col gap-4">
                  {
                    Navdata.map((item, index)=>(
                      <div className="flex flex-col items-start w-52 rounded-md border-[2px] border-black/50 py-3 pl-2 bg-white" onClick={() => { setbtn(!btn); setbtnindex(index); 
                        if(!item.subbuthai){
                          setmenu(false)
                        }
                       }}>
                        <NavLink to={!item.subbuthai && item.add } onClick={()=>window.scrollTo({top: 0, behavior:"smooth"})}>
                          <button className="text-lg font-subMenuFont text-left w-full" key={item.id} >{item.buttoname}</button>
                        </NavLink>
                        {
                          item.subbuthai && 
                          <div className={`flex w-full flex-col pl-4 items-start gap-1 pt-2 pr-1 duration-300 overflow-hidden ${btn && btnindex === index ? 'flex' : 'hidden'}`}>
                            {
                              item.subbut.map(sub=>(
                                <button key={sub.id} onClick={()=>setmenu(false)} className=" border-b-[1px] py-1 text-left w-full pl-1">{sub.subbutname}</button>
                              ))
                            }
                          </div>
                        }
                      </div>
                    ))
                  }
                </div>
                </div>
                <div className="w-full h-20 flex justify-between items-center pb-[5rem]">
                  <h1 className="text-xs font-subMenuFont font-extralight text-gray-600">
                    FOLLOW US:
                  </h1>
                  <div className="flex w-2/3 justify-end px-4 gap-2">
                    <FaFacebookF className="rounded-full border-[1px] border-gray-400 w-6 h-6 p-1 " />
                    <FaInstagram className="rounded-full border-[1px] border-gray-400 w-6 h-6 p-1" />
                    <FaLinkedinIn className="rounded-full border-[1px] border-gray-400 w-6 h-6 p-1" />
                    <FaXTwitter className="rounded-full border-[1px] border-gray-400 w-6 h-6 p-1" />
                  </div>
                </div>
                {/* <div className="W-full h-10"></div> */}
              </div>

            </div>
          


          

        </nav>
        <div className={`fixed top-0 z-40 w-full h-full duration-500 ${menu || ishover ? 'backdrop-blur-md md:backdrop-blur-sm block' : 'backdrop-blur-0 hidden'}`} onMouseEnter={()=>setIsHover(false)} onClick={()=>setmenu(false)} ></div>
        

        

        
        <div className={` backdrop-brightness-50 fixed  z-40 top-0 2xl:w-[6rem] pb-2 xl:w-[5rem] lg:w-[4.8rem] md:w-[3.5rem] h-full border-r-[1px] border-gray-400 hidden md:flex flex-col justify-between gap-14 items-center`}>
          
          <div
            className={`${ishover ? 'hidden' : 'block'} h-[100%] mt-32 py-[1px] flex justify-center w-2 rounded-xl border-[1px] border-gray-400`}
          >
            <div
              style={{ transform: `translateY(${scrollposition*2}%)` }}
              className={`w-1 flex h-[33.4%] bg-gray-100 rounded-xl ${ishover ? 'hidden' : 'block'}`}
            ></div>
          </div>
          <div
            className={`${ishover ? 'hidden' : 'block'} flex flex-col justify-end pb-1 items-center gap-[5%]  text-white h-[50%] w-[100%]`}
          >
            <FaFacebookF className="lg:text-[250%] md:text-[200%] p-[10%] border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaInstagram className="lg:text-[250%] md:text-[200%] p-[10%] border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaLinkedinIn className="lg:text-[250%] md:text-[200%] p-[10%] border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
            <FaXTwitter className="lg:text-[250%] md:text-[200%] p-[10%] border-[1px] border-white/50  bg-white/10 duration-500 rounded-full hover:bg-blue-300/40" />
          </div>
          <div className={`fixed z-50 overflow-hidden h-full top-0 left-0 bottom-0 items-center  hidden md:flex flex-col duration-500 ${
              ishover ? "2xl:w-[24rem] xl:w-[22rem] lg:w-20rem] md:w-[18rem] " : "w-0 "
            }`}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className={` w-full  ${scrolling ? '2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] md:h-[3rem] h-[2.8rem] lg:pb-[4rem] xl:pb-20 pb-12 2xl:pb-24' : '2xl:h-[7rem] xl:h-[6rem] lg:h-[5rem] md:h-[4rem] h-[3.5rem] lg:pb-[4.5rem] xl:pb-20 pb-16 2xl:pb-24'}`}>
            </div>
            <div className={`relative  top-0 hidden md:flex w-full h-full bg-white  2xl:pl-[4.3rem] xl:pl-[4rem] lg:pl-[2rem] md:pl-[2rem] overflow-y-auto`}>
              <div
                className={`w-full h-max flex flex-col justify-start 2xl:pt-8 xl:pt-7 lg:pt-6 md:pt-5 items-start 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-2`}
              >
                <h1 className="w-max pb-5 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-subMenuFont font-semibold">
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
                    <NavLink to={item.add} className="z-50 flex items-center 2xl:text-xl md:text-base w-full h-full bg-black/30 text-left px-4 rounded-sm text-gray-100 font-NavMenuFont font-semibold ">
                    <button >
                      {item.buttoname}
                      </button>
                    </NavLink>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar
