import { motion } from "framer-motion";

const Bounceball = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-16 h-16 bg-blue-500 rounded-full "
        style={{ boxShadow: "0 0 30px 10px rgba(59, 130, 246, 0.5)" }}
        initial={{ y: 0 }}
        animate={{ y: [-200, 0, -100, 0, -55, 0, -25, 0, -10, 0, -5, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Bounceball;
