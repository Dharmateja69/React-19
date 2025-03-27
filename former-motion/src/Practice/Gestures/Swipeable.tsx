import { motion } from "framer-motion";
import { useState } from "react";

const Swipeable = () => {
  const [x, setx] = useState(0);
  return (
    <div>
      <motion.div
        className="w-[200px] h-[200px] bg-white text-black flex justify-center items-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 100) {
            setx(500);
          } else if (info.offset.x < -100) {
            setx(-500);
          } else {
            setx(0);
          }
        }}
        animate={{ x }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Swipe me!
      </motion.div>
    </div>
  );
};

export default Swipeable;
