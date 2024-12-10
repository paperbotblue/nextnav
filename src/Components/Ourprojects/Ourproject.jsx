import React,{useEffect,useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import CardsData from '../admin/CardsData';

const Ourproject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = CardsData
    ? CardsData.flatMap((item) =>
        item.cards?.flatMap((card) => card.images?.map((img) => img.src)) || []
      )
    : [];
    console.log(CardsData);
    

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds
    
        return () => clearInterval(timer); // Cleanup timer on component unmount
      }, []);
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
            Our Projects
          </h1>
        </div>
        <div className='w-full h-full pl-32 py-6 pr-10'>
            <div className='w-full h-[40rem] bg-slate-400 border-t-2 border-l-2 border-b-2 rounded-2xl'></div>
            <div className='w-full h-[40rem] bg-slate-600'></div>
        </div>
      </div>
    </div>
  )
}

export default Ourproject
