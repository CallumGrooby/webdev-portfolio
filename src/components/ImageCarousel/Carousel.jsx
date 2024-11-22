import React, { useState } from "react";
import placeholderImage from "../../assets/placeholder.jpg";

const Carousel = ({ slides }) => {
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
      <div className="flex items-center justify-center h-auto w-full max-w-[700px] overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="text-[40px] absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-red hover:text-[#FF828A] p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="text-[40px] absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-red hover:text-[#FF828A] p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
