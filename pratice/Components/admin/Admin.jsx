import React, { useState, useEffect } from "react";
import BG from "../../assets/adminBg.jpg"
import { AnimatePresence, motion } from "motion/react"

// import AllPostCards from "./AllPostCards";
import CardsData from "./CardsData";
import { RiAddLargeLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";

const Admin = () => {
  const [posts, setPosts] = useState(CardsData[0]);
  const [show, setShow] = useState(true);
  const [isOpened, setIsOpened] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
  // const [isExpanded, setIsExpanded] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isLargeIndex, setIsLargeIndex] = useState(null);
  // const dataHandler = (id, index, {data})=>{
  //   if(id === index){
  //     setPosts(data)
  //   }
  //   else{
  //     setPosts({})
  //   }
  // }

  const showHandler = (id) => {
    if (id === 3 || id === 4) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // console.log(posts);

  return (
    <div className="w-fll h-full flex justify-center ">
      <div
        className="relative w-full h-screen max-w-[120em] overflow-hidden backdrop-blur-sm "
        style={{
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "repeat",
          backgroundSize: "",
        }}
      >
        <div className="z-30 absolute w-full h-full bg-blue-600/20 backdrop-brightness-50"></div>
        <nav className=" z-50 flex justify-between py-2 pr-4 px-2 w-full fixed h-14 bg-slate-500 border-b border-gray-300 ">
          <ul className="flex items-center h-full font-normal gap-4 divide-x-[1px] text-white">
            {CardsData.map((data) => (
              <li
                key={data.id}
                onClick={() => {
                  setPosts(...data);
                  showHandler(data.id);
                }}
              >
                <button className="cursor-pointer flex items-center justify-center gap-2 text-lg pl-4 active:text-blue-300">
                  <p className={`text-sm text-green-400`}>
                    [{data.cards.length}]
                  </p>
                  {data.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="rounded-md border px-5 hover:bg-blue-100/10 text-white text-lg font-medium ">
            Logout
          </button>
        </nav>
        <div className="h-[3.5rem] w-full"></div>
        {/* <AnimatePresence>
        <motion.div layout 
        // className={` ${isOpened && selectedCard !== null ? ' ' : 'z-50'} duration-300`}
        style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                justifySelf: 'center',
                justifyContent: 'center',
                maxWidth: '1200px',
                height: '100vh',
                gap: '3rem',
                padding: '1rem',
                position: 'relative',
                zIndex: 100,
                overflow: 'auto',
            }
        }
        
        >
            <div className={`absolute duration-500  backdrop-blur-sm bg-black/30 top-0 ${isOpened  ? 'w-full h-full visible z-40' :' h-0 hidden z-10'}`} onClick={() => setIsOpened(false)}
            ></div>
            {
                posts.cards.map((card, index) => (
                    <motion.div layout
                    style={{width:'200px',
                    height: '200px',

                    }}
                    >
                    <motion.div layoutId={card.id}
                    key={card.id}
                    onClick={()=>{
                        setSelectedCard(index)
                        setIsOpened(!isOpened)
                    }}
                    style={
                        isOpened && selectedCard === index ?
                        {
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            cursor: "pointer",
                            padding: "1rem",
                            width: "700px",
                            height: "700px",
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: "cover",
                            color: "white",
                            top: "8%",
                            left: "21%",
                            position: "absolute",
                            
                            zIndex: 1000,

                        }
                        :
                        {
                            cursor: "pointer",
                            padding: "1rem",
                            width: "200px",
                            height: "200px",
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: "cover",
                            color: "white",
                        }
                    }
                    
                    >
                        <h1>{card.name}</h1>
                        {
                            isOpened && selectedCard === index && <p>{card.description}</p>
                        }
                    </motion.div> 
                </motion.div>
                ))
            }
        </motion.div>
    </AnimatePresence> */}
        <div
          className={`z-30 relative ${
            show ? "auto-rows-[300px]" : "auto-rows-[200px]"
          } py-4 px-4 z-40 grid grid-cols-5  w-full gap-4 h-full overflow-y-auto scroll-smooth `}
        >
          <button
            id={posts.name}
            type="submit"
            className={`${
              show ? "flex" : "hidden"
            } rounded-3xl justify-center items-center bg-white/20 border-2 active:bg-white/30 active:scale-[0.99] duration-200 border-gray-100`}
          >
            <span className="text-6xl text-gray-200">
              <RiAddLargeLine />
            </span>
          </button>
          {posts.cards.map((item, index) => (
            <div
              key={item.id}
              className={`  overflow-hidden justify-center items-center  group cursor-pointer  border-2 border-gray-300  rounded-3xl flex ${
                isLarge && isLargeIndex === index
                  ? " z-50 absolute bg-slate-500 top-4 w-[80%] h-[90%] left-[10%] right-[10%] duration-200 "
                  : `duration-300 z-40 relative w-auto hover:scale-105 ${
                      show ? "h-[300px]" : "h-[200px]"
                    }`
              }`}
              onClick={() => {
                setIsLarge(!isLarge);
                setIsLargeIndex(index);
              }}
            >
              <div
                className={`z-20 absolute w-full h-full rounded-3xl ${
                  show ? "block" : "hidden"
                }`}
              >
                <img
                  src={item.image}
                  className="w-full h-full rounded-3xl object-cover"
                ></img>
              </div>
              <span className="absolute  rounded-3xl hidden justify-center items-center z-50 text-3xl text-white font-semibold  group-hover:flex duration-500 hover:scale-125 active:scale-100 ">
                <BsArrowsFullscreen />
              </span>

              <div
                className="absolute z-30 group-hover:z-40 w-full h-full bg-gradient-to-b to-black/70 
group-hover:to-black/90  rounded-3xl from-transparent"
              ></div>
              <div
                className={`absolute z-30 space-y-2 px-4 w-full ${
                  show ? "bottom-16" : ""
                } `}
              >
                <h1
                  className={`text-2xl font-semibold text-gray-200 self-end w-full ${
                    show ? "bottom-16" : "top-2 text-lg"
                  }`}
                >
                  {item.name}
                </h1>
                <p
                  className={`text-sm text-white pb-4 text-left  ${
                    show ? "hidden" : "block"
                  }`}
                >
                  {item.description.substring(0, 200)}....
                </p>
              </div>
              <div
                className={`relative z-50 self-end w-full py-2 flex gap-2 justify-end px-4 text-right text-white rounded-b-3xl duration-300 translate-y-full group-hover:translate-y-0`}
              >
                <button
                  className={`${
                    show
                      ? "text-2xl py-2 px-4 border-white/40"
                      : "text-base py-1 h-max px-2 border-white/70"
                  }  backdrop-blur-md text-blue-600 rounded-lg border  hover:border-blue-600/70 `}
                >
                  {show ? <MdOutlineModeEditOutline /> : "Accept"}
                </button>
                <button
                  className={`${
                    show
                      ? "text-2xl py-2 px-4 border-white/40"
                      : "text-base py-1 h-max px-2 border-white/70 "
                  } px-4 text-2xl py-2 text-red-700 backdrop-blur-md rounded-lg border border-white/40 hover:border-red-600/70 `}
                >
                  {show ? <RiDeleteBin6Fill /> : "Reject"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
