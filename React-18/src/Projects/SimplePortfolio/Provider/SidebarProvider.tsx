import { ReactNode } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ButtonSidebar from "../components/Button/ButtonSidebar";
import Ancortags from "../components/LinksA/Ancortags";
// Adjust the path as needed

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
          transition: `all 0.3s ease-in-out`,
          background: `
          linear-gradient(#0a0a23, #0a0a23),
          radial-gradient(circle at 30% 30%, rgba(0, 200, 255, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(180, 0, 255, 0.2) 0%, transparent 70%)
        `,
          backgroundBlendMode: "screen",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg text-[var(--theme-color)] mb-6 text-center">
            Sidhu!
          </h2>

          <nav className="w-full">
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col items-center">
              <li className="w-full text-center">
                <ButtonSidebar
                  label="About"
                  icon="📌"
                  onClick={() => handleNavigation("/about")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="Skills"
                  icon="🛠️"
                  onClick={() => handleNavigation("/skills")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="Projects"
                  icon="💼"
                  onClick={() => handleNavigation("/projects")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="Certifications"
                  icon="📜"
                  onClick={() => handleNavigation("/certifications")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="GitHub Stats"
                  icon="🌐"
                  onClick={() => handleNavigation("/github")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="Resources"
                  icon="📚"
                  onClick={() => handleNavigation("/resources")}
                />
              </li>
              <li className="w-full text-center">
                <ButtonSidebar
                  label="Music"
                  icon="🎵"
                  onClick={() => handleNavigation("/music")}
                />
              </li>
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-4 mt-10 text-[var(--theme-color)] text-2xl">
            <Ancortags href="https://facebook.com" icon={<FaFacebook />} />
            <Ancortags href="https://instagram.com" icon={<FaInstagram />} />
            <Ancortags href="https://twitter.com" icon={<FaTwitter />} />
            <Ancortags href="https://github.com" icon={<FaGithub />} />
            <Ancortags href="https://linkedin.com" icon={<FaLinkedin />} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarProvider;
