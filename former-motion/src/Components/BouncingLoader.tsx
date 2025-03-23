import { motion } from "framer-motion";
const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-4 h-4 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
