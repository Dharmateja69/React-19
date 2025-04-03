import { motion } from "framer-motion";
import { useGameStore } from "../store/useGameStore";

// Handles image upload with drag-and-drop
export const ImageUploader = () => {
  const setImage = useGameStore((state) => state.setImage);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <motion.div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      whileHover={{ scale: 1.03 }}
      className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50"
    >
      <p className="text-gray-500">Drop image here</p>
    </motion.div>
  );
};
