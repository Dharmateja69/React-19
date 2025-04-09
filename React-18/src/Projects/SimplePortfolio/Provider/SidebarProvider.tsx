import { ReactNode } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {children}
      <aside
        className="w-[18rem] fixed right-0 top-0 h-screen z-50 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-4 flex flex-col items-center justify-center rounded-tl-[100px] rounded-bl-[100px]"
        style={{
          borderLeft: `10px solid var(--theme-color)`,
          boxShadow: `0 4px 20px var(--theme-color)`,
          transition: `all 0.3s ease-in-out`,
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg text-[var(--theme-color)] mb-6 text-center">
            Sidhu!
          </h2>

          <nav className="w-full">
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col items-center">
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/about")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  📌 About
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/skills")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  🛠️ Skills
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  💼 Projects
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/certifications")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  📜 Certifications
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/github")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  🌐 GitHub Stats
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/resources")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  📚 Resources
                </button>
              </li>
              <li className="w-full text-center">
                <button
                  onClick={() => handleNavigation("/music")}
                  className="flex items-center justify-center gap-2 hover:text-[var(--theme-color)] transition-colors w-full py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  🎵 Music
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-4 mt-10 text-[var(--theme-color)] text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarProvider;
