// components/ButtonSidebar.tsx
import { motion } from "framer-motion";
import React from "react";

type ButtonSidebarProps = {
  label: string;
  icon: string;
  onClick: () => void;
};

const ButtonSidebar: React.FC<ButtonSidebarProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.09 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center justify-start gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md text-left text-lg"
    >
      {icon} {label}
    </motion.button>
  );
};

export default ButtonSidebar;
