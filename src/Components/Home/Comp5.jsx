

const Comp5 = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Wrapper with max-width and max-height for 2xl */}
      <div className="max-w-full 2xl:max-w-7xl max-h-full 2xl:max-h-[40em] mx-auto">
      
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-center bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-12">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold">Get started on your construction project today!</h1>
            <p className="mt-4 text-lg">Contact us today, and let the journey to your dream construction project begin!</p>
            <button className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 font-semibold">
              Let's Get Started
            </button>
          </div>
          <div className="flex-1">
            <img src="https://via.placeholder.com/600x400" alt="Building" className="rounded-lg w-full" />
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-world results, as told by our customers</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-4">
            Where we share insights, updates, and stories that matter in the world of construction and beyond.
          </p>

          {/* All Photos Button */}
          <button className="mb-8 px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 font-semibold">
            All Photos
          </button>
        </section>

        {/* Customer Stories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 1 Description</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Project 2" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 2 Description</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400x300" alt="Project 3" className="rounded-lg w-full mb-4" />
            <p className="text-gray-600">Project 3 Description</p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Comp5;
