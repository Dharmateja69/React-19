import OtherComponent from "./ZustandStore/OtherComponent";
import { useCounter } from "./ZustandStore/Store";

const App = () => {
  const count = useCounter((state) => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <OtherComponent />
    </div>
  );
};

export default App;
