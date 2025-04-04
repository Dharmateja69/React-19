import { FC, ReactElement } from "react";

interface SplitScreenProps {
  children: [ReactElement, ReactElement];
  left: number; // width in %
  right: number; // width in %
}

const SplitScreen: FC<SplitScreenProps> = ({ children, left, right }) => {
  const [sidebar, content] = children;
  const leftWidth = `${left}%`;
  const rightWidth = `${right}%`;

  return (
    <section className="flex  flex-1 w-screen">
      <div style={{ width: leftWidth }}>{sidebar}</div>
      <div style={{ width: rightWidth }}>{content}</div>
    </section>
  );
};

export default SplitScreen;
