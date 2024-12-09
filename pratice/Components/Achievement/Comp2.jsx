import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion"
import b1 from '../../assets/HomeImg/b1.jpeg'
import b2 from '../../assets/HomeImg/b3.jpeg'

const Comp2 = () => {

  return (
    <div className="flex flex-col items-center md:mt-28 max-w-[120em] mx-auto justify-center w-full  md:pl-[10em]  md:pr-24 lg:pr-10  bg-gray-100 p-4">
      

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row max-w-[110em] bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <motion.div className="w-full order-2 lg:w-1/2"
         initial={{ x: 200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.02 }}
        >
          <img
            src={b2}
            alt="A close-up of a construction crane with a blue sky background"
            className="object-fit w-full h-[35em]"
          />
        </motion.div>
        <motion.div className="w-full lg:w-1/2 p-6 md:p-10"
         initial={{ x: -200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.03 }}
        >
          <div className="mb-4 ">
           
            <h1 className="text-3xl md:text-4xl  font-bold text-[#255788] border-t-8 pt-2 inline-block border-solid border-[#255788]">Our Mission</h1>
          </div>
          <p className="text-gray-700 text-xl mb-6">
            To be a leading infrastructure company recognised for business innovaitons, focused on total satisfaction for all its stakeholders,.
            To adopt the latest technologies in the field of Engineering, Construction, Operations, and Maintenance of infasttucture Projects.
            To encourage innovation, professional integrity, up-gradation of the knowledge and skills of employess, and a safe workig environment.
          </p>
           
           <div className="mb-4 ">
           
            <h1 className="text-3xl md:text-4xl  font-bold text-[#255788] border-t-8 pt-2 inline-block border-solid border-[#255788]">OUR VISION</h1>
          </div>
          <p className="text-gray-700 text-xl mb-6">
            To be a construction company with ethical standards committed to quality reliability, customer satisfaction and continuous learning 
          </p>
         
        </motion.div>


      </div>
    </div>
  );
};

export default Comp2;
