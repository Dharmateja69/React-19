import { motion } from "framer-motion";
import { useState } from "react";
import { useGameStore } from "../store/useGameStore";

export const CaptionBattle = () => {
  const { userCaption, setUserCaption, generateAICaption } = useGameStore();
  const [isThinking, setIsThinking] = useState(false);

  const handleBattle = () => {
    if (!userCaption.trim()) return; // Prevent empty captions

    setIsThinking(true);
    setTimeout(() => {
      generateAICaption(); // Triggers Zustand state update
      setIsThinking(false);
    }, 1500); // 1.5 sec delay to fake "AI thinking"
  };

  return (
    <div className="space-y-4">
      <input
        value={userCaption}
        onChange={(e) => setUserCaption(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Your caption..."
      />

      <button
        onClick={handleBattle}
        disabled={isThinking}
        className={`px-4 py-2 rounded text-white ${
          isThinking ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isThinking ? "AI Thinking..." : "Battle AI!"}
      </button>

      {/* Optional: Add a loading bar */}
      {isThinking && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-1 bg-blue-200 rounded-full"
        />
      )}
    </div>
  );
};
