import { motion } from "framer-motion";

const Coloranimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-40 h-40 rounded-lg shadow-lg"
        animate={{
          backgroundColor: [
            "#3B82F6", // Tailwind 'blue-500'
            "#EF4444", // Tailwind 'red-500'
            "#FACC15", // Tailwind 'yellow-400'
            "#84CC16", // Tailwind 'green-500'
            "#FFFFFF", // white
            "#000000", // black
            "#3B82F6", // blue again
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  );
};

export default Coloranimation;
