interface Caption {
  text: string;
  isAI: boolean;
  votes: number;
}

export interface GameState {
  phase: "IDLE" | "UPLOADED" | "BATTLE" | "RESULTS";
  image: string | null;
  userCaption: string;
  aiCaption: Caption;
  captions: Caption[];
  setImage: (image: string) => void;
  setUserCaption: (text: string) => void;
  generateAICaption: () => void;
  startVoting: () => void;
  addVote: (captionindex: number) => void;
}
