import React,{useState} from "react";
import {  motion } from "framer-motion";
import CardsData from "../admin/CardsData";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoMailUnreadSharp } from "react-icons/io5";
import FeedbackBg from "../../assets/feedbackBg.jpg";

const FeedbackSlider = () => {
    const [ishover, setIshover] = useState(false)
    const feedbacks = CardsData[3].cards 
    // console.log(feedbacks);
    
    // Import feedback data from CardsData
  // Variants for sliding animation
  const sliderVariants = {
    animate: {
      x: ["0%", "-100%"], // Slide from 0% to -100%
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
          duration: 300, // Adjust speed
          ease: "linear",
        },
      },
    },
    
  };

  return (
    <div 
    // style={{backgroundImage: `url(${FeedbackBg})`}}
    className="overflow-hidden relative h-[35rem] max-w-[120em] mx-auto bg-gradient-to-t to-[#47719b]/80 via-[#111827] from-[#111827]  w-full">
        <div className="absolute flex w-full h-full py-4">
        <div className="relative w-1/4 h-full  border-r-[1px] border-gray-500 "></div>
        <div className="relative w-1/4 h-full  border-r-[1px] border-gray-500 "></div>
        <div className="relative w-1/4 h-full  border-r-[1px] border-gray-500 "></div>
        <div className="relative w-1/4 h-full  "></div>
        </div>
        <h1 className="w-full relative text-center text-4xl mt-14 text-white  font-bold">Feedbacks</h1>
      <motion.div
        className="flex  space-x-10 w-max h-full items-start mt-20"
        variants={sliderVariants}
        animate={ishover ? 'stop' : "animate"}
        
        >

        {feedbacks.concat(feedbacks).map((feedback, index) => ( // Duplicate array for seamless looping
          <div
            key={index}
            // style={{}}
            className="min-w-[300px] max-w-[500px] h-[50%] p-4 rounded-lg border-[1px] border-gray-500 backdrop-blur-sm shadow-gray-500 shadow-lg flex-shrink-0"
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
            
          >
            <h3 className="font-bold flex text-xl items-center gap-2 py-1 text-blue-500 mb-2"><span className="text-xl"><IoMailUnreadSharp/></span>{feedback.email}</h3>
            <p className="text-white text-pretty text-lg tracking-wide"><span className="inline-block"><RiDoubleQuotesL/></span>jfklahsdkfhaksasldfg;lsdhg sladkjhfalskjdhf af laks hflaksfflkajhsflkas a lkas fakls flkashdf{feedback.description}<span className="inline-block"><RiDoubleQuotesR/></span></p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeedbackSlider;

