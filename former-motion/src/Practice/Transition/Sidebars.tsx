import { motion } from "framer-motion";
import { useState } from "react";
const Sidebars = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <div>
      {isopen ? (
        <motion.div
          className="fixed top-0 left-0 w-[250px] h-screen bg-gray-700 border border-zinc-400 z-50 flex felx-col justify-center "
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -250, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Dashboard
        </motion.div>
      ) : (
        <motion.div
          className="fixed top-0 left-0 w-[250px] h-screen bg-gray-700 border border-zinc-400 z-50 flex felx-col justify-center "
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: -250, opacity: 0 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Dashboard
        </motion.div>
      )}

      <motion.button
        className="px-4 py-3 bg-black justify-center items-center rounded"
        onClick={() => setisopen(!isopen)}
      >
        {" "}
        {isopen ? "Close" : "Open"}
      </motion.button>
    </div>
  );
};

export default Sidebars;
