import React, { useRef } from "react";
import CanvasRenderer from "./Projects/OfflineAvatar/Components/CanvasRenderer";
import ExportButton from "./Projects/OfflineAvatar/Components/ExportButton";
import { useAvatarStore } from "./Projects/OfflineAvatar/Store/useAvatarStore";
import AssetLibrary from "./Projects/OfflineAvatar/utils/AssetLibrary";

const App: React.FC = () => {
  const { setHair, setEyes, setMouth, setAccessories } = useAvatarStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">🎨 Avatar Builder</h1>

      {/* Avatar Preview (Canvas) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <CanvasRenderer ref={canvasRef} />
      </div>

      {/* Asset Selection (Pass down state setters) */}
      <div className="mt-4 w-full max-w-md">
        <AssetLibrary
          setHair={setHair}
          setEyes={setEyes}
          setMouth={setMouth}
          setAccessories={setAccessories}
        />
      </div>

      {/* Export Button (Pass down canvasRef) */}
      <div className="mt-4">
        <ExportButton canvasRef={canvasRef} />
      </div>
    </div>
  );
};

export default App;
