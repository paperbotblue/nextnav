import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowsFullscreen } from "react-icons/bs";

const CardTemplate = () => {
  const data = useSelector((state) => state.card.data);
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardClick = (card) => {
    setFocusedCard(card); // Set the clicked card as focused
  };

  const closeFocusedCard = () => {
    setFocusedCard(null); // Reset the focused card
  };

  return (
    <div className="w-full max-w-[120em] bg-slate-300 h-screen pt-32 relative" >
      {/* Main Layout */}
      <div className="flex w-full h-full bg-slate-600">
        {/* Left Section */}
        <div
        // style={{backgroundImage: `url(${data.images[0].src})`, backgroundSize: 'cover'}}
        className="flex pl-28 w-[60%] h-full bg-slate-200 flex-col justify-center items-start gap-6">
          <h1 className="text-4xl font-bold w-4/5 flex justify-between "><span className="text-4xl text-blue-700">Project : </span>{data.name}</h1>
          <h1 className="text-xl font-medium w-4/5 flex justify-between"><span className="text-2xl text-blue-700">Owner/Client : </span>{data.owner}</h1>
          <h1 className="text-xl font-medium w-4/5 flex justify-between"><span className="text-2xl text-blue-700">Consultant : </span>{data.consultant}</h1>
          <h1 className="text-xl font-medium w-4/5 flex justify-between"><span className="text-2xl text-blue-700">Location : </span>{data.location}</h1>
          <p className="w-[80%] flex flex-col gap-2 font-medium text-balance"><span className="text-2xl text-blue-700 font-medium">Project details : </span>{data.description}</p>
        </div>

        {/* Right Section - Grid of Cards */}
        <div className="flex w-[40%] h-full">
          <div className="flex w-full h-full justify-center p-4 items-center gap-4">
            <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-4">
              {data.images.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer w-full h-full rounded-se-3xl rounded-es-3xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleCardClick(image)}
                >
                  <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="object-cover w-full h-full rounded-se-3xl rounded-es-3xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <BsArrowsFullscreen />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Focused Card Modal */}
      <AnimatePresence>
        {focusedCard && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 w-full h-full"
              
              onClick={closeFocusedCard} // Close modal on clicking the overlay
            />

            {/* Focused Card Content */}
            <motion.div
              className="fixed inset-0 z-50 flex w-4/6 h-4/6 items-center top-[20%] left-[15%] justify-center rounded-es-3xl shadow-2xl shadow-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative bg-white  rounded-se-3xl w-full h-full  rounded-es-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the overlay
              >
                <img
                  src={focusedCard.src}
                  alt={`Focused ${focusedCard.id}`}
                  className="object-cover w-full h-full "
                />
                <button
                  className="absolute top-4 right-4 bg-black text-white px-3 rounded-full text-xl"
                  onClick={closeFocusedCard} 
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardTemplate;
