import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Projects/Datavisualization/pages/Dashboard";
import Error from "./Projects/Datavisualization/pages/Error";
import D3Tutorial from "./Projects/Datavisualization/pages/Tutorials/D3Tutorial";
import RoutingTutorial from "./Projects/Datavisualization/pages/Tutorials/RoutingTutorial";
// Import Sidebar
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Arrow Icon
import Sidebar from "./Projects/Datavisualization/Components/charts/Sidebar";
import Home from "./Projects/Datavisualization/Components/Home";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="relative flex min-h-screen bg-gray-900 text-white">
        {/* Sidebar Component - Controlled by Button */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <motion.button
            className="absolute top-5 left-5 z-20 p-3 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center"
            onClick={() => setIsSidebarOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tutorials/d3" element={<D3Tutorial />} />
            <Route path="/tutorials/routing" element={<RoutingTutorial />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
