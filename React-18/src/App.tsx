import AudioControls from "./Projects/AudioVisualizer/components/AudioControls";
import { AudioVisualizer } from "./Projects/AudioVisualizer/components/AudioVisualizer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">🎵 Music Visualizer</h1>

      {/* Upload & Play Controls */}
      <AudioControls />

      {/* Visualization */}
      <div className="mt-6 w-full max-w-2xl">
        <AudioVisualizer />
      </div>
    </div>
  );
};

export default App;
