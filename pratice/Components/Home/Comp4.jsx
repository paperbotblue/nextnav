import { motion } from "framer-motion"

import b1 from '../../assets/HomeImg/b1.jpeg'
const projects = [
    {
        title: "Horizon View Office Park",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    },
    {
        title: "Riverside Commerce Center",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    },
    {
        title: "Serenity Springs Apartments",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    },
    {
        title: "Harmony Heights Residences",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    },
    {
        title: "Maplewood Manor",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    },
    {
        title: "Skyline Plaza Tower",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: b1
    }
];

function ProjectCard({ project }) {
    return (
        <motion.div className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0 }} // Start flipped
  whileInView={{  opacity: 1 }} // Flip to normal
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
  whileHover={{ scale: 1.05 }} // Slightly enlarge on hover
        >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">{project.year}</span>
            </div>
        </motion.div>
    );
}

function Comp4() {
    return (
        <div className="container mx-auto px-4 max-w-[118em] md:pl-[10em]  md:pr-24 lg:pr-10 py-6 text-center">
            {/* Customer Stories Section */}
            <motion.section className="mb-8"
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.6 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-world results, as told by our customers</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Where we share insights, updates, and stories that matter in the world of construction and beyond.
                </p>

                {/* All Photos Button */}
                <button className="mb-8 px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 font-semibold">
                    All Photos
                </button>
            </motion.section>

            {/* Projects Grid */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
             initial={{ y: 50,  opacity: 0 }} 
             whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} // Smooth transition
               whileHover={{ scale: 1.01 }}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>

        </div>
    );
}

export default Comp4;
