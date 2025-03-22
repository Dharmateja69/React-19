import Sidebar from "./Sidebar";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 h-screen overflow-auto">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
