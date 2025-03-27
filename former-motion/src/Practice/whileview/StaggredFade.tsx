import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.9,
    },
  },
};
const items = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const StaggredFade = () => {
  return (
    <div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="space-y-4"
      >
        {["One", "Two", "Three"].map((text, i) => (
          <motion.li key={i} variants={items}>
            {text}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StaggredFade;
