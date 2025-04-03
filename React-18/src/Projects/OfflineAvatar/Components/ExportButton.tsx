import React from "react";

interface ExportButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const ExportButton: React.FC<ExportButtonProps> = ({ canvasRef }) => {
  const exportAvatar = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "avatar.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={exportAvatar}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600"
      >
        Export Avatar
      </button>
    </div>
  );
};

export default ExportButton;
