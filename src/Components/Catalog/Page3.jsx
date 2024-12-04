import Sidebar from "./Sidebar2";

const Page3 = () => {
    return (
        <div className="flex relative object-contain max-w-[120em] mx-auto lg:flex-row  h-full lg:h-1/2">
            <Sidebar text="VISION & MISSION" number="02"/>
            <div className="w-full md:ml-10 lg:w-1/2 p-6 md:p-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-4">Vision</h1>
                <p className="text-base md:text-lg">
                    Our vision is to be a leading construction Group providing our clients with the most comprehensive services and the privilege of extraordinary and out of box thinking that result in most feasible and efficient projects.
                </p>
                <div className="mt-4 md:mt-8">
                    <img 
                        src="https://placehold.co/600x400" 
                        alt="Metal puzzle pieces on a blue and gray background" 
                        className="w-full h-48 md:h-64 lg:h-72 object-cover"  // Decreased height
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0 hidden lg:block">
                <img 
                    src="https://placehold.co/600x400" 
                    alt="Metal puzzle pieces on a blue and gray background" 
                    className="w-full h-48 lg:h-full object-cover"  // Decreased height
                />
            </div>
        </div>
    );
};

export default Page3;
