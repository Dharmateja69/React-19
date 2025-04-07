import { useEffect } from "react";
import { useThemeStore } from "../../store/useThemestore";
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themecolor = useThemeStore((state) => state.themeColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", themecolor);
  }, [themecolor]);

  return <>{children}</>;
};

export default ThemeProvider;
