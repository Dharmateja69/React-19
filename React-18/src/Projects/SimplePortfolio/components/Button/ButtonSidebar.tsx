// components/ButtonSidebar.tsx
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
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {icon} {label}
    </button>
  );
};

export default ButtonSidebar;
