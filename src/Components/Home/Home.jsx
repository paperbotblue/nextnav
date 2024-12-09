import  { useEffect, useState } from 'react';
import {Comp2, Comp4, Comp5, Comp6, Comp7, Comp8} from './index'
import {Feedbacks} from '../index'
import dubai from "../../assets/Dubai.mp4"
import FeedbackForm from '../feedbackform/FeedbackForm'
import { motion } from "framer-motion"

// Counter component for the counting animation
const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duration of animation in milliseconds
    const increment = targetNumber / (duration / 16); // increase per frame (approx 60fps)
    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16); // roughly 60fps

    return () => clearInterval(counter);
  }, [targetNumber]);

  return <span>{count}</span>;
};

const Home = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-gray-100 font-roboto relative flex justify-center items-start ">
        {/* Container with max-width 100em, centered */}
        <div
          className="relative max-w-[120em] 2xl:max-h-[50em] w-full h-[100%] pt-10 md:h-[75vh] lg:h-[90vh] bg-cover bg-center"
          
        >
           {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={dubai} // Replace with the correct path
    autoPlay
    loop
    muted
  ></video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black -z-0 opacity-50"></div>



          {/* Main Content */}
          <div className="md:absolute z-20 inset-0 flex flex-col justify-center items-start  px-[2em] md:px-[10em]  py-[3em] text-white space-y-[1em] animate-slideInLeft">
            <h1 className="text-[3em] z-20 font-bold leading-tight">Construction Solution</h1>
            <h2 className="text-[2.5em] z-20">for everyone</h2>
            <p className="mt-[1em] max-w-[30em] z-20 text-[1em] leading-relaxed">
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non.
              Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum.
              Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
            </p>
            <motion.button className="mt-[1.5em] bg-[#255788] z-20 text-white py-[0.5em] px-[1.5em] rounded-md text-[1em] hover:bg-orange-600 "
            initial={{ x: -200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
            >
              Learn More ➞
            </motion.button>
          </div>

         
        </div>
        
      </div>
      <div className='flex flex-col relative items-center  justify-center w-full  '>
       {/* Bottom Content */}
          <div className=" gap-3 flex flex-col md:absolute md:pl-32 lg:pl-80 md:pb-44 md:flex-row items-center px-[2em] py-[3em] space-y-[1em] md:space-y-0">
            {/* Stats Section */}
            <div className="flex z-20  md:flex-row items-center gap-3">
              <motion.div 
  initial={{ y: 50,  opacity: 0.4 }} 
  whileInView={{ y: 0, opacity: 1 }} 
  transition={{ duration: 0.8 }} // Smooth transition
  className="bg-[#255788] text-white p-[1.5em] rounded-lg text-center"
>
                <p className="text-[2em] font-bold">
                  <Counter targetNumber={147} />
                </p>
                <p className="text-[1em]">Completed Projects</p>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0.4 }} 
  whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1 }} // Smooth transition
              className="bg-gray-500 text-white p-[1.5em] rounded-lg text-center">
                <p className="text-[2em] font-bold">
                  <Counter targetNumber={26} />
                </p>
                <p className="text-[1em]">Years of Experience</p>
              </motion.div>
            </div>

            {/* Info Section Container with Overflow Hidden */}
            <div className="overflow-hidden z-20">
            <motion.div className="bg-white p-[1.5em] z-20 rounded-lg shadow-lg max-w-[30em] "
            initial={{ x: 200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
  transition={{ duration: 0.8 }} // Smooth transition
            >
                <h3 className="text-blue-900 text-[1.25em] font-bold mb-[0.5em]">
                  We Construct and Manage Places and Infrastructures
                </h3>
                <div className="flex items-start mb-[1em]">
                  <i className="fas fa-building text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">General Contract</h4>
                    <p className="text-[0.875em]">Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum</p>
                  </div>
                </div>
                <div className="flex items-start mb-[1em]">
                  <i className="fas fa-project-diagram text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">Project Planning</h4>
                    <p className="text-[0.875em]">Nullam commodo tincidunt nisl, nec vehicula dui interdum nec</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-tools text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">Refurbishment</h4>
                    <p className="text-[0.875em]">Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem risus. Sed nunc</p>
                  </div>
                </div>
              </motion.div>
          </div>
          </div>
          </div>

      <Comp2 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      
      <Comp7 />
      <Comp8 />
      <Feedbacks/>
      <FeedbackForm/>
    </div>
  );
};

export default Home;
