import { motion } from "framer-motion";
import { useState } from "react";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  // Define your variants with named keys
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      x: -200,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Sidebar on the left */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="fixed top-0 left-0 w-[200px] h-screen bg-gray-500 border-r border-gray-400 flex items-center justify-center shadow-lg"
      >
        Dashboard
      </motion.div>

      {/* Centered Button */}
      <div className="absolute inset-0 flex justify-center items-center">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-white text-black border rounded shadow-md"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
