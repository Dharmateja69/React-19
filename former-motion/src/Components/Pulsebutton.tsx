import { motion } from "framer-motion";

const Pulsebutton = () => {
  return (
    <div>
      <motion.div
        className="px-4 py-2 text-white bg-blue-500 rounded outline-none"
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
        }}
        transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
      >
        Click me
      </motion.div>
    </div>
  );
};

export default Pulsebutton;
