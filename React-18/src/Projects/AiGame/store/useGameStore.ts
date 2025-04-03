import { create } from "zustand";
import { GameState } from "../gameTypes";
import { mockAI } from "../utils/mockAI";

// Central state management
export const useGameStore = create<GameState>((set) => ({
  phase: "IDLE",
  image: null,
  userCaption: "",
  aiCaption: { text: "", isAI: true, votes: 0 },
  captions: [],

  setImage: (image) => set({ image, phase: "UPLOADED" }),
  setUserCaption: (text) => set({ userCaption: text }),
  generateAICaption: () =>
    set((state) => ({
      aiCaption: { text: mockAI(state.userCaption), isAI: true, votes: 0 },
      phase: "BATTLE",
    })),
  startVoting: () =>
    set((state) => ({
      captions: [
        { text: state.userCaption, isAI: false, votes: 0 },
        state.aiCaption,
      ],
    })),
  addVote: (captionIndex) =>
    set((state) => ({
      captions: state.captions.map((caption, i) =>
        i === captionIndex ? { ...caption, votes: caption.votes + 1 } : caption
      ),
    })),
}));
