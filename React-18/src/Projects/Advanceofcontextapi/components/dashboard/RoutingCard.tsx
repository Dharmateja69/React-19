// src/components/dashboard/RoutingCard.tsx

import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../../store/useThemestore";

const RoutingCard = () => {
  const themeColor = useThemeStore((state) => state.themeColor);
  const navigate = useNavigate();

  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 border-2 hover:scale-[1.02]"
      style={{
        borderColor: themeColor,
        boxShadow: `0 4px 14px 0 ${themeColor}66`,
      }}
    >
      <h2 className="text-xl font-semibold mb-4">🧭 Routing Tutorial</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
        Learn how pages like Dashboard, Tutorials, and Error are managed through
        React Router.
      </p>
      <button
        className="px-4 py-2 text-white rounded-lg"
        style={{ backgroundColor: themeColor }}
        onClick={() => navigate("/tutorials")}
      >
        Go to Tutorials
      </button>
    </div>
  );
};

export default RoutingCard;
