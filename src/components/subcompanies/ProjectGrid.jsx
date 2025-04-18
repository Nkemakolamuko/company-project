import { useNavigate } from "react-router-dom";

export default function ProjectGrid({ items, setId }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:max-w-3xl mx-auto gap-6 px-4 py-8">
      {items.map((item) => (
        <div
          onClick={() => setId(item.id)}
          key={item.id}
          className="bg-white rounded shadow hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
