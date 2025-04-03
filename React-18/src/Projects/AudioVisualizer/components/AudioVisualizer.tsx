import { motion } from "framer-motion";
import { useAudioStore } from "../Store/useAudioStore";

export const AudioVisualizer = () => {
  const { frequencies, waveform, mode } = useAudioStore();

  return (
    <div className="space-y-4 p-4">
      {mode === "bars" ? (
        <div className="flex items-end h-40 gap-1 bg-black p-4 rounded-lg">
          {frequencies.map((freq, i) => (
            <motion.div
              key={`freq-${i}`}
              className="w-2 bg-purple-500 rounded-t"
              animate={{ height: `${freq * 100}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          ))}
        </div>
      ) : (
        <div className="h-40 bg-gray-900 p-4 rounded-lg">
          <motion.svg
            viewBox={`0 0 ${waveform.length} 100`}
            className="w-full h-full"
          >
            <motion.path
              d={`
                M 0,50
                ${waveform
                  .map((val, i) => `L ${i},${(1 - val) * 100}`)
                  .join(" ")}
              `}
              stroke="cyan"
              strokeWidth="2"
              fill="none"
              animate={{
                d: `
                  M 0,50
                  ${waveform
                    .map((val, i) => `L ${i},${(1 - val) * 100}`)
                    .join(" ")}
                `,
              }}
              transition={{ duration: 0.1 }}
            />
          </motion.svg>
        </div>
      )}
    </div>
  );
};
