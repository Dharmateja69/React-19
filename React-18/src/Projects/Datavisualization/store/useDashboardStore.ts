import { create } from "zustand";

// Define the data types
interface ChartData {
  label: string;
  value: number;
}

interface LineChartData {
  date: string; // Separate type for line charts
  value: number;
}

interface DashboardState {
  barChartData: ChartData[];
  pieChartData: ChartData[];
  lineChartData: LineChartData[];
  generateMockData: () => void;
}

// Utility function to generate random mock data (Bar & Pie Charts)
const generateRandomData = (numItems: number): ChartData[] => {
  return Array.from({ length: numItems }, (_, i) => ({
    label: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 10, // Random values between 10-100
  }));
};

// Utility function to generate mock time-series data (Line Chart)
const generateLineChartData = (numItems: number): LineChartData[] => {
  return Array.from({ length: numItems }, (_, i) => ({
    date: `Day ${i + 1}`, // Simulated sequential days
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

// Zustand Store
export const useDashboardStore = create<DashboardState>((set) => ({
  barChartData: generateRandomData(5),
  pieChartData: generateRandomData(4),
  lineChartData: generateLineChartData(6),

  generateMockData: () => {
    console.log("Generating new mock data...");
    set({
      barChartData: generateRandomData(5),
      pieChartData: generateRandomData(4),
      lineChartData: generateLineChartData(6),
    });
  },
}));
