import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex w-full">
      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Fixed Right Sidebar (always visible) */}
      <aside className="w-72 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-4 sticky top-0 h-screen">
        <h2 className="font-semibold text-lg text-[var(--theme-color)] mb-4">
          Sidhu!
        </h2>

        <nav>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <button
                onClick={() => handleNavigation("/about")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                📌 About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/skills")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                🛠️ Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/projects")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                💼 Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/certifications")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                📜 Certifications
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/github")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                🌐 GitHub Stats
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/resources")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                📚 Resources
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/music")}
                className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full text-left"
              >
                🎵 Music Page
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SidebarProvider;
