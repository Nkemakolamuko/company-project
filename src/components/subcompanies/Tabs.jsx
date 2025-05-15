"use client";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Tabs({ items, onTabClick, activeTab }) {
  const tabsRef = useRef(null);
  const tabRefs = useRef({}); // Create object to hold refs for each tab

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab && currentTab.scrollIntoView) {
      currentTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full container mx-auto px-4">
      {/* Scroll buttons */}
      <button
        onClick={() => scrollTabs("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-400 text-white cursor-pointer shadow-xl rounded-full hidden md:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scrollTabs("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-400 text-white cursor-pointer shadow-xl rounded-full hidden md:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* Tab List */}
      <div
        className="flex items-center overflow-x-auto gap-4 py-6 px-4 scrollbar-hide"
        ref={tabsRef}
        id="tabs"
      >
        <button
          ref={(el) => (tabRefs.current["All"] = el)}
          onClick={() => onTabClick("All")}
          className={`px-6 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${
            activeTab === "All"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 hover:bg-gray-800 hover:text-white"
          }`}
        >
          All
        </button>
        {items.map((item, idx) => (
          <button
            key={idx}
            ref={(el) => (tabRefs.current[item] = el)}
            onClick={() => onTabClick(item)}
            className={`px-4 py-2 rounded-full text-nowrap text-xs cursor-pointer transition-all duration-300 ${
              activeTab === item
                ? "bg-gray-800 text-white"
                : "bg-gray-200 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
