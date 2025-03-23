import { motion } from "framer-motion";

const Boxvariants = {
  animate: (i) => ({
    y: -100,
    transition: {
      delay: i * 0.1, // Delay based on index
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const Sequential = () => {
  return (
    <div className="w-[500px] h-[500px] bg-white flex justify-center items-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="box mx-2"
          custom={i}
          variants={Boxvariants}
          animate="animate"
        />
      ))}
    </div>
  );
};

export default Sequential;

// for sequintal motion we use variants
