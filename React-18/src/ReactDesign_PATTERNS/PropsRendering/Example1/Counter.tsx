import { useState } from "react";

const Counter = ({ render }: any) => {
  const [state, setopen] = useState(0);
  const increment = () => {
    setopen(state + 1);
  };
  return (
    <div>
      <button
        className="bg-teal-200 px-10 py-10 text-black"
        onClick={increment}
      >
        Increment
      </button>
      {render(state)}
    </div>
  );
};

export default Counter;
