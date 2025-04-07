import D3VisualizationCard from "../components/dashboard/D3VisualizationCard";
import DashBoardCard from "../components/dashboard/DashBoardCard";
import InfoCard from "../components/dashboard/InfoCard";
import RoutingCard from "../components/dashboard/RoutingCard";
import ColorPicker from "../components/ThemeSwitcher/ColorPicker";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-[var(--theme-color)]">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashBoardCard />
        <D3VisualizationCard />
        <RoutingCard />
        <InfoCard />
      </div>
      {/* Color Picker */}
      <div className="absolute bottom-6 left-6 z-50">
        <ColorPicker />
      </div>
    </div>
  );
};

export default Dashboard;
