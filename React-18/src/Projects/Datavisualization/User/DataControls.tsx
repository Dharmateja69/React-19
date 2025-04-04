import { useDashboardStore } from "../store/useDashboardStore";

const DataControls = () => {
  const generateMockData = useDashboardStore((state) => state.generateMockData);

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={generateMockData}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Regenerate Data
      </button>
    </div>
  );
};

export default DataControls;
