import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bg from "../../assets/adminBg.jpg";
import Logo from "../../assets/logo.png";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tempData } from '../../store/CardTemplateData'




const AnimatedComponent = ({data}) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch()
//   console.log(cards);
  

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    setAnimationKey((prev) => prev + 1); // Force animation restart
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container relative mx-auto max-w-[120em] py-5 w-full h-[55rem] 2xl:w-[120em] bg-black/20 flex flex-col sm:flex-row justify-between gap-4 items-center px-8">
      {/* Left Section */}
      <div 
    //   style={{backgroundImage: `url(${Bg})`}}
      className="left-section w-full sm:w-1/2 h-full z-30 relative flex justify-center items-start overflow-hidden">
        {/* Split Image Animation */}
        
        <AnimatePresence>
          {hoveredCard !== null && (
            <>
              {/* Top Half */}
              <motion.div
                // style={{backgroundImage: `url(${Bg})`}}
                key={`split-top-${animationKey}`}
                className="z-40 absolute top-0 left-0 w-full h-1/2 "
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                exit={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1>klj;lkfsdg</h1>
                <h1>klj;lkfsdg</h1>
                <h1>klj;lkfsdg</h1>
              </motion.div>
              {/* Bottom Half */}
              <motion.div
            //   style={{backgroundImage: `url(${Bg})`}}
                key={`split-bottom-${animationKey}`}
                className="z-40 absolute bottom-0 left-0 w-full h-1/2"
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                exit={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1>abhsldkjfalshjdf</h1>
                <h1>abhsldkjfalshjdf</h1>
                <h1>abhsldkjfalshjdf</h1>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Collage Image Animation */}
        <AnimatePresence>
          {hoveredCard !== null &&
            data[hoveredCard].images.map((image, index) => {
              const isOdd = index % 2 === 0;
              return (
                <motion.img
                  key={`${animationKey}-${index}`} // Unique key for animation reset
                  src={image.src}
                  alt={`Card ${hoveredCard + 1} Image ${index + 1}`}
                  className={`z-20 absolute w-1/4 top-[0.45rem] rounded-se-2xl rounded-es-2xl h-1/4 object-cover`}
                  initial={{
                    x: isOdd ? "-100%" : "100%",
                    y: index * 120 , // Vertical gap for collage effect
                    // rotate: isOdd ? -50 : 50,
                    opacity: 0,
                  }}
                  animate={{
                    x: isOdd ? "-60%" : "60%", // Final position with a gap
                    // rotate: isOdd ? 0 : 0, // Final rotation
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, duration: 0.5 }}
                  transition={{
                    delay: 0.5 + index * 0.4, // Starts after split animation
                    duration: 0.6,
                    ease: "backInOut",
                    
                  }}
                />
              );
            })}
        </AnimatePresence>
      </div>

      {/* Right Section - Grid of Cards */}
      <div className="right-section relative w-full sm:w-1/2 grid grid-cols-3 auto-rows-[300px] gap-4 overflow-y-auto h-full p-4">
        {data.map((card, index) => (
          <motion.div
          onClick={()=>{navigate('/cardtemplate'); dispatch(tempData(card)); window.scrollTo({top: 0, behavior: 'smooth'})}}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, zIndex: 40 , duration: 0.5}}
            className="card z-30 cursor-pointer relative flex group  justify-center items-center rounded-se-3xl rounded-es-3xl hover:shadow-xl bg-gray-200 border border-gray-400  overflow-hidden"
            key={card.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{backgroundImage: `url(${card.images[0].src})`}}
          >
            <div className="absolute inset-0 bg-black/50 h-12  self-end bg-opacity-70 text-white flex justify-center opacity-100 group-hover:opacity-0 items-center duration-300">
              {card.name}
            </div>
            <div className="absolute inset-0 h-full w-full backdrop-blur-sm border-white/80 border-2 rounded-se-3xl flex-col gap-6 rounded-es-3xl bg-black/50 self-end bg-opacity-70 text-white flex justify-center  opacity-0 hover:opacity-100 items-center duration-300">
              <img src={Logo} width={50} className="absolute bottom-3 right-3" />
              <BsArrowsFullscreen  className="text-3xl font-semibold"/>
            </div>
          </motion.div>
        ))}
      </div>
        
        <motion.div
        style={{zIndex: hoveredCard !== null ? 30 : -1,
            duration: 0.5,
        }}
        className=" absolute w-1/2 right-0 h-full backdrop-blur-sm duration-300"></motion.div>
    </div>
  );
};

export default AnimatedComponent;
