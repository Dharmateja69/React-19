// src/LiquidityPool.tsx

import { motion } from "framer-motion";
import { ueOrderBookStore } from "../Store/useOrderBookStore";

const LiquidityPool = () => {
  const { orderBook } = ueOrderBookStore();

  // Compute total liquidity
  const totalBidLiquidity = orderBook.bids.reduce(
    (sum, order) => sum + order.volume,
    0
  );
  const totalAskLiquidity = orderBook.asks.reduce(
    (sum, order) => sum + order.volume,
    0
  );
  const totalLiquidity = totalBidLiquidity + totalAskLiquidity;

  return (
    <div className="p-4 bg-gray-950 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-lg font-semibold text-gray-200 mb-2">
        Liquidity Pool
      </h2>
      <div className="w-full h-8 bg-gray-800 rounded-lg relative overflow-hidden border border-gray-700">
        {/* Bid Liquidity Bar (Green) */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-green-400"
          animate={{ width: `${(totalBidLiquidity / totalLiquidity) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Ask Liquidity Bar (Red) */}
        <motion.div
          className="absolute right-0 top-0 h-full bg-red-400"
          animate={{ width: `${(totalAskLiquidity / totalLiquidity) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LiquidityPool;
