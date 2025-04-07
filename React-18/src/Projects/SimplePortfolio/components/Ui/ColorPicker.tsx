// src/components/ThemeSwitcher/ColorPicker.tsx
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxReset } from "react-icons/rx";
import { useThemeStore } from "../../stores/useThemeStore";

const colorOptions = [
  "#4f46e5", // Indigo (default)
  "#10b981", // Emerald
  "#ef4444", // Red
  "#f59e0b", // Amber
  "#3b82f6", // Blue
  "#a855f7", // Purple
];

const ColorPicker: React.FC = () => {
  const { themecolor, setThemecolor, resetThemecolor } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleColorSelect = (color: string) => {
    setThemecolor(color);
    setIsOpen(false); // Close immediately on selection
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ backgroundColor: themecolor }}
        className="w-14 h-14 rounded-full shadow-xl border-4 border-white focus:outline-none z-10"
        aria-label="Color picker"
      >
        🎨
      </motion.button>

      {/* Color Options - Horizontal rollout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring" }}
            className="flex items-center ml-2"
          >
            {/* Color circles */}
            <motion.div
              className="flex space-x-3 bg-white p-3 rounded-full shadow-lg items-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              {colorOptions.map((color, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleColorSelect(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full shadow-md focus:outline-none border-2 ${
                    themecolor === color
                      ? "border-black scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}

              {/* Reset Button with icon */}
              <motion.button
                onClick={() => {
                  resetThemecolor();
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-200 transition focus:outline-none"
                title="Reset color"
              >
                <RxReset className="text-lg" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
