const Comp6 = ()=>{
    return(
       //Main container

    <div className="flex flex-col 2xl:mt-[500px]  lg:flex-row bg-blue-900 text-white p-8 lg:gap-8 max-w-7xl mx-auto">

    {/* Code for left side portion */}

    <div className="lg:w-1/2 flex flex-col justify-center lg:mr-8">
      <h3 className="text-orange-500 font-bold uppercase">Our Services</h3>
      <h1 className="text-3xl lg:text-5xl font-bold my-4">We Provide Best Industrial Services</h1>
      <p className="text-base mb-8">
        Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur 
        accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. 
        Phasellus faucibus pellentesque.
      </p>
      <button className="relative bg-orange-700 w-12 h-12 flex items-center justify-center square-md mb-8 lg:mb-0 transition-all duration-500 ease-in-out transform hover:bg-orange-600 hover:shadow-lg hover:border-orange-400 border border-transparent">
        <span className="text-white text-lg transition-transform duration-500 transform hover:translate-x-1">&rarr;</span>
      </button>
    </div>

    {/* Code for right side portion */}

    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-sm mb-2">{service.description}</p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Read &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  </div> 
    )
}

const services = [
    {
      title: "Infrastructure Services",
      description: "Facere distinctio tempor infrastructure services",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8p95a-ely0uwtxOY5qNgOn6iVTVH7N4MaGt8g-OUMqsVZvWaA1uetMI&s/300x200",
    },
    {
      title: "House Build",
      description: "Non doloremque sint eum dolor conseq",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7a0TCmJr37H6HlkUSLUWzFOWaKimDou_Lg&s/300x200",
    },
    {
      title: "Building Construction",
      description: "Rerum repudiandae consequatur iste nihil",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-wILlrUlWAjMy7bd86tELqKTlAO2qkUnvQ&s/300x200",
    },
    {
      title: "Bridge Construct",
      description: "Natus ea vero sed soluta voluptas necessitatibus accusantiu",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg78h71WaLvJwbmSebRNQr0xrHgobMzzSx8T5sCWhCtl0EN40lQQ6TCQrvlns-S5EAU0&usqp=CAU/300x200",
    },
  ];

  export default Comp6;
