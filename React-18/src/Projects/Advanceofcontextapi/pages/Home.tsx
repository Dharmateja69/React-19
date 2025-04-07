import D3VisualizationCard from "../components/dashboard/D3VisualizationCard";
import DashBoardCard from "../components/dashboard/DashBoardCard";
import InfoCard from "../components/dashboard/InfoCard";
import RoutingCard from "../components/dashboard/RoutingCard";
import Navbar from "../components/layout/NavBar";
// import NavBar from "../components/layout/NavBar";
import SideBar from "../components/layout/SideBar";
import ColorPicker from "../components/ThemeSwitcher/ColorPicker";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 relative">
        {/* NavBar */}
        <Navbar />
        {/* DashBoard Cards Grid */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashBoardCard />
          <D3VisualizationCard />
          <RoutingCard />
          <InfoCard />
        </main>
        {/* Color Picker in Bottom Left */}
        <div className="absolute bottom-6 left-6 z-50">
          <ColorPicker />
        </div>
      </div>
    </div>
  );
};

export default Home;
