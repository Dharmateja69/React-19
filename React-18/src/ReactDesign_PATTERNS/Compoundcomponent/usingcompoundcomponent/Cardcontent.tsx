import React from "react";

const Cardcontent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-4">
      <p className="text-gray-500 text-xs">{children}</p>
    </div>
  );
};

export default Cardcontent;
