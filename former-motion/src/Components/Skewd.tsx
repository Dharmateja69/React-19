import { motion } from "framer-motion";
import { useState } from "react";

const TiltBox = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen ">
      <motion.div
        className="box bg-blue-500 rounded-md"
        animate={{
          skewX: isActive ? 30 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        onClick={() => setActive(!isActive)}
      />
    </div>
  );
};

export default TiltBox;
