import * as d3 from "d3";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const D3Tutorial = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    // Create a simple bar chart with D3
    svg
      .append("rect")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 100)
      .attr("height", 50)
      .attr("fill", "blue")
      .transition()
      .duration(1000)
      .attr("fill", "green");
  }, []);

  return (
    <motion.div
      className="p-6 bg-white shadow-lg rounded-lg text-gray-800 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        📊 D3.js Basics with Framer Motion
      </motion.h2>

      <motion.p
        className="mb-4 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        D3.js is a JavaScript library for creating powerful data visualizations.
        It works with SVG, Canvas, and HTML.
      </motion.p>

      <motion.svg
        ref={svgRef}
        width={200}
        height={150}
        className="border border-gray-400"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.p
        className="mt-4 text-gray-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        The blue bar above is created and animated using D3.js. Framer Motion
        enhances page transitions.
      </motion.p>
    </motion.div>
  );
};

export default D3Tutorial;
