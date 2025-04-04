import BarChart from "../Components/charts/BarChart";
import LineChart from "../Components/charts/LineChart";
import PieChart from "../Components/charts/PieChart";
import DataControls from "../User/DataControls";
import ProfileCard from "../User/ProfileCard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Crypto Dashboard</h1>
      {/* Profile Section */}
      <div className="flex justify-center mb-6">
        <ProfileCard />
      </div>
      {/* Data Controls (Regenerate Mock Data Button) */}
      <DataControls />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <BarChart />
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
