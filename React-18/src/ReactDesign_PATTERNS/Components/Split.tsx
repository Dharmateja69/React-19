import { FC, ReactNode } from "react";

interface SplitProps {
  children: [ReactNode, ReactNode];
  leftwidth: number;
  rightwidth: number;
}

const Split: FC<SplitProps> = ({ children, leftwidth, rightwidth }) => {
  const [left, right] = children;
  const leftweight = `${leftwidth}rem`;
  const rightweight = `${rightwidth}rem`;
  return (
    <div>
      <section className="flex w-screen">
        <div style={{ width: leftweight }}>{left}</div>
        <div style={{ width: rightweight }}>{right}</div>
      </section>
    </div>
  );
};

export default Split;
