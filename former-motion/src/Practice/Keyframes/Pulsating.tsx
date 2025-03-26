import { motion } from "framer-motion";

const Pulsating = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 ">
      <motion.button
        className="px-4 py-2 bg-white text-black rounded"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#ef4444", "#3b82f6", "#ef4444"], // red-500 to blue-500 to red-500
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Pulse
      </motion.button>
    </div>
  );
};

export default Pulsating;
