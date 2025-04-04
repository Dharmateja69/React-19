import * as d3 from "d3";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ueOrderBookStore } from "../Store/useOrderBookStore";

const DepthChart = () => {
  const { orderBook } = ueOrderBookStore();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Convert order book into cumulative depth
    const cumulativeSum = (data: { price: number; volume: number }[]) =>
      data.reduce<{ price: number; volume: number }[]>((acc, order, i) => {
        acc.push({
          price: order.price,
          volume: (acc[i - 1]?.volume || 0) + order.volume, // Cumulative sum
        });
        return acc;
      }, []);

    const bidData = cumulativeSum([...orderBook.bids].reverse());
    const askData = cumulativeSum(orderBook.asks);

    const xScale = d3
      .scaleLinear()
      .domain([bidData[0]?.price || 0, askData[askData.length - 1]?.price || 0])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max([...bidData, ...askData], (d) => d.volume) || 1])
      .range([height - margin.bottom, margin.top]);

    const lineGenerator = d3
      .line<{ price: number; volume: number }>()
      .x((d) => xScale(d.price))
      .y((d) => yScale(d.volume))
      .curve(d3.curveStepAfter); // Step curve for order book depth

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    // Draw Bids Line
    svg
      .append("path")
      .datum(bidData)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    // Draw Asks Line
    svg
      .append("path")
      .datum(askData)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);
  }, [orderBook]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold">Order Book Depth Chart</h2>
      <svg ref={svgRef} width={500} height={300} />
    </motion.div>
  );
};

export default DepthChart;
