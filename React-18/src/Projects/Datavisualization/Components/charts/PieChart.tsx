import React from "react";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDashboardStore } from "../../store/useDashboardStore";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  const { pieChartData } = useDashboardStore();

  const chartData = {
    labels: pieChartData.map((data) => data.label),
    datasets: [
      {
        data: pieChartData.map((data) => data.value),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-3">Pie Chart</h2>
      {/* Fix: Added height constraint */}
      <div className="h-64">
        <Pie
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default PieChart;
