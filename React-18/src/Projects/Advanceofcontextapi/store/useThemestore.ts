import { create } from "zustand";

interface ThemeState {
  themeColor: string;
  setThemeColor: (color: string) => void;
  resetTheme: () => void;
}
export const useThemeStore = create<ThemeState>((set) => ({
  themeColor: "#3b82f6",
  setThemeColor: (color: string) => set({ themeColor: color }),
  resetTheme: () => set({ themeColor: "#3b82f6" }),
}));
