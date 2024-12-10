import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BG2 from "../../assets/BG2.jpg";
import { useNavigate } from "react-router-dom";
import { tempData } from '../../store/CardTemplateData'
import { useDispatch } from "react-redux";
import New from "./New";



const Completed = ({data,name}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState([]);
  const [bgImgaeIndex, setBgImageIndex] = useState(0);
  const [changeImage , setChangeImage] = useState(false);
  const [selecedCard, setSelectedCard] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const images = data.flatMap(i=>i.images.map(e=>e.src))
  const cardsImages = bgImage.map(i=>i.src)

  // console.log(images);
  
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);


  // useEffect(()=>{
  //   const timer = setInterval(() => {
  //     setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImage.length);
  //   }, 3000);
    
    
  //   return () => clearInterval(timer);
  // },[bgImage,changeImage])

  

  // const [current, setCurrent] = useState(0);

  // const nextCard = () => {
  //   setCurrent((prevIndex) => (prevIndex + 1) % data.length);
  // };

  // const prevCard = () => {
  //   setCurrent((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  // };

  // const getVisibleCards = () => {
  //   // Calculate visible cards based on current index
  //   const visibleCards = [];
  //   for (let i = -1; i <= 1; i++) {
  //     visibleCards.push(data[(current + i + data.length) % data.length]);
  //   }
  //   return visibleCards;
  // };
 

  

  return (
    <div
    className="relative  w-full h-full max-w-[120em] mx-auto">
      <div className="w-full h-full">
        <div className="relative w-full h-[40rem] flex items-center justify-center bg-gray-100 rounded-lg">
          <AnimatePresence>
            {/* Show the current image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`slider-${currentIndex}`}
              className="z-20 absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="z-30 absolute w-full h-full bg-gradient-to-r to-blue-600/20 via-black/10 from-blue-600/20 backdrop-brightness-50"></div>
          <h1 className="z-40 relative text-gray-200 text-5xl font-semibold tracking-wide">
            {name}
          </h1>
        </div>
        <div className="w-full flex">
          <New data={data} />
        </div>
      </div>
    </div>
  );
};

export default Completed;



{/* <div
        style={{backgroundImage:changeImage ? `url(${cardsImages[bgImgaeIndex]})` : `url(${BG2})`, backgroundSize:"cover", backgroundPosition:"center"}}
        className="relative w-full h-[50rem] pt-20 duration-300 flex">
          <div className="pl-28 w-1/2 h-full flex flex-col justify-center items-start gap-4">
            <h1 className={`text-white text-4xl font-bold ${changeImage ? 'block' : 'hidden'}`}>Poject :{selecedCard.name}</h1>
            <h1 className={`text-white text-xl font-medium ${changeImage ? 'block' : 'hidden'}`}>
              Owner/Client : {selecedCard.owner} 
            </h1>
            <h1 className={`text-white text-xl font-medium ${changeImage ? 'block' : 'hidden'}`}>Consultant : {selecedCard.consultant}</h1>
            <h1 className={`text-white text-xl font-medium ${changeImage ? 'block' : 'hidden'}`}>Location : {selecedCard.location}</h1>
            <p className={`text-white text-lg font-medium w-2/3 mt-5 ${changeImage ? 'block' : 'hidden'}`}>{`${selecedCard.description}...`}</p>
          </div>
          <div className="w-1/2 h-full flex items-end px-10 ">
            <div className="relative w-[90%] mx-auto h-64 flex items-center bg-gradient-to-r to-black/40 via-transparent from-black/40 justify-center overflow-hidden border border-gray-300 rounded-lg">
             
              <div className="flex w-full h-full items-center justify-center gap-6">
                {getVisibleCards().map((card, index) => (
                  <motion.div
                    onClick={()=>{navigate('/cardtemplate'); dispatch(tempData(card))}}
                    onMouseEnter={()=>{index === 1 && setBgImage(card.images);setChangeImage(true); setSelectedCard(card)}}
                    onMouseLeave={()=>{index === 1 && setBgImage([]);setChangeImage(false); setBgImageIndex(0);setSelectedCard([]) }}
                    key={card.id}
                    style={{backgroundImage:`url(${card.images[0].src})`}}
                    className={`flex-shrink-0 w-72 h-56 cursor-pointer  text-white text-lg font-bold flex items-center justify-center rounded-lg shadow-md ${
                      index === 1 ? "z-10" : "z-0 "
                    }`}
                    initial={{
                      x: index === 0 ? -300 : index === 2 ? 300 : 0,
                      scale: 0.9,
                    }}
                    animate={{
                      x: index === 0 ? -30 : index === 2 ? 30 : 0,
                      // translateX: index === 0 ? -30 : index === 2 ? 30 : 0,
                      scale: index === 1 ? 1 : 0.8,
                      opacity: index === 1 ? 1 : 0.6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 2,
                      duration: 0.2,
                      // bounce:0
                    }}
                  >
                    {card.name}
                  </motion.div>
                ))}
              </div>

            
              <button onClick={()=>prevCard} className="absolute left-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-300">
                ◀ </button>
              <button
                onClick={()=>nextCard}
                className="absolute right-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
              >
                ▶
              </button>
            </div>
          </div>
        </div> */}