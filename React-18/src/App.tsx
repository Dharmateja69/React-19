import TodoList from "./ReactDesign_PATTERNS/HoC/HOC/Components/TodoList";
import printProps from "./ReactDesign_PATTERNS/HoC/HOC/utils/printProps";

const Todowrapped = printProps(TodoList);

const App = () => {
  return (
    <div>
      <Todowrapped a={1} b={2} c={{ name: "sidhu" }} />
    </div>
  );
};

export default App;

// 2. Why This Pattern (HOC) Is Unique & Useful
// The printProps function is an example of a Higher-Order Component (HOC).
// 💡 HOC = A function that takes a component and returns a new component
