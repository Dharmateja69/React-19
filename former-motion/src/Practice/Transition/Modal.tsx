import { motion } from "framer-motion";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      // Trigger closing animation first
      setIsOpen(false);
      setTimeout(() => {
        setShowBox(false); // Hide after animation
      }, 800); // Match the animation duration
    } else {
      setShowBox(true); // Show immediately
      setTimeout(() => {
        setIsOpen(true); // Trigger open animation
      }, 10); // Slight delay to ensure mount
    }
  };

  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen">
      {showBox && (
        <motion.div
          className="w-40 h-40 bg-white rounded-xl shadow-md"
          animate={
            isOpen
              ? { y: 0, opacity: 1, rotate: 360 }
              : { y: 200, opacity: 0, rotate: 0 }
          }
          initial={{ y: -500, opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      )}

      <motion.button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={handleClick}
      >
        {isOpen ? "Close" : "Open"}
      </motion.button>
    </div>
  );
};

export default Modal;
