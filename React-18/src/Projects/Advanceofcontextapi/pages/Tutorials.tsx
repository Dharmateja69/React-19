import D3VisualizationCard from "../components/dashboard/D3VisualizationCard";
import InfoCard from "../components/dashboard/InfoCard";
import RoutingCard from "../components/dashboard/RoutingCard";
import ColorPicker from "../components/ThemeSwitcher/ColorPicker";

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-[var(--theme-color)]">
        Tutorials
      </h1>
      <p className="mb-6   text-[var(--theme-color)]">
        Dive into our interactive tutorials to understand key concepts in modern
        frontend development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <D3VisualizationCard />
        <RoutingCard />
        <InfoCard />
      </div>
      {/* Color Picker in Bottom Left */}
      <div className="absolute bottom-6 left-6 z-50">
        <ColorPicker />
      </div>
    </div>
  );
};

export default Tutorials;
