import { useCounter } from "./Store";

const OtherComponent = () => {
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default OtherComponent;
