import SingleTodoLoader from "./ReactDesign_PATTERNS/CointnerComponent/Component/SingleTodoLoader";
import Todo from "./ReactDesign_PATTERNS/CointnerComponent/Component/Todo";

const App = () => {
  return (
    <div>
      {" "}
      <SingleTodoLoader>
        <Todo />
      </SingleTodoLoader>
    </div>
  );
};

export default App;
