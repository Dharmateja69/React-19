import { create } from "zustand";
import { OrderBook } from "./types";

interface OrderBookStore {
  orderBook: OrderBook;
  updateOrderBook: () => void; // Function to simulate updates
}

const generateMockOrderBook = (): OrderBook => {
  const randomOrders = (count: number, min: number, max: number) =>
    Array.from({ length: count }, () => ({
      price: +(Math.random() * (max - min) + min).toFixed(2),
      volume: +(Math.random() * 5 + 1).toFixed(2),
    }));

  return {
    bids: randomOrders(10, 29500, 30000).sort((a, b) => b.price - a.price), // Highest bid first
    asks: randomOrders(10, 30000, 30500).sort((a, b) => a.price - b.price), // Lowest ask first
  };
};

export const ueOrderBookStore = create<OrderBookStore>((set) => ({
  orderBook: generateMockOrderBook(),
  updateOrderBook: () => set({ orderBook: generateMockOrderBook() }),
}));
