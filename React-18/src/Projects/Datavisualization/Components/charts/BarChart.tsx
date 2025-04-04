import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { useDashboardStore } from "../../store/useDashboardStore";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const { barChartData } = useDashboardStore();

  const chartData = {
    labels: barChartData.map((data) => data.label),
    datasets: [
      {
        label: "Bar Chart Data",
        data: barChartData.map((data) => data.value),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-3">Bar Chart</h2>
      {/* Fix: Added height constraint */}
      <div className="h-64">
        <Bar
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default BarChart;
