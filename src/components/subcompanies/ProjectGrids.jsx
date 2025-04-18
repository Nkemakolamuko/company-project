import React from "react";

export default function ProjectGrids({ item }) {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {/* Static long description */}
        {item.desc}
      </p>
      <p className="text-gray-600">
        {item.longDesc}
      </p>
    </div>
  );
}
