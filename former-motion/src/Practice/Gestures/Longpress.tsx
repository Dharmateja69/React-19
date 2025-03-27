import { motion } from "framer-motion";
import { useState } from "react";
const Longpress = () => {
  const [scale, setsacle] = useState(1);
  const [longpress, setlongpress] = useState(null);

  const handletostart = () => {
    const timer = setTimeout(() => {
      setsacle((prev) => prev + 1);
    }, 600);
    setlongpress(timer);
  };
  const handlecancel = () => {
    clearTimeout(longpress);
    setlongpress(null);
  };

  return (
    <div>
      <motion.div
        className="w-[100px] h-[100px] bg-white "
        onTapStart={handletostart}
        onTapCancel={handlecancel}
        onTap={handlecancel}
        animate={{ scale }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Longpress;
