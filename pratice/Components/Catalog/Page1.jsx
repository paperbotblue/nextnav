import React from 'react';


const Page1 = () => {
  return (
    <div className=" max-h-[50em]  h-screen " >
      <div className='w-full h-full bg-cover flex max-w-[120em]  mx-auto items-center justify-center bg-center' style={{ backgroundImage: `url(https://i.pinimg.com/564x/08/29/cc/0829cc1818d40b77f11df5740b264feb.jpg)` }}>
      <div className="flex flex-col md:flex-row w-full max-w-[120em]  h-1/2">
        <div className="bg-blue-600 relative bg-opacity-75 w-full md:w-[80%] flex items-center justify-center">
          <h1 className="text-white text-4xl md:absolute bottom-8 right-4 md:text-6xl">Contents</h1>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start leading-8 text-white text-lg ml-0 md:ml-8 flex-grow p-4 md:p-0">
          <CatalogItem number="01" title="Introduction" />
          <CatalogItem number="02" title="Vision & Mission" />
          <CatalogItem number="05" title="Organization Chart" />
          <CatalogItem number="07" title="Projects" />
          <CatalogItem number="24" title="Projects List" />
        </div>
        <div className="bg-blue-600 bg-opacity-75 w-full md:w-10 mt-4 md:mt-0" />
        </div>
        </div>
    </div>
  );
};

const CatalogItem = ({ number, title }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <span className="text-sm font-bold xl:text-3xl lg:text-2xl text-xl mr-2">{number}</span>
      <span className="border-b font-bold xl:text-3xl lg:text-2xl text-xl border-white">{title}</span>
    </div>
  );
};

export default Page1;