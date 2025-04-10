import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      transition={{ type: "strech", stiffness: 300 }}
      className="text-white text-center p-4 text-lg"
    >
      Made with ❤️ by
      <span className="text-[var(--theme-color)] px-2 rounded-md">
        Dharma Teja
      </span>
      using React JS!
    </motion.div>
  );
};

export default Footer;
