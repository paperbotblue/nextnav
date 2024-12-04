// BoardOfDirectors.js


const directors = [
  {
    name: "Kez Taylor",
    title: "Founder & Director",
    imgSrc: "https://picsum.photos/300/300",
    imgAlt: "Portrait of Kez Taylor"
  },
  {
    name: "HE Abdulla Al Shaibani",
    title: "Director",
    imgSrc: "https://picsum.photos/300/300",
    imgAlt: "Portrait of HE Abdulla Al Shaibani"
  },
  {
    name: "Kamillia AlMarashi",
    title: "Director",
    imgSrc: "https://picsum.photos/300/300",
    imgAlt: "Portrait of Kamillia AlMarashi"
  },
  {
    name: "Riad Kamal",
    title: "Director",
    imgSrc: "https://picsum.photos/300/300",
    imgAlt: "Portrait of Riad Kamal"
  }
];

const Directors = () => {
  return (
    <div className="bg-white font-['Roboto']     min-h-[20em] ">
      <div className="container mx-auto text-center max-w-[120em] md:ps-[8em] md:pe-[4em] lg:pe-[2em] py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Board of Directors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="w-full">
              <img className="w-full h-auto rounded" src={director.imgSrc} alt={director.imgAlt} />
              <h2 className="text-xl font-bold text-gray-800 mt-4">{director.name}</h2>
              <p className="text-gray-600">{director.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directors;
