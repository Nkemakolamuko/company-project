import React from "react";

const CompanyInfoSection = () => {
  const items = [
    {
      label: "About Us",
      href: "#about",
      text: "We are a leading manufacturer in East Africa, focused on delivering sustainable and eco-friendly paper products to the market.",
    },
    {
      label: "Our Mission",
      href: "#mission",
      text: "Our mission is to revolutionize the paper industry with innovation, quality, and environmental consciousness.",
    },
    {
      label: "Our Vision",
      href: "#vision",
      text: "We envision a world where recycled materials power the paper industry, reducing deforestation globally.",
    },
    {
      label: "Our Values",
      href: "#values",
      text: "Integrity, sustainability, and excellence guide all our business decisions and community interactions.",
    },
  ];

  return (
    <section className="relative py-10 bg-[#043A53] w-full">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 text-center text-gray-700 px-4 md:px-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-12 flex items-center justify-center text-start hover:z-50 bg-white hover:bg-white/95 transition-all duration-300 border border-gray-100"
          >
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden text-gray-700 px-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative mb-4 bg-white hover:bg-white/95 transition-all duration-300 border border-gray-100"
          >
            <a
              href={item.href}
              className="absolute top-0 right-0 bg-yellow-400 text-[#043A53] font-bold py-2 px-4 hover:bg-yellow-500 text-sm transition duration-300"
            >
              {item.label.toUpperCase()}
            </a>
            <div className="p-12 pt-16 flex items-center justify-center text-start">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Buttons - Desktop Only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
        <div className="grid grid-cols-2 grid-rows-2 shadow-xl">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="bg-yellow-400 text-[#043A53] font-bold py-4 px-8 hover:bg-yellow-500 border border-white text-center transition duration-300"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
