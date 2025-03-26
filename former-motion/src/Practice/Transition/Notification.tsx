import { motion } from "framer-motion";
import { useState } from "react";
const Notification = () => {
  const [open, setopen] = useState(false);
  const handclick = () => {
    setopen(true);
    setTimeout(() => setopen(false), 5000);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {open && (
        <motion.div
          className="w-[300px] h-[100px] bg-white text-red-500 border-solid flex justify-center items-center"
          initial={{ y: -200, opacity: 0, scale: 1.1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
        >
          Notification is very important
        </motion.div>
      )}
      <motion.button
        className="px-5 py-3 flex  bg-white text-black justify-center items-center rounded"
        onClick={handclick}
      >
        {" "}
        Notification
      </motion.button>
    </div>
  );
};

export default Notification;
