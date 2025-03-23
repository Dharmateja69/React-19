import { motion } from "framer-motion";
const Vertical = () => {
  return (
    <div className="w-[300px] h-[300px] bg-blue-500  justify-center items-center  relative overflow-hidden ">
      <motion.div
        className="box "
        initial={{ y: 0 }}
        animate={{ y: [200, 0, 200] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
};

export default Vertical;
