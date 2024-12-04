import React from 'react';
import Sidebar from './Sidebar';

function Page2() {
  return (
    <div className="relative  max-w-[120em] mx-auto flex flex-col lg:flex-row items-start md:px-[4em] lg:pl-[12em] p-3 h-full lg:h-1/2">
      {/* Watermark Image for small screens */}
      <img
        src="https://storage.googleapis.com/a1aa/image/3GHZ6o57DhIwNZXcpjVZgwtffuinNv2KeNBjiJTzmhqVSvanA.jpg"
        alt="Outline of buildings"
        className="absolute inset-0 w-full h-full object-fill opacity-15 z-0 block lg:hidden"
      />
      
      {/* Sidebar for small screens */}
      <div className="lg:hidden w-full mb-4">
        <Sidebar text="VISION & MISSION" number="01" />
      </div>

      {/* Content section */}
      <div className="relative z-10 w-full md:w-[90%] self-center lg:w-1/2 bg-white bg-opacity-50 p-3">
        <h1 className="text-4xl text-blue-600 mb-4">Introduction</h1>
        <p className="text-gray-700 mb-4">
          Baytek Group is a group of construction companies established as individual companies starting from the year 2004 in Sharjah and Dubai with a goal of providing a variety of unique and high quality construction services.
        </p>
        <p className="text-gray-700 mb-4">
          Our group is teamed-up with a set of talented and ambitious professionals who strongly structured and organized our companies in a thoughtful approach insuring that the groups goals are achieved through their extensive and diverse experience in the construction field.
        </p>
        <p className="text-gray-700 mb-4">
          In accordance with standard requirements and group's commitment to quality, Baytek Group has established and implemented a Quality Management System based on ISO 9001:2015 edition requirements. The Quality Management System assures that Baytek group provides its clients with consistent and reliable performance in adherence with best practice offered in the construction industry.
        </p>
        <p className="text-blue-600 font-bold">Eng. Sameh Al Shahaby</p>
        <p className="text-gray-700">Managing Director</p>
      </div>

      {/* Original image for larger screens */}
      <img
        src="https://storage.googleapis.com/a1aa/image/3GHZ6o57DhIwNZXcpjVZgwtffuinNv2KeNBjiJTzmhqVSvanA.jpg"
        alt="Outline of buildings"
        className="w-1/2 hidden lg:block h-full object-fill overflow-y-hidden opacity-25"
      />

      {/* Sidebar for large screens */}
      <div className="hidden lg:block">
        <Sidebar text="VISION & MISSION" number="01" />
      </div>
    </div>
  );
}

export default Page2;
