import { useRef } from "react";
import { useAudioStore } from "../Store/useAudioStore";

const AudioControls = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setAudioFile, play, pause, isPlaying, setMode, mode } =
    useAudioStore();

  // Handle file upload
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      await setAudioFile(file);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-gray-800 rounded-lg">
      {/* Upload Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => fileInputRef.current?.click()}
      >
        Upload Audio
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {/* Mode Toggle */}
      <button
        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        onClick={() => setMode(mode === "bars" ? "circles" : "bars")}
      >
        Mode: {mode === "bars" ? "Circles" : "Bars"}
      </button>
      {/* Play/Pause Button */}
      {isPlaying ? (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={pause}
        >
          Pause
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={play}
        >
          Play
        </button>
      )}
    </div>
  );
};

export default AudioControls;
