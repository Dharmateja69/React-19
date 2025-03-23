import { motion, useMotionValue, useTransform } from "framer-motion";

const UseTransform = () => {
  const x = useMotionValue(0); // Track horizontal drag
  const rotate = useTransform(x, [-200, 200], [-45, 45]); // Rotate as box moves left/right

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl cursor-grab active:cursor-grabbing"
        drag="x"
        style={{ x, rotate }}
        dragConstraints={{ left: -200, right: 200 }}
      />
    </div>
  );
};

export default UseTransform;
