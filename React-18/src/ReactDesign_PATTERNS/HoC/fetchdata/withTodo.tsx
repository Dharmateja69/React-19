import axios from "axios";
import { useEffect, useState } from "react";

const withTodo = (Component: any, todoId: number) => {
  return (props: any) => {
    const [todo, setodo] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        setodo(response.data);
      })();
    }, []);
    return <Component {...props} todo={todo} />;
  };
};

export default withTodo;
