export interface Order {
  price: number;
  volume: number;
}
export interface OrderBook {
  bids: Order[]; // Buy orders (green)
  asks: Order[]; // Sell orders (red)
}
