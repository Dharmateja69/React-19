import { motion } from "framer-motion";

const waveVariant = {
  animate: (i: number) => ({
    x: [0, 50, 100],
    y: [-20, 0, -20],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      delay: i * 0.2, // staggered delay per element
    },
  }),
};

const Waveffect = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-3 ">
      {[...Array(3)].map((_, i) => (
        <motion.div
          className="box"
          key={i}
          className="w-8 h-8 rounded-full bg-blue-500"
          variants={waveVariant}
          custom={i}
          animate="animate"
          initial={{ y: 0 }}
        />
      ))}
    </div>
  );
};

export default Waveffect;
