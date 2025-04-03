import { AnimatePresence, motion } from "framer-motion";
import { CaptionBattle } from "./Projects/AiGame/components/CaptionBattle";
import { ImageUploader } from "./Projects/AiGame/components/ImageUploader";
import { VotingUI } from "./Projects/AiGame/components/VotingUI";
import { useGameStore } from "./Projects/AiGame/store/useGameStore";

// Main app router
export default function App() {
  const { phase, image, startVoting } = useGameStore();

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Caption Battle</h1>

      <AnimatePresence mode="wait">
        {phase === "IDLE" && <ImageUploader />}

        {phase === "UPLOADED" && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <img src={image} alt="Uploaded" className="rounded-lg shadow" />
            <CaptionBattle />
            <button
              onClick={startVoting}
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded"
            >
              Start Voting
            </button>
          </motion.div>
        )}

        {phase === "BATTLE" && <VotingUI />}
      </AnimatePresence>
    </div>
  );
}
