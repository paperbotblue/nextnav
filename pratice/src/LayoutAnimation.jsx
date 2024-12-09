import React,{useState, useEffect} from 'react'
import { AnimatePresence, motion } from "motion/react"
import CardsData from './CardsData'


const LayoutAnimation = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    useEffect(() => {
        if(isOpened){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }
    }, [isOpened])

  return (
    <AnimatePresence>
        <motion.div layout 
        // className={` ${isOpened && selectedCard !== null ? 'overflow-hidden' : 'overflow-auto'}`}
        style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                justifySelf: 'center',
                justifyContent: 'center',
                maxWidth: '1200px',
                
                gap: '3rem',
                padding: '1rem',
                position: 'relative',
            }
        }
        
        >
            <div className={`absolute duration-500  backdrop-blur-sm bg-black/30 top-0 ${isOpened  ? 'w-full h-full visible z-40' :' h-0 hidden z-10'}`} onClick={() => setIsOpened(false)}
            ></div>
            {
                CardsData.map((card, index) => (
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
    </AnimatePresence>
  )
}

export default LayoutAnimation
