import React from "react";

const Page7 = () => {
  return (
    <div className="flex flex-col items-center bg-blue-100 text-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div className="w-full max-w-full xl:max-w-[100rem]">
        <img
          src="https://img.freepik.com/free-photo/city_1127-3101.jpg?t=st=1731484790~exp=1731488390~hmac=2c4120039592939a495cac01a10d6c2e0c24ef4106aa03c5a9e65308934383e9&w=1380"
          alt="Warehouse"
          className="w-full object-cover rounded-lg shadow-md lg:max-h-[600px] md:max-h-[500px] sm:max-h-[300px]"
        />
        {/* Title Section */}
        <div className="w-full max-w-full xl:max-w-[90rem] text-left text-blue-700 text-lg md:text-xl lg:text-2xl font-semibold mt-2 sm:mt-4 order-1 sm:order-0">
          P. 902 - WAREHOUSE G+M (3 Nos.)
        </div>
      </div>

      {/* Details Section */}
      <div className="relative w-full max-w-full xl:max-w-[100rem] p-4 mt-4 sm:mt-6 order-0 sm:order-1">
        {/* Grayscale Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/city_1127-3101.jpg?t=st=1731484790~exp=1731488390~hmac=2c4120039592939a495cac01a10d6c2e0c24ef4106aa03c5a9e65308934383e9&w=1380')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            filter: "grayscale(100%)",
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 bg-transparent">
          <div className="flex flex-col md:flex-row border-b pb-2 mb-2">
            <span className="font-semibold text-blue-700 w-full md:w-1/3">
              Location:
            </span>
            <span className="w-full md:w-2/3">
              Plot No. 5974892 @ DIP second, Dubai
            </span>
          </div>
          <div className="flex flex-col md:flex-row border-b pb-2 mb-2">
            <span className="font-semibold text-blue-700 w-full md:w-1/3">
              Owner / Client:
            </span>
            <span className="w-full md:w-2/3">Premier Furniture Industry</span>
          </div>
          <div className="flex flex-col md:flex-row border-b pb-2 mb-2">
            <span className="font-semibold text-blue-700 w-full md:w-1/3">
              Consultant:
            </span>
            <span className="w-full md:w-2/3">
              K S S Building Contracting L.L.C.
            </span>
          </div>
          <div className="flex flex-col md:flex-row">
            <span className="font-semibold text-blue-700 w-full md:w-1/3">
              Project Status:
            </span>
            <span className="w-full md:w-2/3">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
