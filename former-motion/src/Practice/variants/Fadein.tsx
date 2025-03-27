import { motion } from "framer-motion";
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const Fadein = () => {
  return (
    <div>
      <motion.div
        className="box"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 10 }}
      />
    </div>
  );
};

export default Fadein;
