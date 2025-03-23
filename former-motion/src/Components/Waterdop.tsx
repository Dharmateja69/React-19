import { motion } from "framer-motion";
import { useState } from "react";

const Waterdop = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
      <motion.div
        onClick={() => setIsTransformed(!isTransformed)}
        className="w-[200px] h-[200px] backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl cursor-pointer"
        animate={{
          borderRadius: isTransformed
            ? ["50%", "40%", "30%", "40%", "50%"]
            : "50%",
          scale: isTransformed ? 1.2 : 1,
          rotate: isTransformed ? 360 : 0,
          x: isTransformed ? 50 : 0,
          y: isTransformed ? 50 : 0,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        style={{
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
        }}
      />
    </div>
  );
};

export default Waterdop;
