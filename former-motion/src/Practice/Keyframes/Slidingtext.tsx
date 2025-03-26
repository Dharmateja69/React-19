import { motion } from "framer-motion";
const Slidingtext = () => {
  return (
    <div>
      <motion.div
        className="w-[150px] h-[50px] bg-white text-black flex justify-center items-center"
        initial={{ x: -500 }}
        animate={{ x: [-200, -150, -100, -50, -25, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
      >
        <p>text from left to right</p>
      </motion.div>
    </div>
  );
};

export default Slidingtext;
