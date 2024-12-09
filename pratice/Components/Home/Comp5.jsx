import b1 from '../../assets/HomeImg/b1.jpeg'
import { motion } from "framer-motion"

const Comp5 = () => {
  return (
    <div className="bg-gray-100 p-4">
      {/* Wrapper with max-width and max-height for 2xl */}
      <div className="   md:ps-20 lg:ps-32  lg:pe-4 max-w-[115em] max-h-full  mx-auto">
      
        {/* Header Section */}
        <section className="flex w-full flex-col md:flex-row items-center  bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-12">
          <motion.div className="flex-1 mb-6 md:mb-0"
          initial={{ x: -200,  opacity: 0 }} 
           whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold">Get started on your construction project today!</h1>
            <p className="mt-4 text-lg">Contact us today, and let the journey to your dream construction project begin!</p>
            <button className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 font-semibold">
              Let's Get Started
            </button>
          </motion.div>
          <motion.div className="flex-1"
            initial={{ opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.02 }}
          >
            <img src={b1} alt="Building" className="rounded-lg w-full" />
          </motion.div>
        </section>

        {/* Customer Stories Section */}
        <motion.section className="text-center mb-8"
         initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-world results, as told by our customers</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-4">
            Where we share insights, updates, and stories that matter in the world of construction and beyond.
          </p>

          {/* All Photos Button */}
          <button className="mb-8 px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 font-semibold">
            All Photos
          </button>
        </motion.section>

        {/* Customer Stories Grid */}
        <motion.section className="grid grid-cols-1 md:grid-cols-3 gap-8"
         initial={{ y: 50,  opacity: 0 }} 
             whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
        >
          <motion.div className="bg-white p-4 rounded-lg shadow-lg"
           initial={{ opacity: 0 }} 
              whileInView={{opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
          >
            <img src={b1} alt="Project 1" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 1 Description</p>
          </motion.div>
          <motion.div className="bg-white p-4 rounded-lg shadow-lg"
           initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.6 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
          >
            <img src={b1} alt="Project 2" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 2 Description</p>
          </motion.div>
          <motion.div className="bg-white p-4 rounded-lg shadow-lg"
           initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
          >
            <img src={b1} alt="Project 3" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 3 Description</p>
          </motion.div>
        </motion.section>
        
      </div>
    </div>
  );
};

export default Comp5;
