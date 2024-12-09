import { useState, useEffect } from 'react';
import building1 from './Images/building1.jpg';
import building2 from './Images/building2.jpg';
import building3 from './Images/building3.jpg';
import b01 from './Images/Baytek/b01.png';
import b02 from './Images/Baytek/b02.png';
import b03 from './Images/Baytek/b03.png';
import b04 from './Images/Baytek/b04.png';
import b05 from './Images/Baytek/b05.png';
import b06 from './Images/Baytek/b06.png';
import b07 from './Images/Baytek/b07.png';
import b08 from './Images/Baytek/b08.png';
import b09 from './Images/Baytek/b09.png';
import b10 from './Images/Baytek/b10.png';
import b11 from './Images/Baytek/b11.png';
import b12 from './Images/Baytek/b12.png';
import b13 from './Images/Baytek/b13.png';
import b14 from './Images/Baytek/b14.png';
import b15 from './Images/Baytek/b15.png';
import b16 from './Images/Baytek/b16.png';
import b17 from './Images/Baytek/b17.png';
import b18 from './Images/Baytek/b18.png';
import b19 from './Images/Baytek/b19.png';
import b20 from './Images/Baytek/b20.png';
import b21 from './Images/Baytek/b21.png';
import b22 from './Images/Baytek/b22.png';
import b23 from './Images/Baytek/b23.png';
import b24 from './Images/Baytek/b24.png';
import b25 from './Images/Baytek/b25.png';
import b26 from './Images/Baytek/b26.png';
import b27 from './Images/Baytek/b27.png';
import b28 from './Images/Baytek/b28.png';
import b29 from './Images/Baytek/b29.png';

function Catalog() {
  const images = [
    b01,
    b02,
    b03,
    b04,
    b05,
    b06,
    b07,
    b08,
    b09,
    b10,
    b11,
    b12,
    b13,
    b14,
    b15,
    b16,
    b17,
    b18,
    b19,
    b20,
    b21,
    b22,
    b23,
    b24,
    b25,
    b26,
    b27,
    b28,
    b29
  ];

  const images2 = [building1, building2, building3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images2.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images2.length]);

  return (
    <div className="relative w-full  h-screen overflow-hidden">
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images2[currentImageIndex]})`,
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Scrollable Foreground Images */}
      <div className="absolute md:ps-14 lg:ps-24 inset-0 overflow-y-auto">
        <div className="flex flex-wrap justify-center  pt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full lg:w-[100%] h-[30em] md:h-[30em] xl:h-[65em] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;