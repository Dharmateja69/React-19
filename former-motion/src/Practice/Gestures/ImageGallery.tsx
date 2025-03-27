import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/800x600?1",
  "https://source.unsplash.com/random/800x600?2",
  "https://source.unsplash.com/random/800x600?3",
];

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (event, info) => {
    if (info.offset.y < -100) {
      // Swipe up
      setIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.y > 100) {
      // Swipe down
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="w-[300px] h-[400px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="y"
            onDragEnd={handleSwipe}
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageGallery;
