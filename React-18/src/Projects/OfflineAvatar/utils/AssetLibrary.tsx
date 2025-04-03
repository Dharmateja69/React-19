import React from "react";

// Directly use the image paths without '/assets/' prefix
const hairOptions = [
  "src/Projects/OfflineAvatar/Assets/h1.png",
  "src/Projects/OfflineAvatar/Assets/h2.png",
  "src/Projects/OfflineAvatar/Assets/h3.png",
];
const eyesOptions = [
  "src/Projects/OfflineAvatar/Assets/eye2.png",
  "src/Projects/OfflineAvatar/Assets/eye3.png",
];
const mouthOptions = [
  "src/Projects/OfflineAvatar/Assets/m1.png",
  "src/Projects/OfflineAvatar/Assets/m2.png",
];
const accessoriesOptions = [
  "src/Projects/OfflineAvatar/Assets/g1.png",
  "src/Projects/OfflineAvatar/Assets/g2.png",
];

interface AssetLibraryProps {
  setHair: (hair: string) => void;
  setEyes: (eyes: string) => void;
  setMouth: (mouth: string) => void;
  setAccessories: (accessories: string[]) => void;
}

const AssetLibrary: React.FC<AssetLibraryProps> = ({
  setHair,
  setEyes,
  setMouth,
  setAccessories,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Hair Selection */}
      <div>
        <label className="block text-sm font-medium">Hair:</label>
        <div className="flex space-x-2">
          {hairOptions.map((hair) => (
            <img
              key={hair}
              src={hair} // Removed '/assets/' prefix
              alt="Hair option"
              className="w-12 h-12 cursor-pointer border rounded"
              onClick={() => setHair(hair)}
            />
          ))}
        </div>
      </div>

      {/* Eyes Selection */}
      <div>
        <label className="block text-sm font-medium">Eyes:</label>
        <div className="flex space-x-2">
          {eyesOptions.map((eyes) => (
            <img
              key={eyes}
              src={eyes} // Removed '/assets/' prefix
              alt="Eyes option"
              className="w-12 h-12 cursor-pointer border rounded"
              onClick={() => setEyes(eyes)}
            />
          ))}
        </div>
      </div>

      {/* Mouth Selection */}
      <div>
        <label className="block text-sm font-medium">Mouth:</label>
        <div className="flex space-x-2">
          {mouthOptions.map((mouth) => (
            <img
              key={mouth}
              src={mouth} // Removed '/assets/' prefix
              alt="Mouth option"
              className="w-12 h-12 cursor-pointer border rounded"
              onClick={() => setMouth(mouth)}
            />
          ))}
        </div>
      </div>

      {/* Accessories Selection */}
      <div>
        <label className="block text-sm font-medium">Accessories:</label>
        <div className="flex space-x-2">
          {accessoriesOptions.map((accessory) => (
            <img
              key={accessory}
              src={accessory} // Removed '/assets/' prefix
              alt="Accessory option"
              className="w-12 h-12 cursor-pointer border rounded"
              onClick={() => setAccessories([accessory])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetLibrary;
