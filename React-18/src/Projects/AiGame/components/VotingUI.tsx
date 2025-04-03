import { motion } from "framer-motion";
import { useGameStore } from "../store/useGameStore";

export const VotingUI = () => {
  const { captions, addVote } = useGameStore();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Vote for the best caption!</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {captions.map((caption, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => addVote(index)}
            className={`p-4 rounded-lg cursor-pointer ${
              caption.isAI ? "bg-purple-100" : "bg-blue-100"
            } border-2 ${
              caption.isAI ? "border-purple-300" : "border-blue-300"
            }`}
          >
            <p className="mb-2">{caption.text}</p>
            <div className="flex items-center">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-flex items-center px-2 py-1 rounded-full bg-white"
              >
                👍 {caption.votes}
              </motion.span>
              {caption.isAI && (
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-purple-200 text-purple-800">
                  AI
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
