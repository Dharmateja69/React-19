import { ReactNode, useEffect } from "react";
import { useThemeStore } from "../stores/useThemeStore";

interface Providerprops {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: Providerprops) => {
  const themeColor = useThemeStore((s) => s.themecolor);
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", themeColor);
  }, [themeColor]);

  return <>{children}</>;
};
