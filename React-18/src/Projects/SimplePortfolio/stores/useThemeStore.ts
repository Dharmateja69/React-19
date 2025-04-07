import { create } from "zustand";

interface ThemeState {
  themecolor: string;
  setThemecolor: (color: string) => void;
  resetThemecolor: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  themecolor: "#4f46e5",
  setThemecolor: (color) => set({ themecolor: color }),
  resetThemecolor: () => set({ themecolor: "#4f46e5" }),
}));
