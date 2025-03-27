import { motion } from "framer-motion";

const Draggle = () => {
  return (
    <div>
      <motion.div className="w-[100px] h-[100px] bg-white" drag />
    </div>
  );
};

export default Draggle;
