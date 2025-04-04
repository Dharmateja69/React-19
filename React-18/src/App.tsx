import { useEffect } from "react";
import DepthChart from "./Projects/CryptoBook/D3js/DepthChart";
import LiquidityPool from "./Projects/CryptoBook/D3js/LiquidityPool";
import { ueOrderBookStore } from "./Projects/CryptoBook/Store/useOrderBookStore";

const App = () => {
  const { orderBook, updateOrderBook } = ueOrderBookStore();
  useEffect(() => {
    // Auto-refresh order book every 3 seconds
    const interval = setInterval(() => {
      updateOrderBook();
    }, 3000);
    return () => clearInterval(interval);
  }, [updateOrderBook]);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Crypto Liquidity Dashboard</h1>
      <DepthChart />
      <LiquidityPool /> {/* ✅ Integrate Liquidity Pool */}
      <h2 className="text-lg font-semibold mt-4">Order Book Data</h2>
      <pre>{JSON.stringify(orderBook, null, 2)}</pre> {/* Temp Display */}
    </div>
  );
};

export default App;
// Project Overview
// We built a real-time crypto liquidity dashboard that simulates an order book using mock data. This project is frontend-only and uses React, Zustand (for state management), D3.js (for visualization), and Framer Motion (for animations).
