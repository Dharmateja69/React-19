import { ReactNode } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex w-full justify-center items-center">
      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Fixed Right Sidebar */}
      <aside
        className="w-72 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-4 sticky top-0 h-screen flex flex-col items-center justify-center rounded-tl-[100px] rounded-bl-[100px]"
        style={{
          borderLeft: `3px solid var(--theme-color)`,
          borderRight: `3px solid var(--theme-color)`,
          borderTop: `3px solid var(--theme-color)`,
          borderBottom: `3px solid var(--theme-color)`,
          boxShadow: "0 4px 20px var(--theme-color)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg text-[var(--theme-color)] mb-6 text-center">
            Sidhu!
          </h2>

          <nav>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col items-center">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  📌 About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/skills")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  🛠️ Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  💼 Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/certifications")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  📜 Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/github")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  🌐 GitHub Stats
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/resources")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  📚 Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/music")}
                  className="flex items-center gap-2 hover:text-[var(--theme-color)] transition-colors"
                >
                  🎵 Music Page
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center gap-4 mt-10 text-[var(--theme-color)] text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default SidebarProvider;
