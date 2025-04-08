import SingleTodoLoader from "./ReactDesign_PATTERNS/CointnerComponent/Component/SingleTodoLoader";
import Todo from "./ReactDesign_PATTERNS/CointnerComponent/Component/Todo";

const App = () => {
  return (
    <div>
      {" "}
      <SingleTodoLoader todoId="1">
        <Todo />
      </SingleTodoLoader>
      <br />
      <SingleTodoLoader todoId="2">
        <Todo />
      </SingleTodoLoader>
      <br />
      <SingleTodoLoader todoId="3">
        <Todo />
      </SingleTodoLoader>
      <br />
    </div>
  );
};

export default App;
