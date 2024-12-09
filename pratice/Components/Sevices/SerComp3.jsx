import React from 'react';

const projects = [
  {
    title: "Leisure & Themed Projects",
    description: "Designing and building destinations that offer entertainment, recreation, and relaxation in perfect harmony.",
    image: "https://placehold.co/600x400?text=Leisure+%26+Themed+Projects",
    alt: "Leisure & Themed Projects Image",
  },
  {
    title: "Hospitality Projects",
    description: "Creating luxurious that blend exquisite design with unmatched hospitality, offering unforgettable getaways.",
    image: "https://placehold.co/600x400?text=Hospitality+Projects",
    alt: "Hospitality Projects Image",
  },
  {
    title: "Museums & Pavilions",
    description: "Crafting immersive spaces that celebrate heritage and artistry, fostering cultural understanding and appreciation.",
    image: "https://placehold.co/600x400?text=Museums+%26+Pavilions",
    alt: "Museums & Pavilions Image",
  },
  {
    title: "Retail",
    description: "Crafting dynamic spaces that redefine shopping, dining, and leisure, delivering innovative retail destinations.",
    image: "https://placehold.co/600x400?text=Retail",
    alt: "Retail Image",
  },
  {
    title: "Airports",
    description: "Elevating aviation infrastructure with precision, from runways to terminals, ensuring seamless travel experiences.",
    image: "https://placehold.co/600x400?text=Airports",
    alt: "Airports Image",
  },
  {
    title: "Commercial",
    description: "Crafting dynamic workspaces, shopping centers, and mixed-use complexes that inspire growth and innovation.",
    image: "https://placehold.co/600x400?text=Commercial",
    alt: "Commercial Image",
  },
  {
    title: "Residential",
    description: "Crafting vibrant, sustainable communities that redefine modern living, combining comfort, style, and connectivity.",
    image: "https://placehold.co/600x400?text=Residential",
    alt: "Residential Image",
  },
  {
    title: "Oil, Gas & Marine",
    description: "Delivering innovative, sustainable Oil & Gas projects that drive the future of energy in the region.",
    image: "https://placehold.co/600x400?text=Oil+Gas+%26+Marine",
    alt: "Oil, Gas & Marine Image",
  },
];

function ProjectCard({ title, description, image, alt }) {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <a href='https://www.youtube.com/'><button className="bg-transparent  hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          VIEW ALL OUR PROJECTS
        </button>
          </a>
      </div>
    </div>
  );
}

function SerComp3() {
  return (
    <div className="container mx-auto max-w-[112em] md:pl-[5em] lg:pl-[7em] px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default SerComp3;
