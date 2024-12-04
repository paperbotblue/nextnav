import React, { useState, useEffect, useRef } from "react";
import civil from "../../assets/HomeImg/civil.jpg";

const Comp8 = () => {
  const statsData = [
    { target: 17, label: "Awards Won" },
    { target: 12, label: "XP Years" },
    { target: 108, label: "Clients" },
    { target: 150, label: "Projects" },
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 3000; // Animation duration in ms
    const steps = 60; // Number of updates (e.g., 60 for smooth animation)
    const interval = duration / steps; // Time per step

    statsData.forEach((stat, index) => {
      const increment = stat.target / steps; // Proportional increment for each step
      let current = 0;

      const timer = setInterval(() => {
        setStats((prevStats) =>
          prevStats.map((value, i) =>
            i === index ? Math.min(current + increment, stat.target) : value
          )
        );
        current += increment;

        if (current >= stat.target) {
          clearInterval(timer);
        }
      }, interval);
    });
  };

  return (
    <div className="bg-white relative flex justify-center">
      <div className="max-w-[120em] w-full md:pl-[5em] lg:pl-[8em]">
        <div className="text-center py-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 px-4">
            We design places that connect people to their environment.
          </h1>
        </div>

        <div className="mx-auto px-4 flex flex-col items-center gap-8">
          <div className="relative max-w-4xl w-full z-10">
            <img
              src={civil}
              alt="Architects discussing"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div
            ref={statsRef} // Attach the reference for visibility detection
            className="bg-blue-900 text-white py-10 w-full  rounded-lg"
          >
            <div className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white text-blue-900 py-6 md:py-10 px-4 md:px-6 rounded-lg shadow-md text-center"
                >
                  <h2 className="text-2xl md:text-4xl font-bold">
                    {Math.floor(stats[index])} {/* Show integer values */}+
                  </h2>
                  <p className="text-sm md:text-lg uppercase font-medium mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button className="border-2 text-white px-8 py-3 md:px-12 md:py-4 rounded-full hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comp8;
