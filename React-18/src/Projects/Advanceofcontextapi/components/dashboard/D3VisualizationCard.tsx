// src/components/dashboard/D3VisualizationCard.tsx
import { useThemeStore } from "../../store/useThemestore";
const D3VisualizationCard = () => {
  const themeColor = useThemeStore((state) => state.themeColor);

  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 border-2 hover:scale-[1.02]"
      style={{
        borderColor: themeColor,
        boxShadow: `0 4px 14px 0 ${themeColor}66`,
      }}
    >
      <h2 className="text-xl font-semibold mb-4">📈 D3.js Visualization</h2>
      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 rounded-xl flex items-center justify-center text-sm text-gray-500">
        Chart Placeholder
      </div>
      <button
        className="mt-4 px-4 py-2 text-white rounded-lg"
        style={{ backgroundColor: themeColor }}
      >
        Explore Chart
      </button>
    </div>
  );
};

export default D3VisualizationCard;
