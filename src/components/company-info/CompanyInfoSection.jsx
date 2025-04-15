import React from "react";

const CompanyInfoSection = () => {
  return (
    <section className="relative py-10 bg-[#043A53]">
      <div className="grid grid-cols-2 grid-rows-2 text-center text-gray-700 px-4 md:px-10">
        <div className="p-12 flex items-center justify-center text-start hover:z-50 bg-white transition-all duration-300 border border-gray-100">
          <p>
            We are a leading manufacturer in East Africa, focused on delivering
            sustainable and eco-friendly paper products to the market.
          </p>
        </div>
        <div className="p-12 flex items-center justify-center text-start hover:z-50 bg-white transition-all duration-300 border border-gray-100">
          <p>
            Our mission is to revolutionize the paper industry with innovation,
            quality, and environmental consciousness.
          </p>
        </div>
        <div className="p-12 flex items-center justify-center text-start hover:z-50 bg-white transition-all duration-300 border border-gray-100">
          <p>
            We envision a world where recycled materials power the paper
            industry, reducing deforestation globally.
          </p>
        </div>
        <div className="p-12 flex items-center justify-center text-start hover:z-50 bg-white transition-all duration-300 border border-gray-100">
          <p>
            Integrity, sustainability, and excellence guide all our business
            decisions and community interactions.
          </p>
        </div>
      </div>

      {/* Center Buttons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="grid grid-cols-2 grid-rows-2 shadow-xl">
          {[
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Mission",
              href: "#mission",
            },
            {
              label: "Our Vision",
              href: "#vision",
            },
            {
              label: "Our Values",
              href: "#values",
            },
          ].map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="bg-yellow-400 text-[#043A53] font-bold py-4 px-8 hover:bg-yellow-500 border border-white text-center transition duration-300"
            >
              {label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
