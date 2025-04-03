// Fake AI responses
export const mockAI = (userCaption: string): string => {
  const tricks = [
    `"${userCaption}"... but fancier`,
    "I was gonna say that!",
    "How about no.",
    `Human-like response: "${userCaption}"`,
  ];
  return tricks[Math.floor(Math.random() * tricks.length)];
};
