import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setShowImages((prev) => !prev)}
        className="mb-8 px-6 py-3 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="flex flex-wrap gap-6 justify-center"
      >
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Nature Image ${index + 1}`}
            variants={childVariants}
            className="w-[300px] rounded-lg shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;
