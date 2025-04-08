// https://jsonplaceholder.typicode.com/todos

import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
interface Todo {
  id: number;
  title: string;
  completed: string;
}

interface SingleTodoLoaderProps {
  children: ReactNode;
  todoId: number;
}

interface ChildComponentProps {
  todos: Todo | null;
}
const SingleTodoLoader = ({ children, todoId }: SingleTodoLoaderProps) => {
  const [todos, setTodos] = useState<Todo | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      setTodos(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, { todos });
        }
        return child;
      })}
    </>
  );
};

export default SingleTodoLoader;

// The children prop can be:

// A single React element: <Todo />

// Multiple elements: <><Todo /><AnotherTodo /></>

// null, undefined, or even a string/text node.

// So just writing:

// tsx
// Copy
// Edit
// React.cloneElement(children, { todos });
// would fail if children is more than one child (an array), or if it’s not a valid React element.

// ✅ Why use React.Children.map(children, ...)
// This is why we use:

// tsx
// Copy
// Edit
// React.Children.map(children, (child) => {
//   if (React.isValidElement(child)) {
//     return React.cloneElement(child, { todos });
//   }
//   return child;
// })
// Because:

// 💡 React.Children.map:
// Handles both single and multiple children gracefully

// Flattens fragments (<>...</>) and arrays

// Prevents runtime crashes

// 🧪 Let’s Compare with Examples
// 🧨 Without React.Children.map
// If you write:

// tsx
// Copy
// Edit
// return React.cloneElement(children, { todos });
// It only works for one valid child like:

// tsx
// Copy
// Edit
// <SingleTodoLoader>
//   <Todo />
// </SingleTodoLoader>
// But will crash if:

// tsx
// Copy
// Edit
// <SingleTodoLoader>
//   <>
//     <Todo />
//     <AnotherTodo />
//   </>
// </SingleTodoLoader>
// Error: React.cloneElement only works with a single valid React element, not an array or fragment.

// ✅ With React.Children.map
// This:

// tsx
// Copy
// Edit
// {React.Children.map(children, (child) => {
//   if (React.isValidElement(child)) {
//     return React.cloneElement(child, { todos });
//   }
//   return child;
// })}
// handles:

// One child ✅

// Multiple children ✅

// Fragments ✅

// Arrays ✅

// It safely injects props into each valid child, no matter how the children are structured.
