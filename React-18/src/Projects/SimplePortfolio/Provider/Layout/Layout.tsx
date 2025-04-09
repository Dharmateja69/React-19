import { Outlet } from "react-router-dom";
import ColorPicker from "../../components/Ui/ColorPicker";

export default function Layout() {
  return (
    <div
      className="min-h-screen text-white relative overflow-y-auto
      [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[var(--theme-color)]
      [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-gutter:stable]"
      style={{
        background: `
          linear-gradient(#000000, #000000),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 100%, rgba(255, 0, 0, 0.15) 0%, transparent 70%)
        `,
        backgroundBlendMode: "screen",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[82rem] mx-auto pr-[18rem]">
        <ColorPicker />
        <Outlet />
      </div>
    </div>
  );
}
