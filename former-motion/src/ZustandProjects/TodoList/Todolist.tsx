import { useState } from "react";
import { useTodoStore } from "./Store";

const Todolist = () => {
  const [inputvalue, setinputvalue] = useState("");

  // Destructure all store methods
  const { todos, addTodo, removeTodo, toggleCompleted } = useTodoStore();

  return (
    <div>
      <h1>TodoList</h1>
      <div className="w-[400px] h-[400px] border border-solid flex flex-col space-y-2 p-4 overflow-auto">
        {/* Input and Button */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter todo.."
            className="flex-1 h-10 text-black border border-gray-300 rounded px-2"
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              if (inputvalue.trim() !== "") {
                addTodo(inputvalue); // Pass only text (your store handles id)
                setinputvalue("");
              }
            }}
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="flex flex-col space-y-2 mt-2">
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-black bg-gray-100 p-2 rounded-md"
            >
              {/* Checkbox for completion */}
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleCompleted(item.id)}
              />

              {/* Styled text based on completed state */}
              <span
                className={`flex-1 ml-2 ${
                  item.completed
                    ? "line-through text-gray-500"
                    : "font-semibold"
                }`}
              >
                {item.text}
              </span>

              {/* Remove button */}
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeTodo(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
