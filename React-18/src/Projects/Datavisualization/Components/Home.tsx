import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const colors = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
];

const Home = () => {
  const [themeColor, setThemeColor] = useState("#3b82f6");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 relative">
      {/* Title */}
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: themeColor, textShadow: `2px 2px 10px ${themeColor}` }}
      >
        Welcome to Data Visualization Hub 🚀
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          {
            title: "Dashboard",
            desc: "View analytics & insights",
            path: "/dashboard",
          },
          {
            title: "D3.js Tutorial",
            desc: "Learn D3.js for data visualization",
            path: "/tutorials/d3",
          },
          {
            title: "Routing Tutorial",
            desc: "Understand React Router",
            path: "/tutorials/routing",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg border-2 text-white text-center shadow-lg transition-all"
            style={{
              borderColor: themeColor,
              boxShadow: `0px 4px 20px ${themeColor}`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: themeColor }}
            >
              {card.title}
            </h2>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Color Picker Floating Button (Bottom-Left) */}
      <div className="fixed bottom-6 left-6">
        <motion.button
          className="w-14 h-14 bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🎨
        </motion.button>

        {/* Color Options (Roll Out & Collapse) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="absolute left-16 bottom-0 flex gap-3 bg-gray-800 p-3 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {colors.map((color) => (
                <motion.div
                  key={color}
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setThemeColor(color);
                    setExpanded(false);
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
