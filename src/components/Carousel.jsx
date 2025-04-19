import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { nextState, prevState } from "../utils/herofunctions";
import { Link } from "react-router-dom";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // To move the carousel automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextState(current, setCurrent, slides);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [current, slides]);

  // Handle transition animation
  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);

    // Wait for fade out, then change slide
    setTimeout(() => {
      if (newIndex === "next") {
        nextState(current, setCurrent, slides);
      } else if (newIndex === "prev") {
        prevState(current, setCurrent, slides);
      }

      // Wait briefly then remove transitioning state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 400);
  };

  return (
    <div className="relative overflow-hidden h-screen max-h-[88vh] w-full group">
      <div className="flex h-full overflow-hidden">
        {slides.map((slide, index) => {
          // Calculate if this slide is active
          const isActive = index === current;

          return (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${isTransitioning && isActive ? "opacity-10" : ""}`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute bottom-10 mx-4 md:mx-0 left-0 md:left-24 bg-[#043A53]/70 p-6 rounded-md max-w-md text-white z-20 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4">{slide.desc}</p>
                <Link
                  to={`/learn-more/${slide.id}`}
                  className="flex items-center gap-2 w-fit bg-[#E8B335]/80 hover:bg-[#E8B335] text-white font-semibold py-2 px-4 rounded hover:rounded-full transition-all duration-300"
                >
                  <span>Learn more</span>
                  <FaAngleRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center sm:group justify-between px-2 md:px-8 pointer-events-none z-30">
        <button
          onClick={() => handleSlideChange("prev")}
          className="bg-black/50 px-4 py-4 md:text-3xl sm:hover:bg-black/80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 rounded-md cursor-pointer text-white pointer-events-auto"
          disabled={isTransitioning}
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => handleSlideChange("next")}
          className="bg-black/50 px-4 py-4 md:text-3xl sm:hover:bg-black/80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 rounded-md cursor-pointer text-white pointer-events-auto"
          disabled={isTransitioning}
        >
          <FaAngleRight />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              current === index ? "bg-white scale-125" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`} // equivalent to title attribute in anchor tags - I guess
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
