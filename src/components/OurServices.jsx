import React from "react";
import Title from "./Title";
import slides from "../db/slidesDb";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white" id="sub">
      <div className="flex justify-between items-center mb-6">
        <Title text1={"OUR"} text2={"PRODUCTS"} />
        {/* The commented out code below is for moving the cards in a carousel format    */}
        {/* <div className="inset-0 flex items-center px-2 md:px-8 pointer-events-none mb-3 md:mb-10 gap-2">
          <button
            onClick={() => alert("next")}
            className="bg-black/50 px-2 py-2 md:text-2xl hover:bg-black/80 transition-all duration-300 rounded-md cursor-pointer text-white pointer-events-auto"
            //   disabled={isTransitioning}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => alert("next")}
            className="bg-black/50 px-2 py-2 md:text-2xl hover:bg-black/80 transition-all duration-300 rounded-md cursor-pointer text-white pointer-events-auto"
            //   disabled={isTransitioning}
          >
            <FaAngleRight />
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {slides.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded group shadow hover:shadow-md overflow-hidden transition-all duration-200"
          >
            <div className="relative h-48">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full group-hover:scale-105 transition-all duration-300 object-cover"
              />
              <div
                className={`absolute top-4 left-4 px-4 py-1 text-white text-sm font-semibold rounded ${service.badgeColor}`}
              >
                {service.title}
              </div>
            </div>
            <div className="p-4 cursor-default">
              <h3 className="text-md font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <Link
                to={`/learn-more/${service.id}`}
                className="border border-gray-500 shadow text-sm px-4 py-2 rounded hover:bg-[#043A53] hover:text-white transition-all duration-300"
              >
                More Info...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
