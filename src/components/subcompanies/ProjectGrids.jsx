import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function ProjectGrids({ item, handleLocationCLick }) {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 relative">
      <div className="relative w-full">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div
          onClick={handleLocationCLick}
          className="absolute z-[99] right-4 top-2 bg-black/50 text-2xl active:scale-95 transition-all p-2 rounded-md text-yellow-500"
        >
          <FaLocationDot />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">{item.desc}</p>
      <p className="text-gray-600">{item.longDesc}</p>
    </div>
  );
}
