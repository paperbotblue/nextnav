import { motion } from "framer-motion"

const Comp7 = () => {
  return (
    <div className="flex justify-center 2xl:min-h-[40em] items-center max-w-8xl mx-auto relative bg-gray-900 text-white font-sans">
      
      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[120em] md:pe-10 px-5 lg:pe-14 py-8 relative z-10">
        
        <motion.div className="md:ps-32"
        initial={{ x: -200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.04 }}
        >
          <h2 className="text-sm text-gray-400 mb-2">Why Us</h2>
          <h1 className="text-4xl font-bold mb-4">Exceptional quality that can’t be beaten.</h1>
          <p className="text-lg text-gray-300 mb-6">
            We take pride in delivering a level of quality that simply can't be surpassed. Our commitment to excellence is woven into the very fabric of our work, and it's what distinguishes us from the rest.
          </p>
          <button className="flex items-center bg-white text-black px-4 py-2 rounded-full">
            <i className="fas fa-ellipsis-h mr-2"></i> Learn More
          </button>
        </motion.div>


        <motion.div className="space-y-6"
         initial={{ y: -200,  opacity: 0 }} 
         whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.04 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 p-3 rounded-full mr-4">
                <i className="fas fa-award text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
            </div>
            <p className="text-gray-300">
              We prioritize quality in every aspect of our work, ensuring that your project is built to the highest standards, meeting and often exceeding industry benchmarks.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 p-3 rounded-full mr-4">
                <i className="fas fa-user-tie text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Expertise</h3>
            </div>
            <p className="text-gray-300">
              Our team comprises seasoned professionals with years of experience in the construction field.
            </p>
          </div>
        </motion.div>


      </div>
      
      {/* Four Vertical Bars */}
      <div className="absolute inset-0 flex justify-between max-w-6xl mx-auto z-0  pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-white opacity-20"></div>
        ))}
      </div>
    </div>
  );
};

export default Comp7;
