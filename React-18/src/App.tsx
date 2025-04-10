import Todolist from "./ReactDesign_PATTERNS/HoC/fetchdata/Todolist";
import withTodo from "./ReactDesign_PATTERNS/HoC/fetchdata/withTodo";

const Todowrapped = withTodo(Todolist, 2);

const App = () => {
  return <Todowrapped />;
};

export default App;
