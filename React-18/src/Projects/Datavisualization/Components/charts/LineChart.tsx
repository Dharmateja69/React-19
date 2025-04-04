import React from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDashboardStore } from "../../store/useDashboardStore";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChart: React.FC = () => {
  const { lineChartData } = useDashboardStore();

  const chartData = {
    labels: lineChartData.map((data) => data.date),
    datasets: [
      {
        label: "Value Over Time",
        data: lineChartData.map((data) => data.value),
        fill: false,
        backgroundColor: "#4CAF50",
        borderColor: "#4CAF50",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-3">Line Chart</h2>
      {/* Fix: Added height constraint */}
      <div className="h-64">
        <Line
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default LineChart;
