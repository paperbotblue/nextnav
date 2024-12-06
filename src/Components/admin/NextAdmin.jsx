import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardsData from "./CardsData";
import { RiAddLargeLine } from "react-icons/ri";
import BG from "../../assets/adminBg.jpg";
import AddAndUpdate from "./AddAndUpdate";
import { IoMdClose } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../../store/authslice";

const NextAdmin = () => {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // State for the clicked card
  const [activeCategory, setActiveCategory] = useState(CardsData[0]); // Active category for cards
  const [Feedback, setFeedback] = useState(true);
  const [showNewCardForm, setShowNewCardForm] = useState(false); // State for new card form
  const [mode, setMode] = useState("Add")
  const [initialData , setInitialData] = useState(null)

  const dispatch = useDispatch()

  const handleUpdateClick = (card) => {

      setMode("Update");
      setInitialData({
        id: card.id,
        projectName:card.name,
        location:card.location,
        owner:card.owner,
        consultant:card.consultant,
        projectDetails:card.description,
        images:card.images
      });
      setShowNewCardForm(true);
      setSelectedCard(null)
  }

  const extendedCardSize = Feedback ? "80%" : "50%";
  const extendedCardPosition = Feedback ? "10%" : "25%";

  useEffect(() => {
    document.body.style.overflow =
      selectedCard || showNewCardForm ? "hidden" : "auto";
  }, [selectedCard, showNewCardForm]);

  const handleCardClick = (card) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowNewCardForm(false);
    setSelectedCard(null);
  };

  const FeedbackHandlerAccept = (id)=>{
    console.log('accepted feedback',id);
    
  }

  const FeedbackHandlerReject = (id)=>{
    console.log('rejected feedback',id);
    
  }

  const FeedbackHandlerDelete = (id)=>{
    console.log('Deleted feedback',id);
    
  }

  const handleDeleteCard = (id)=> {
    console.log('deletecard',id);
    
  }

  const handleFeedback = (id) => {
    setFeedback(id === 3 || id === 4 ? false : true);
  };

  const handleAddCardClick = () => {
    setShowNewCardForm(true);
    setMode("Add");
    setInitialData(null);
  };

  const closeNewCardForm = () => {
    setShowNewCardForm(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "120em",
          height: "100vh",
          overflow: "hidden",
          margin: "0 auto",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "relative",
        }}
      >
        {/* Navbar */}
        <motion.nav
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            maxWidth: "120em",
            height: "3.5rem",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.7)",
            zIndex: 100,
          }}
        >
          <motion.div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            {CardsData.map((category) => (
              <h1
                key={category.id}
                onClick={() => {
                  handleCategoryChange(category);
                  handleFeedback(category.id);
                }}
                style={{
                  cursor: "pointer",
                  color:
                    activeCategory.id === category.id ? "#78B3CE" : "white",
                }}
              >
                [{category.cards.length}] {category.name}
              </h1>
            ))}
          </motion.div>
          <button style={{ padding: "0.5rem 1rem" }} onClick={()=>dispatch(logout())}>Logout</button>
        </motion.nav>
        <div className="w-full h-[3.5rem]"></div>

        {/* Main Content */}
        <motion.div
          style={{
            backgroundImage: `url(${BG})`,
            width: "100%",
            height: "100vh",
            overflow: "auto",  
            position: "relative",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <AnimatePresence>
            {(selectedCard || showNewCardForm) && (
              <motion.div
                className="backdrop-blur"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 90,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setSelectedCard(null);
                  closeNewCardForm();
                }}
              />
            )}
          </AnimatePresence>

          {/* Cards Grid */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gridAutoRows: Feedback ? "250px" : "200px",
              gap: "2rem",
              zIndex: 100,
            }}
          >
            {/* Add Card */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              style={{
                display: Feedback ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100%",
                width: "100%",
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.7)",
                cursor: "pointer",
              }}
              onClick={handleAddCardClick}
            >
              <RiAddLargeLine size={40} color="white" />
            </motion.div>

            {/* Render Cards */}
            {activeCategory.cards.map((card) => (
              <motion.div
              className="group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                key={card.id}
                layoutId={`${card.id}`}
                onClick={() => {handleCardClick(card);setShow(true)}}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  height: "100%",
                  width: "100%",
                  borderRadius: "2rem",
                  border: "1px solid rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  color: "white",
                  position: "relative",
                }}
              >
                <h1 className="relative z-50 text-2xl">{Feedback ? card.name : card.email}</h1>
                {!Feedback&&<p>{card.description}</p>}
                <div className={`absolute w-full h-full ${card.images ? "block" : "hidden"}`}>
                  <img
                    src={card.images ? card.images[0].src : undefined}
                    className="w-full h-full rounded-[2rem]"
                  />
                </div>
                <div
                className={`absolute z-50 self-end w-full py-2 flex gap-2 justify-end px-4 text-right text-white rounded-b-3xl duration-300  translate-y-0`}
              >
                <button
                  style={{display:activeCategory.id===4&&'none'}}
                  className={`${
                    Feedback
                      ? "text-2xl py-2 px-4 border-white/40"
                      : "text-base py-1 h-max px-2 border-white/70"
                  }  backdrop-blur-md text-blue-600 rounded-lg border  hover:border-blue-600/70 `}
                  onClick={(e) => {e.stopPropagation(); {Feedback ? handleUpdateClick(card) : FeedbackHandlerAccept(card.id)} setShow(false)}}
                >
                  {Feedback ? <MdOutlineModeEditOutline /> : "Accept"}
                </button>
                <button
                  className={`${
                    Feedback
                      ? "text-2xl py-2 px-4 border-white/40"
                      : "text-base py-1 h-max px-2 border-white/70 "
                  } px-4 text-2xl py-2 text-red-700 backdrop-blur-md rounded-lg border border-white/40 hover:border-red-600/70 `}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card click
                    if (Feedback) handleDeleteCard(card.id);
                    else if (activeCategory.id === 4) FeedbackHandlerDelete(card.id);
                    else FeedbackHandlerReject(card.id);
                    setShow(false);
                  }}
                >
                  {Feedback ? <RiDeleteBin6Fill /> : activeCategory.id===4 ? "Delete" : "Reject"}
                </button>
              </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {show && (
              <motion.div
                
                layoutId={show && `${selectedCard.id}`}
                style={{
                  position: "fixed",
                  top: `${extendedCardPosition}`,
                  left: `${extendedCardPosition}`,
                  transform: "translate(-50%, -50%)",
                  width: `${extendedCardSize}`,
                  height: `${extendedCardSize}`,
                  maxWidth: `${extendedCardSize}`,
                  maxHeight: `${extendedCardSize}`,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderRadius: "2rem",
                  zIndex: 100,
                  color: "white",
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  textAlign: "center",
                  overflow: "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
              >
                <div style={{width:'60%', display:!Feedback && 'none'}}>
                  <h1 style={{ fontSize: "2rem" }}>
                    Project name : {Feedback && selectedCard.name}
                  </h1>
                  <h1 style={{ fontSize: "1.5rem" }}>
                    Location : {Feedback && selectedCard.location}
                  </h1>
                  <h1 style={{ fontSize: "1.5rem" }}>
                    Owner/Client : {Feedback && selectedCard.owner}
                  </h1>
                  <h1 style={{ fontSize: "1.5rem" }}>
                    Consultant : {Feedback && selectedCard.consultant}
                  </h1>
                  <label htmlFor="description">Project description :</label>
                  <p id="description">{Feedback && selectedCard.description}</p>
                </div>
                <div style={{width:'40%', display:!Feedback && 'none'}}>
                  <h1>Project Photos</h1>
                  <div className="grid grid-cols-2">
                    {Feedback &&
                      selectedCard.images.map((i)=>(
                        <img key={i.id} src={i.src}></img>
                      ))
                    }
                  </div>
                </div>
                <div style={{width:'100%', display:Feedback && 'none'}}>
                  <h1>{!Feedback && selectedCard.email}</h1>
                  <p>{!Feedback && selectedCard.description}</p>
                </div>
                <button
                  onClick={() => {setSelectedCard(null); setShow(false)}}
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    position:'absolute',
                    bottom:'0'
                  }}
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* New Card Form */}
          <AnimatePresence>
            {showNewCardForm && (
              <motion.div
                style={{
                  position: "fixed",
                  top: `${extendedCardPosition}`,
                  left: `${extendedCardPosition}`,
                  transform: "translate(-50%, -50%)",
                  width: `${extendedCardSize}`,
                  height: `${extendedCardSize}`,
                  maxWidth: `${extendedCardSize}`,
                  maxHeight: `${extendedCardSize}`,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderRadius: "2rem",
                  zIndex: 100,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  textAlign: "center",
                  overflow: "auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
              >
                <AddAndUpdate
                  mode={mode}
                  initialData={initialData}
                  activeCategory={activeCategory}
                  onSubmit={(formData) => {
                    console.log("Submitted Data:", formData);
                    closeNewCardForm();
                  }}
                />
                <button
                  type="button"
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0",
                    right: "1.5rem",
                  }}
                  onClick={closeNewCardForm}
                >
                  <IoMdClose />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NextAdmin;