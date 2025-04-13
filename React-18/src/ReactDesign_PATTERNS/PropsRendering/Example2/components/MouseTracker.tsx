import { useState } from "react";

const MouseTracker = ({ tracker }: any) => {
  const [position, setposition] = useState({ x: 0, y: 0 });
  const handleMousemove = (e: any) => {
    setposition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={handleMousemove} style={{ height: "100vh" }}>
      {tracker(position)}
    </div>
  );
};

export default MouseTracker;
