import SingleTodoLoader from "./ReactDesign_PATTERNS/CointnerComponent/Component/SingleTodoLoader";
import Todo from "./ReactDesign_PATTERNS/CointnerComponent/Component/Todo";

const App = () => {
  return (
    <>
      <SingleTodoLoader>
        <Todo />
      </SingleTodoLoader>
    </>
  );
};

export default App;
