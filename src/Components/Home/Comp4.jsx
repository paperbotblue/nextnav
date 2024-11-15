

const projects = [
    {
        title: "Horizon View Office Park",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Horizon+View+Office+Park"
    },
    {
        title: "Riverside Commerce Center",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Riverside+Commerce+Center"
    },
    {
        title: "Serenity Springs Apartments",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Serenity+Springs+Apartments"
    },
    {
        title: "Harmony Heights Residences",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Harmony+Heights+Residences"
    },
    {
        title: "Maplewood Manor",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Maplewood+Manor"
    },
    {
        title: "Skyline Plaza Tower",
        description: "Discover the artistry and craftsmanship behind our stunning residential projects.",
        year: "2023",
        image: "https://placehold.co/600x400?text=Skyline+Plaza+Tower"
    }
];

function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">{project.year}</span>
            </div>
        </div>
    );
}

function Comp4() {
    return (
        <div className="container  mx-auto px-3 md:px-36 p-6 max-w-8xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
                    <span className="mr-2">All Works</span>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Comp4;
