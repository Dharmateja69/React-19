import { motion } from "framer-motion";

const CombinedTransformation = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start p-10 bg-gray-100">
      <motion.div
        className="w-[100px] h-[100px] bg-blue-500 rounded-xl"
        initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
        animate={{ x: 300, y: 300, scale: 2, rotate: 360 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          type: "spring",
          stiffness: 80,
        }}
        drag
        dragConstraints={{ left: 0, right: 200, top: 0, bottom: 200 }}
      />
    </div>
  );
};

export default CombinedTransformation;
