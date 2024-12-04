import React from "react";

const History = () => {
  return (
    <div>
      {/* Main Section with Vertical Lines */}
      <div className="relative flex flex-col items-center max-h-[30em] md:max-h-[25em] z-0 py-24 px-5 lg:pl-[6em]  xl:pl-[7em] md:pl-[5em] bg-white ">
        {/* Vertical Lines in Background */}
        <div className="absolute hidden inset-y-0 left-0 pl-20 right-0 lg:flex justify-between max-w-6xl mx-auto z-0 pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-[1px] bg-black opacity-10 h-full"></div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex h-[40em] w-full max-w-[110em]">
          {/* Left Image Column */}
          <div className="lg:flex flex-col hidden mt-10 items-start justify-start md:w-1/4 lg:w-1/3">
            <img
              src="https://placehold.co/70x70"
              alt="Building with modern architecture"
              className="rounded-lg ml-32 mb-4 "
            />
            <img
              src="https://placehold.co/70x70"
              alt="Modern building with unique design"
              className="rounded-lg mb-4"
            />
            <img
              src="https://placehold.co/70x70"
              alt="Building with glass facade"
              className="ml-32 rounded-lg mb-4"
            />
          </div>

          {/* Center Text Content */}
          <div className="flex flex-col items-center justify-center text-center w-full lg:w-2/3 px-4">
            <div className="mb-4">
              <i className="fas fa-cogs text-4xl"></i>
            </div>
            <h1 className="text-2xl font-bold mb-4">
              Experience the swiftness of our best work process as we prioritize
              efficiency and excellence in every step
            </h1>
            <p className="text-gray-700">
              We will explore the journey of translating concepts into intricate
              designs, utilizing methods such as sketching, digital modeling,
              and prototyping. Witness the collaborative efforts of designers
              and engineers refining ideas, considering elements like
              aesthetics, functionality, materials, and manufacturing
              feasibility.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:flex flex-col hidden mt-10 items-end justify-end md:w-1/4 lg:w-1/3">
            <img
              src="https://placehold.co/70x70"
              alt="Modern skyscraper"
              className="rounded-lg mr-32 mb-4"
            />
            <img
              src="https://placehold.co/70x70"
              alt="Unique building design"
              className="rounded-lg mb-4"
            />
            <img
              src="https://placehold.co/70x70"
              alt="Another modern building"
              className="rounded-lg mr-32 mb-4"
            />
          </div>
        </div>
      </div>

      {/* Additional Content with Lines */}
      <div className="relative flex flex-col items-center justify-center max-w-[120em] mx-auto min-h-full py-24 px-5 lg:pl-[6em]  xl:pl-[7em] md:pl-[5em]  bg-white">
        {/* Vertical Lines in Background */}
        <div className="absolute hidden  inset-y-0 left-0 pl-20 right-0 lg:flex justify-between max-w-6xl mx-auto z-0 pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-[1px] bg-black opacity-10 h-full"></div>
          ))}
        </div>

        <div className="max-w-4xl w-full">
          {/* Stage 01 */}
          <div className="flex flex-col border-t-4 border-r-4 border-b-4 md:flex-row items-center md:py-8">
            {/* Image Section */}
            <div className="md:w-1/2 p-4  ">
              <img
                src="https://placehold.co/600x400"
                alt="Silhouettes of people in a modern building with large windows"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-bold text-gray-800">01</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                Approved Project
              </h3>
              <p className="text-gray-600 pt-4">
                Once the design receives final approval, the implementation
                phase commences. Explore the diverse techniques and technologies
                employed to bring the design to fruition.
              </p>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="flex flex-col border-l-4 border-b-4 md:flex-row items-center py-8">
            {/* Text Section */}
            <div className="md:w-1/2 p-4 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-800">02</h2>
              <h3 className="text-2xl font-semibold text-gray-800 pt-2">
                Construction
              </h3>
              <p className="text-gray-600 pt-4">
                Technological advancements have redefined the landscape of
                manufacturing. Discover how these innovations enable greater
                customization, expedited production, and improved functionality.
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 p-4  order-1 md:order-2">
              <img
                src="https://placehold.co/600x400"
                alt="Construction site with cranes and building structures"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stage 03 */}
          <div className="flex flex-col md:flex-row border-r-4 border-b-4 items-center py-8">
            {/* Image Section */}
            <div className="md:w-1/2 p-4">
              <img
                src="https://placehold.co/600x400"
                alt="Modern architectural structure with curved design"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-1/2 p-4">
              <h2 className="text-4xl font-bold text-gray-800">03</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                Tangible Object
              </h3>
              <p className="text-gray-600 mt-4">
                Tangible objects serve as the bridge between imagination and
                reality, transforming ideas into physical forms that enhance our
                daily lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
