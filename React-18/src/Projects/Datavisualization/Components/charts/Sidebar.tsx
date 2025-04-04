import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 p-5 flex flex-col gap-4 shadow-lg z-30"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.5 }}
    >
      {/* Close Button */}
      <button
        className="self-end p-2 text-gray-300 hover:text-white"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Sidebar Links */}
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <Link to="/" className="hover:bg-gray-700 p-2 rounded">
        🏡 Home
      </Link>
      <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
        📊 Dashboard
      </Link>
      <Link to="/tutorials/d3" className="hover:bg-gray-700 p-2 rounded">
        📖 D3 Tutorial
      </Link>
      <Link to="/tutorials/routing" className="hover:bg-gray-700 p-2 rounded">
        🔀 Routing Tutorial
      </Link>
    </motion.div>
  );
};

export default Sidebar;
