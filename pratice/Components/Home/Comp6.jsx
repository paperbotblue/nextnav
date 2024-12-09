import infra from '../../assets/HomeImg/infra.jpg'
import build from '../../assets/HomeImg/build.jpg'
import buildcon from '../../assets/HomeImg/buildcon.jpg'
import bridge from '../../assets/HomeImg/bridge.jpg'
import { motion } from "framer-motion"

const Comp6 = () => {
  return (
    // Main container
    <div className="flex flex-col lg:flex-row bg-[#9ec2e6] md:pe-10 px-5 lg:pe-14 text-blue-900 py-8 md:ps-[7em] lg:ps-[10em] lg:gap-8 max-w-[120rem] mx-auto">

      {/* Left side section */}
      <motion.div className="lg:w-1/2 flex flex-col justify-center lg:mr-8 "
       initial={{ x: -200,  opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.04 }}
      >
        <h3 className="text-blue-900 font-bold uppercase">Our Services</h3>
        <h1 className="text-3xl lg:text-5xl font-bold my-4">
          We Provide Best Industrial Services
        </h1>
        <p className="text-base mb-8">
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo
          consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum
          elit egestas sit amet. Phasellus faucibus pellentesque.
        </p>
        <button
          className="relative bg-blue-900 w-12 h-12 flex items-center justify-center rounded-md mb-8 lg:mb-0 transition-all duration-500 ease-in-out hover:bg-blue-600 hover:shadow-lg hover:border-blue-400 border border-transparent"
          aria-label="Explore Services"
        >
          <span className="text-white text-lg transition-transform transform hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </motion.div>

      {/* Right side section */}
      <motion.div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 "
        initial={{  opacity: 0 }} 
       whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
      
      >
        {services.map(({ title, description, image }, index) => (
          <motion.div
            key={index}
            className="bg-white text-[#255788] rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }} 
          >
            <img
              src={image}
              alt={`Service: ${title}`}
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform "
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm mb-2">{description}</p>
              <a
                href="#"
                className="text-[#255788] font-semibold hover:underline"
                aria-label={`Read more about ${title}`}
              >
                Read &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>


    </div>
  );
};

const services = [
  {
    title: "Infrastructure Services",
    description: "Facere distinctio tempor infrastructure services",
    image: infra
  },
  {
    title: "House Build",
    description: "Non doloremque sint eum dolor conseq",
    image: build
  },
  {
    title: "Building Construction",
    description: "Rerum repudiandae consequatur iste nihil",
    image: buildcon
  },
  {
    title: "Bridge Construct",
    description: "Natus ea vero sed soluta voluptas necessitatibus accusantiu",
    image: bridge
  },
];

export default Comp6;
