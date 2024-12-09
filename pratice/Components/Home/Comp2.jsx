import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion"
import b1 from '../../assets/HomeImg/b1.jpeg'
import b2 from '../../assets/HomeImg/b3.jpeg'

const Comp2 = () => {

  return (
    <div className="flex flex-col items-center md:mt-28  justify-center w-full  md:pl-[10em]  md:pr-24 lg:pr-10  bg-gray-100 p-4">
      {/* First Section */}
      <div className="flex flex-col md:flex-row w-full mx-3 md:mx-10 max-w-[110em] bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        {/* Text Section */}
        <motion.div
          className="flex animate-slideInLeft flex-col justify-center p-5 md:p-10 flex-1 bg-white"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }} // Smooth transition
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-[#255788] text-xs sm:text-sm font-bold mb-2">
            ABOUT US
          </div>

          {/* Image Section */}
          <motion.div
            className="md:flex-1 md:hidden bg-cover bg-center h-[40vh] md:h-auto animate-slideInRight"
            style={{ backgroundImage: `url(${b1})` }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} // Smooth transition
            whileHover={{ scale: 1.1 }}
          ></motion.div>

          <h1 className="text-[#255788] pt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            We're leading Industrial Solution Worldwide
          </h1>
          <div className="">
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 bg-[#255788] text-white text-lg rounded-full"
            >
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
        {/* Image Section */}
        <motion.div
          className="md:flex-1 hidden md:flex bg-cover bg-center h-[40vh] md:h-auto animate-slideInRight"
          style={{ backgroundImage: `url(${b1})` }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }} // Smooth transition
          whileHover={{ scale: 1.1 }}
        ></motion.div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row max-w-[110em] bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -200, opacity: 0 }}
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
        <motion.div
          className="w-full lg:w-1/2 p-6 md:p-10"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }} // Smooth transition
          whileHover={{ scale: 1.03 }}
        >
          <div className="mb-4">
            <span className="text-[#255788] font-bold">CLEAN & FLEXIBLE</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#255788]">
              About Us
            </h1>
          </div>
          <p className="text-gray-700 mb-6">
            Praesent quis tempor erat, sit amet euismod odio. Morbi dapibus
            mattis sapien ac vestibulum. Pellentesque quis pharetra ipsum.
            Integer sagittis lectus id pellentesque ultricies. Praesent at nulla
            nisl. Nullam iaculis ultrices elit a gravida. Nunc non fermentum
            est, at fringilla velit.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="flex items-center p-4 bg-white text-blue-900 rounded shadow">
              <div className="bg-blue-900 p-2 rounded-full mr-4">
                <i className="fas fa-tools text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-bold">Contemporary Build</h2>
                <p className="text-sm">
                  Suspendisse dapibus ligula a ligula luctus, quis pulvin
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white text-blue-900 rounded shadow">
              <div className="bg-blue-900 p-2 rounded-full mr-4">
                <i className="fas fa-home text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-bold">Home Repair & Design</h2>
                <p className="text-sm">
                  Suspendisse dapibus ligula a ligula luctus, quis pulvin
                </p>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-[#255788] text-white font-bold rounded hover:bg-blue-700">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Comp2;
