// Layout.tsx
import { Outlet } from "react-router-dom";
import ColorPicker from "../../components/Ui/ColorPicker";

export default function Layout() {
  return (
    <>
      <ColorPicker />
      <Outlet /> {/* This renders the current route's component */}
    </>
  );
}
