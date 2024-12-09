

const Sidebar2 = ({ text, number }) => {
  return (
    <div className="md:flex absolute z-20 left-0 top-0 hidden  h-full">
      <div className="flex flex-col w-16 h-full">
        <div className=" bg-[#4471ac] flex items-center justify-center h-1/2">
          <span className="text-white text-lg leading-6 transform -rotate-90 whitespace-nowrap">
            {text}
          </span>
        </div>
        <div className="h-0.5 bg-white"></div>
        <div className="flex-1 bg-[#5e5955] flex items-center justify-center">
          <img
            alt="Logo"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/kWTtje0Y1PUDByAkWv5f8CToC0SiofiALU4UFZ9LkMYaEvanA.jpg"
            width="40"
          />
        </div>
        <div className="h-0.5 bg-white"></div>
        <div className="flex-1 bg-[#5e5955] flex items-center justify-center">
          <span className="text-white text-xl">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
