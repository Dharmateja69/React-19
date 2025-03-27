import { motion } from "framer-motion";
import { useState } from "react";

const Tapcolor = () => {
  const colors = [
    "#3B82F6", // blue-500
    "#EF4444", // red-500
    "#FACC15", // yellow-400
    "#84CC16", // green-500
    "#FFFFFF", // white
    "#000000", // black
  ];

  const [index, setIndex] = useState(0);

  function onTap() {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length); // cycle through colors
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="w-[100px] h-[100px] rounded-lg"
        onTap={onTap}
        animate={{ backgroundColor: colors[index] }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Tapcolor;
