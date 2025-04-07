import { create } from "zustand";

interface UserStore {
  user: { name: string } | null;
  role: "user" | "admin";
  isAuthenticated: boolean;
  login: (user: { name: string }, role: "user" | "admin") => void;
  logout: () => void;
  setRole: (role: "user" | "admin") => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  role: "user",
  isAuthenticated: false,
  login: (user, role) => set({ user, role, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false, role: "user" }),
  setRole: (role) => set({ role }),
}));
