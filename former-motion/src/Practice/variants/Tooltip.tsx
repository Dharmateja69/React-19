import { motion } from "framer-motion";
import { useState } from "react";

// Define variants
const varVariants = {
  shown: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.9 },
  },
};

const Tooltip = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className="flex flex-col space-y-4 items-center">
      <motion.div
        className="w-[400px] h-[100px] bg-white text-black border border-solid flex justify-center items-center"
        variants={varVariants}
        initial="hidden"
        animate={shown ? "shown" : "hidden"} // ✅ Control animation using state
      >
        Tooltip
      </motion.div>

      <div>
        <button
          className="px-3 py-2 bg-white text-black border rounded"
          onClick={() => setShown(!shown)}
        >
          {shown ? "Hide Tooltip" : "Show Tooltip"}
        </button>
      </div>
    </div>
  );
};

export default Tooltip;
