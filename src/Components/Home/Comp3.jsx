function Comp3() {
  return (
    <div className="flex items-center justify-center min-h-screen 2xl: max-h-[40em] bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden 2xl:max-h-[40em]">
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
}

export default Comp3;
