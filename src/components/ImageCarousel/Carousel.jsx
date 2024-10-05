import React, { useState } from "react";
import placeholderImage from "../../assets/placeholder.jpg";

import testImage from "../../assets/WebsiteImages/CubeNest.png";
import testImage2 from "../../assets/WebsiteImages/DriveEase.png";
import testImage3 from "../../assets/WebsiteImages/Endeavour.png";
import testImage4 from "../../assets/WebsiteImages/Scroller.png";

const Carousel = () => {
  const slides = [
    { image: testImage, alt: "placeholder image" },
    { image: testImage2, alt: "placeholder image" },
    { image: testImage3, alt: "placeholder image" },
    { image: testImage4, alt: "placeholder image" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto basis-1/2 grow">
      <div className="flex items-center justify-center h-64 overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
