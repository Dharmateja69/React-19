// src/components/dashboard/InfoCard.tsx

import { useThemeStore } from "../../store/useThemestore";

const InfoCard = () => {
  const themeColor = useThemeStore((state) => state.themeColor);

  return (
    <div
      className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 border-2"
      style={{
        borderColor: themeColor,
        boxShadow: `0 4px 14px 0 ${themeColor}66`,
      }}
    >
      <h2 className="text-xl font-semibold mb-4">📘 About the Project</h2>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 text-sm">
        <li>
          <strong>Stack:</strong> React + Zustand + D3 + Framer Motion +
          Tailwind CSS
        </li>
        <li>
          <strong>Goal:</strong> Dynamic, themeable dashboard with animated
          charts & routing
        </li>
        <li>
          <strong>State:</strong> Centralized via Zustand
        </li>
        <li>
          <strong>Theming:</strong> CSS variables with real-time color switching
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;
