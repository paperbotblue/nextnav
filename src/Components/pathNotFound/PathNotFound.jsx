import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0, y: "-100vh" },
    animate: {
      opacity: 1,
      y: "0vh",
      transition: { type: "spring", stiffness: 120, duration: 1 },
    },
  };

  

  
  return (
    <div className="w-full h-screen overflow-hidden max-w-[120em]">
    <motion.div
      className="flex flex-col items-center  justify-center h-screen bg-gradient-to-tr from-blue-400 to-[#111827] text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-9xl font-bold"
        // variants={errorNumberVariants}
        initial="initial"
        animate="animate"
      >
        404
      </motion.h1>
      <motion.h2
        className="text-3xl font-semibold mb-4"
        // variants={textVariants}
        whileHover="hover"
      >
        Oops! Page not found
      </motion.h2>
      <motion.p
        className="text-lg text-center mb-8 px-4"
        // variants={textVariants}
        whileHover="hover"
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div  whileHover="hover">
        <Link
          to="/"
          className="px-6 py-3 bg-white text-blue-500 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default NotFoundPage;
