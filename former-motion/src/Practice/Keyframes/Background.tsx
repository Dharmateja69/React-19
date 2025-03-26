import { motion } from "framer-motion";
const Background = () => {
  return (
    <div>
      <motion.div
        className="h-screen w-screen"
        initial={{ backgroundColor: "#EF4444" }}
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
        transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  );
};

export default Background;
