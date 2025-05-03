import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSidebar from "../components/Button/ButtonSidebar";
import Ancortags from "../components/LinksA/Ancortags";

const menuItems = [
  { label: "About", icon: "📌", path: "/about" },
  { label: "Acheivemnts", icon: "📈", path: "/achievements" },
  { label: "Projects", icon: "💼", path: "/projects" },
  { label: "Certifications", icon: "📜", path: "/certifications" },
  { label: "GitHub Stats", icon: "🌐", path: "/github" },
  { label: "Resources", icon: "📚", path: "/resources" },
  { label: "Music", icon: "🎵", path: "/music" },
];

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {children}
      <aside
        className="w-[18rem] fixed right-0 top-0 h-screen z-50 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-4 flex flex-col items-center justify-center rounded-tl-[100px] rounded-bl-[100px]"
        style={{
          background: `
            linear-gradient(#12122b, #1c1c3c),
            radial-gradient(circle at 20% 40%, rgba(0, 255, 200, 0.08) 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, rgba(255, 0, 200, 0.12) 0%, transparent 80%)
          `,
          backgroundBlendMode: "screen",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          borderLeft: `10px solid var(--theme-color)`,
          transition: `all 0.3s ease-in-out`,
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-lg text-[var(--theme-color)] mb-6 text-center">
            <span>{`<sidhu />`}</span>
          </h2>

          <nav className="w-full">
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col items-stretch w-full">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li
                    key={item.label}
                    className="w-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div
                      className={`w-full transition-all  duration-300 px-1 py-1 rounded-md ${
                        isActive
                          ? "border-[3px] border-[var(--theme-color)] bg-white/5 dark:bg-white/5"
                          : "border-transparent"
                      }`}
                    >
                      <ButtonSidebar
                        label={item.label}
                        icon={item.icon}
                        onClick={() => handleNavigation(item.path)}
                      />
                    </div>
                  </motion.li>
                );
              })}
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
