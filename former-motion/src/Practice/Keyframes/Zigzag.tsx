import { motion } from "framer-motion";

const Zigzag = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-[100px] h-[100px] bg-black rounded"
        animate={{
          x: [0, 50, 100, 150, 200],
          y: [0, 20, -20, 20, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default Zigzag;
