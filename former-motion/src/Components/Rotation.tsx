import { motion } from "framer-motion";
const Rotation = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
        drag
        whileHover={{
          scale: 3,
          backgroundColor: "#f87171",
          transition: {
            type: "spring",
            stiffness: 300,
          },
        }}
      />
    </div>
  );
};

export default Rotation;
