import axios from "axios";
import Commentlist from "./ReactDesign_PATTERNS/CointnerComponent/DataSource/Commentlist";
import DataSource from "./ReactDesign_PATTERNS/CointnerComponent/DataSource/DataSource";
import Todo from "./ReactDesign_PATTERNS/CointnerComponent/DataSource/Todo";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div>
      <hr></hr>

      <DataSource
        getDatafunc={getServerData(
          "https://jsonplaceholder.typicode.com/todos/1"
        )}
        resourceName="todo"
      >
        <Todo />
      </DataSource>
      <hr></hr>
      <DataSource
        resourceName="comments"
        getDatafunc={getServerData(
          "https://jsonplaceholder.typicode.com/comments/1"
        )}
      >
        <Commentlist />
      </DataSource>
      <hr></hr>
    </div>
  );
};

export default App;
