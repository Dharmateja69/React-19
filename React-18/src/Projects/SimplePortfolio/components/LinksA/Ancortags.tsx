// components/AnchorTag.tsx
import React from "react";

type AnchorTagProps = {
  href: string;
  icon: React.ReactNode;
};

const Ancortags: React.FC<AnchorTagProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      {icon}
    </a>
  );
};

export default Ancortags;
