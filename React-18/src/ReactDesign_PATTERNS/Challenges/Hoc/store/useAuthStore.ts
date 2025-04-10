import { create } from "zustand";
import { UserRole } from "../types/user";

interface AuthState {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  role: "viewer",
  setRole: (role) => set({ role }),
}));

export default useAuthStore;
