import React from "react";

const services = [
  { 
    title: "Welding Works", 
    description: "Expert welding services for industrial projects.",
    image: "https://placehold.co/600x400?text=Welding+Works" 
  },
  { 
    title: "General Building", 
    description: "Comprehensive building services for all your needs.",
    image: "https://placehold.co/600x400?text=General+Building" 
  },
  { 
    title: "Construction Build", 
    description: "Construction build begins with transforming ideas into detailed plans.",
    image: "https://placehold.co/600x400?text=Construction+Build" 
  },
  { 
    title: "Interior Design", 
    description: "Creative interior design solutions for any space.",
    image: "https://placehold.co/600x400?text=Interior+Design" 
  },
  { 
    title: "Mechanical Works", 
    description: "High-quality mechanical works for various applications.",
    image: "https://placehold.co/600x400?text=Mechanical+Works" 
  },
  { 
    title: "Factory Design", 
    description: "Efficient factory design for optimized production flow.",
    image: "https://placehold.co/600x400?text=Factory+Design" 
  }
];

const SerComp2 = () => {
  return (
    <div className="container mx-auto max-w-[110em] md:pl-[5em] lg:pl-[7em]  p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg transform transition duration-300 group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center p-4">
              <h2 className="text-white text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a href="#" className="text-white font-semibold flex items-center">
                Read More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SerComp2;
