export default function Tabs({ items, onTabClick, activeTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      <button
        onClick={() => onTabClick("All")}
        className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${
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
          onClick={() => onTabClick(item)}
          className={`px-4 py-2 rounded-full text-xs cursor-pointer transition-all duration-300 ${
            activeTab === item
              ? "bg-gray-800 text-white"
              : "bg-gray-200 hover:bg-gray-800 hover:text-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
