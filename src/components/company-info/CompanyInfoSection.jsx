import React from "react";
import { ChevronRight, Info, Target, Compass, Shield } from "lucide-react";

const CompanyInfoSection = () => {
  const items = [
    {
      label: "About Us",
      href: "#about",
      text: "We are a leading manufacturer in East Africa, focused on delivering sustainable and eco-friendly paper products to the market.",
      icon: <Info className="text-amber-500" size={24} />,
      color: "bg-zinc-800",
    },
    {
      label: "Our Mission",
      href: "#mission",
      text: "Our mission is to revolutionize the paper industry with innovation, quality, and environmental consciousness.",
      icon: <Target className="text-amber-500" size={24} />,
      color: "bg-zinc-900",
    },
    {
      label: "Our Vision",
      href: "#vision",
      text: "We envision a world where recycled materials power the paper industry, reducing deforestation globally.",
      icon: <Compass className="text-amber-500" size={24} />,
      color: "bg-zinc-800",
    },
    {
      label: "Our Values",
      href: "#values",
      text: "Integrity, sustainability, and excellence guide all our business decisions and community interactions.",
      icon: <Shield className="text-amber-500" size={24} />,
      color: "bg-zinc-900",
    },
  ];

  return (
    <section className="w-full pb-16 bg-zinc-100">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-95 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 p-8 flex flex-col h-full bg-white group-hover:bg-transparent transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-amber-50 group-hover:bg-transparent transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-zinc-800 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </h3>
                </div>

                <p className="text-zinc-600 group-hover:text-white/90 transition-colors duration-300 mb-6">
                  {item.text}
                </p>

                <div className="mt-auto">
                  <a
                    href={item.href}
                    className="inline-flex items-center text-amber-500 font-medium group-hover:text-amber-300 transition-colors duration-300"
                  >
                    Learn more
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Mobile Layout */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-amber-50">{item.icon}</div>
                  <h3 className="ml-3 text-lg font-bold text-zinc-800">
                    {item.label}
                  </h3>
                </div>

                <p className="text-zinc-600 text-sm mb-4">{item.text}</p>

                <a
                  href={item.href}
                  className="inline-flex items-center text-amber-500 font-medium text-sm"
                >
                  Learn more
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
