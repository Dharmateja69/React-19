// src/components/ThemeSwitcher/ColorPicker.tsx

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useThemeStore } from "../../store/useThemestore";

const colors = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

const ColorPicker: React.FC = () => {
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end">
      {/* Color Options - Animated panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="mb-2 mr-3 grid grid-cols-3 gap-3 p-4 bg-white rounded-xl shadow-2xl"
          >
            {colors.map((color, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setThemeColor(color);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full shadow-lg focus:outline-none"
                style={{ backgroundColor: color }}
              />
            ))}

            {/* Reset Button */}
            <motion.button
              onClick={() => {
                setThemeColor("#3b82f6");
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-3 mt-2 px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full shadow-sm hover:bg-gray-200 transition focus:outline-none"
            >
              Reset Theme
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[var(--theme-color)] shadow-xl border-4 border-white focus:outline-none"
        aria-label="Color picker"
      >
        🎨
      </motion.button>
    </div>
  );
};

export default ColorPicker;
