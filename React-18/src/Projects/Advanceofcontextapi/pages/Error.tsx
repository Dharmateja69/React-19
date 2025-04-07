import { Frown } from "lucide-react";
import { Link } from "react-router-dom";
import ColorPicker from "../components/ThemeSwitcher/ColorPicker";

const Error = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <Frown className="w-16 h-16 text-[var(--theme-color)] mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-[var(--theme-color)]">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-center text-[var(--theme-color)] ">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all"
      >
        Go Back Home
      </Link>

      {/* Color Picker */}
      <div className="absolute bottom-6 left-6 z-50">
        <ColorPicker />
      </div>
    </div>
  );
};

export default Error;
