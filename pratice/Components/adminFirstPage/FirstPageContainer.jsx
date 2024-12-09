import React from 'react'
import BG from "../../assets/BG2.jpg";

const FirstPageContainer = (props) => {
  return (
    
    <div className="relative flex justify-center items-center w-full h-screen">
      <div className="absolute z-30 w-full h-full">
        <img src={BG} className="w-full h-full object-cover"></img>
        <div className="absolute z-40 bg-black/30 top-0 w-full h-full backdrop-blur-md"></div>
      </div>
      {props.children}
    </div>
  )
}

export default FirstPageContainer
