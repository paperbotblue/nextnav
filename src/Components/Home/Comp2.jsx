import { FaArrowRight } from 'react-icons/fa';

const Comp2 = () => {
  return (
    <div className="flex flex-col items-center mt-[43em] lg:mt-60 justify-center w-full bg-gray-100 p-4">
      {/* First Section */}
      <div className="flex flex-col md:flex-row w-full mx-3 md:ml-[13em]  max-w-[120em]  bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        {/* Text Section */}
        <div className="flex animate-slideInLeft  flex-col justify-center p-5 md:p-10 flex-1 bg-white">
          <div className="text-orange-600 text-xs sm:text-sm font-bold mb-2">ABOUT US</div>
          <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            We're leading Industrial Solution Worldwide
          </h1>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 bg-orange-600 text-white text-lg rounded-full"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div
          className="md:flex-1 bg-cover bg-center h-[40vh] md:h-[50vh] animate-slideInRight"
          style={{ backgroundImage: "url('https://placehold.co/960x540')" }}
        ></div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="w-full md:w-1/2">
          <img
            src="https://placehold.co/800x600"
            alt="A close-up of a construction crane with a blue sky background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <div className="mb-4">
            <span className="text-orange-600 font-bold">CLEAN & FLEXIBLE</span>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">About Us</h1>
          </div>
          <p className="text-gray-700 mb-6">
            Praesent quis tempor erat, sit amet euismod odio. Morbi dapibus mattis sapien ac vestibulum.
            Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies. Praesent at
            nulla nisl. Nullam iaculis ultrices elit a gravida. Nunc non fermentum est, at fringilla velit.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="flex items-center p-4 bg-white text-blue-900 rounded shadow">
              <div className="bg-blue-900 p-2 rounded-full mr-4">
                <i className="fas fa-tools text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-bold">Contemporary Build</h2>
                <p className="text-sm">Suspendisse dapibus ligula a ligula luctus, quis pulvin</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white text-blue-900 rounded shadow">
              <div className="bg-blue-900 p-2 rounded-full mr-4">
                <i className="fas fa-home text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-bold">Home Repair & Design</h2>
                <p className="text-sm">Suspendisse dapibus ligula a ligula luctus, quis pulvin</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
