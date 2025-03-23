import { motion } from "framer-motion";
const Tranlation = () => {
  return (
    <div>
      <motion.div
        // className="w-[100px] h-[100px] bg-blue-500 rounded"
        className="box"
        initial={{ x: -200 }}
        animate={{ x: 200 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Tranlation;
