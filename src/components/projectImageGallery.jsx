import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images?.[0] || "");

  // Update mainImage when images prop changes
  useEffect(() => {
    setMainImage(images?.[0] || "");
  }, [images]);

  return (
    <div className="w-full space-y-4">
      {/* Main Image */}
      <div className="w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl relative">
        <motion.img
          key={mainImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          src={mainImage}
          alt="Main project image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {images?.map((img, index) => (
          <div
            key={index}
            onClick={() => setMainImage(img)}
            className={`
              aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300
              ${
                mainImage === img
                  ? "ring-2 ring-[#043A53] ring-offset-2"
                  : "opacity-80 hover:opacity-100"
              }
            `}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
