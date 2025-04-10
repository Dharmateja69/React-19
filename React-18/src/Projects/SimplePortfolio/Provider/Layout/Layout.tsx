import { Outlet } from "react-router-dom";
import ColorPicker from "../../components/Ui/ColorPicker";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div
      className="min-h-screen text-white relative overflow-y-auto
      [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[var(--theme-color)]
      [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-gutter:stable]"
      style={{
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
      <div className="w-[82rem] mx-auto pr-[18rem]">
        <ColorPicker />
        {/* Main page content */}
        <div className="flex-grow">
          <Outlet />
        </div>

        {/* Footer stays at the bottom */}
        <footer className="mt-10 py-6 border-t border-gray-600 text-center text-sm">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
