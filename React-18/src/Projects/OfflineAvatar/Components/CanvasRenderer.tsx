import React, { useEffect } from "react";
import { useAvatarStore } from "../Store/useAvatarStore";

const CanvasRenderer = React.forwardRef<HTMLCanvasElement>((_, ref) => {
  const canvasRef = ref as React.MutableRefObject<HTMLCanvasElement>;
  const { hair, eyes, mouth, accessories } = useAvatarStore();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = "#f0f0f0"; // Light grey background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Function to draw an image asset
    const drawImage = (imgSrc: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve();
        };
      });
    };

    // Render avatar layers
    const renderAvatar = async () => {
      if (hair) await drawImage(hair);
      if (eyes) await drawImage(eyes);
      if (mouth) await drawImage(mouth);
      if (accessories) await drawImage(accessories);
    };

    renderAvatar();
  }, [hair, eyes, mouth, accessories]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="border rounded"
    />
  );
});

export default CanvasRenderer;
