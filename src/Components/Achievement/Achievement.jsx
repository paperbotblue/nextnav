import { useState } from "react";

import Comp2 from "./Comp2";
import b1 from '../../assets/HomeImg/b1.jpeg'

const Achievement = () => {
  return (
    <div>
      <div className="relative max-w-[120em] mx-auto">
        {/* Background Image Section */}
        <div className="relative">
          <img
            src="https://picsum.photos/1920/600"
            alt="City skyline with buildings covered in fog"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-start pl-10 md:pl-24 lg:pl-44 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#00215b]">
              Achievement
            </h1>
            <p className="text-lg text-gray-700 mt-2">Home / Achievement</p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="absolute -bottom-10 md:right-20 right-3 w-4/6 sm:w-2/6 md:w-2/6 bg-white shadow-lg p-6 border-t-4 border-blue-900 rounded-md">
          <div className="pt-2">
            <p className="text-gray-500">Call Us Today</p>
            <p className="text-2xl font-bold text-blue-900">+ 1634 7638 654</p>
          </div>
        </div>
      </div>

      <Comp2 />

      <div className="flex  mt-16 md:mt-10 items-center min-h-[40em] bg-white">
        <div className="max-w-[120em] md:ps-[8em] md:pe-[4em] lg:pe-[2em] mx-auto p-4 flex flex-col lg:flex-row">
          {/* Image and Experience Section */}
          <div className="w-full lg:w-1/2 relative h-64 md:h-96">
            <img
              src="https://picsum.photos/600/800"
              alt="A construction worker holding a clipboard with a construction site in the background"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-blue-900 text-white p-4">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-lg">Years of Experience</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-10 md:pe-10 mt-8 md:mt-0">
            <h2 className="text-blue-900 text-sm font-bold">ABOUT US</h2>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
              We're providing the best customer service
            </h1>

            <div className="flex items-center mt-4">
              <img
                src="https://picsum.photos/100/100"
                alt="Portrait of Sean Bradshaw, CEO"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="text-gray-700">
                  Eenean tristique felis sed tellus aliquam pharetra. Nulla vel
                  sapien vel metus feugiat euismod
                </p>
                <p className="text-blue-900 font-bold mt-2">
                  Sean Bradshaw, CEO
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              Proin efficitur non ligula vitae porta. Pellentesque accumsan
              ullamcorper erat nec luctus. Sed at fermentum velit. Mauris tempor
              ante quis augue vestibulum ullamcorper. Donec volutpat ante ut
              condimentum porta
            </p>

            <button className="mt-6 bg-blue-900 text-white py-2 px-4 rounded-full flex items-center">
              Learn More <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Section with Vertical Lines */}
      <div className="relative flex flex-col items-center max-h-[22em] md:max-h-[25em] z-0 md:py-24 px-5 lg:pl-[6em]  xl:pl-[7em] md:pl-[5em] bg-white ">
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
              src={b1}
              alt="Building with modern architecture"
              className="rounded-lg ml-32 h-[70px] mb-4 "
            />
            <img
              src={b1}
              alt="Modern building with unique design"
              className="rounded-lg h-[70px] mb-4"
            />
            <img
              src={b1}
              alt="Building with glass facade"
              className="ml-32 rounded-lg h-[70px] mb-4"
            />
          </div>

          {/* Center Text Content */}
          <div className="flex flex-col items-center md:justify-center text-center w-full lg:w-2/3 px-4">
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
              src={b1}
              alt="Modern skyscraper"
              className="rounded-lg mr-32 h-[70px] mb-4"
            />
            <img
              src={b1}
              alt="Unique building design"
              className="rounded-lg h-[70px] mb-4"
            />
            <img
              src={b1}
              alt="Another modern building"
              className="rounded-lg h-[70px] mr-32 mb-4"
            />
          </div>
        </div>
      </div>

      {/* Additional Content with Lines */}
      <div className="relative flex flex-col items-center justify-center max-w-[120em] mx-auto min-h-full  px-5 lg:pl-[6em]  xl:pl-[7em] md:pl-[5em]  ">
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
                src={b1}
                alt="Silhouettes of people in a modern building with large windows"
                className="rounded-lg shadow-lg "
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
                src={b1}
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
                src={b1}
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
          {/* Stage 04 */}
          <div className="flex flex-col border-l-4 border-b-4 md:flex-row items-center py-8">
            {/* Text Section */}
            <div className="md:w-1/2 p-4 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-800">04</h2>
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
                src={b1}
                alt="Construction site with cranes and building structures"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
