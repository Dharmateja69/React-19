import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../../store/useThemestore";

const DashboardCard = () => {
  const themeColor = useThemeStore((state) => state.themeColor);
  const navigate = useNavigate();
  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 border-2"
      style={{
        borderColor: themeColor,
        boxShadow: `0 4px 14px 0 ${themeColor}66`,
      }}
    >
      <h2 className="text-xl font-semibold mb-2">📊 Dashboard Overview</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Overview of user activities and real-time metrics.
      </p>
      <button
        className="mt-4 px-4 py-2 text-white rounded-lg"
        style={{ backgroundColor: themeColor }}
        onClick={() => navigate("/dashboard")}
      >
        View Details
      </button>
    </div>
  );
};

export default DashboardCard;
