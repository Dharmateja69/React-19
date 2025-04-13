import React from "react";

const Cardtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
    </div>
  );
};

export default Cardtitle;
