import { create } from "zustand";

interface AvatarState {
  skinTone: string;
  hair: string;
  eyes: string;
  mouth: string;
  accessories: string[];
  setSkinTone: (tone: string) => void;
  setHair: (hair: string) => void;
  setEyes: (eyes: string) => void;
  setMouth: (mouth: string) => void;
  setAccessories: (accessories: string[]) => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  skinTone: "#FCD7B6",
  hair: "src/Projects/OfflineAvatar/Assets/hairstyle.svg",
  eyes: "src/Projects/OfflineAvatar/Assets/cartoon-eyes.svg",
  mouth: "src/Projects/OfflineAvatar/Assets/mouth.svg",
  accessories: [],
  setSkinTone: (tone: string) => set({ skinTone: tone }),
  setHair: (hair: string) => set({ hair: hair }),
  setEyes: (eyes: string) => set({ eyes: eyes }),
  setMouth: (mouth: string) => set({ mouth: mouth }),
  setAccessories: (accessories: string[]) => set({ accessories: accessories }),
}));
