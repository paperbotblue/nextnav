import React, { useEffect, useState } from 'react';
import Comp2 from "./Comp2";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Comp6 from "./Comp6";
import Comp7 from "./Comp7";

// Counter component for the counting animation
const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duration of animation in milliseconds
    const increment = targetNumber / (duration / 16); // increase per frame (approx 60fps)
    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16); // roughly 60fps

    return () => clearInterval(counter);
  }, [targetNumber]);

  return <span>{count}</span>;
};

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 font-roboto relative flex justify-center items-start ">
        {/* Container with max-width 100em, centered */}
        <div
          className="relative max-w-[120em] 2xl:max-h-[75em] w-full h-[80vh] md:h-[75vh] lg:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://storage.googleapis.com/a1aa/image/YaPDNQ7jAQIePyhNqRua0AYFzpluhn7vEi9Koj2NeILG4quTA.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black -z-0 opacity-50"></div>

          {/* Main Content */}
          <div className="md:absolute z-20 inset-0 flex flex-col justify-center items-start md:px-[10em] px-[2em] py-[3em] text-white space-y-[1em] animate-slideInLeft">
            <h1 className="text-[3em] z-20 font-bold leading-tight">Construction Solution</h1>
            <h2 className="text-[2.5em] z-20">for everyone</h2>
            <p className="mt-[1em] max-w-[30em] z-20 text-[1em] leading-relaxed">
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non.
              Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum.
              Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
            </p>
            <button className="mt-[1.5em] bg-orange-500 z-20 text-white py-[0.5em] px-[1.5em] rounded-full text-[1em] hover:bg-orange-600 ">
              Learn More ➞
            </button>
          </div>

          {/* Bottom Content */}
          <div className="sm:mt-20 md:mt-[80vh] lg:absolute -bottom-48 right-20 gap-3 flex flex-col md:flex-row items-center px-[2em] py-[3em] space-y-[1em] md:space-y-0">
            {/* Stats Section */}
            <div className="flex z-20  md:flex-row items-center gap-3">
              <div className="bg-blue-900 text-white p-[1.5em] rounded-lg text-center">
                <p className="text-[2em] font-bold">
                  <Counter targetNumber={147} />
                </p>
                <p className="text-[1em]">Completed Projects</p>
              </div>
              <div className="bg-orange-500 text-white p-[1.5em] rounded-lg text-center">
                <p className="text-[2em] font-bold">
                  <Counter targetNumber={26} />
                </p>
                <p className="text-[1em]">Years of Experience</p>
              </div>
            </div>

            {/* Info Section Container with Overflow Hidden */}
            <div className="overflow-hidden z-20">
              <div className="bg-white p-[1.5em] z-20 rounded-lg shadow-lg max-w-[30em] animate-slideInRight">
                <h3 className="text-blue-900 text-[1.25em] font-bold mb-[0.5em]">
                  We Construct and Manage Places and Infrastructures
                </h3>
                <div className="flex items-start mb-[1em]">
                  <i className="fas fa-building text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">General Contract</h4>
                    <p className="text-[0.875em]">Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum</p>
                  </div>
                </div>
                <div className="flex items-start mb-[1em]">
                  <i className="fas fa-project-diagram text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">Project Planning</h4>
                    <p className="text-[0.875em]">Nullam commodo tincidunt nisl, nec vehicula dui interdum nec</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-tools text-orange-500 text-[1.5em] mr-[0.5em]"></i>
                  <div>
                    <h4 className="font-bold text-[1em]">Refurbishment</h4>
                    <p className="text-[0.875em]">Sed vitae aliquet ipsum, ut ornare lectus. Proin sed sem risus. Sed nunc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Comp2 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Comp7 />
    </div>
  );
};

export default Home;
