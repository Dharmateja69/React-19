import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useThemeStore } from "../../store/useThemestore";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const themeColor = useThemeStore((state) => state.themeColor);

  return (
    <motion.div
      animate={{ width: isOpen ? 240 : 80 }}
      className="h-screen bg-gray-900 text-white p-4 flex flex-col gap-4 shadow-xl transition-all duration-300 border-2 "
      style={{
        borderColor: themeColor,
        boxShadow: `0 4px 14px 0 ${themeColor}66`,
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`text-lg  text-[var(--theme-color)] font-bold transition-all duration-300 ${
            !isOpen && "opacity-0"
          } overflow-hidden`}
        >
          Dashboard
        </h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-4">
        <SidebarLink label="Home" isOpen={isOpen} />
        <SidebarLink label="Dashboard" isOpen={isOpen} />
        <SidebarLink label="Tutorials" isOpen={isOpen} />
        <SidebarLink label="Settings" isOpen={isOpen} />
      </nav>
    </motion.div>
  );
};

const SidebarLink = ({ label, isOpen }: { label: string; isOpen: boolean }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-[var(--theme-color)] transition-colors ">
    <div className="w-2 h-2 rounded-full bg-[var(--theme-color)]"></div>
    {isOpen && <span>{label}</span>}
  </div>
);

export default Sidebar;
