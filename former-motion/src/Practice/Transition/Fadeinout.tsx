import { motion } from "framer-motion";
import { useState } from "react";

const Fadeinout = () => {
  const [mount, setmount] = useState(false);
  console.log(mount);
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <motion.button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => setmount(!mount)}
      >
        {mount ? "Unmount" : "Mount"}
      </motion.button>

      {mount ? (
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      ) : null}
    </div>
  );
};

export default Fadeinout;
