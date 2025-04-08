interface Todo {
  id: number;
  title: string;
  completed: string;
}

interface TodoListProps {
  todos: Todo[] | null;
}

const Todo = ({ todos }: TodoListProps) => {
  return todos ? (
    todos.map((item) => (
      <div key={item.id}>
        <p>
          <strong>Todo ID:</strong> {item.id}
        </p>
        <h1>
          <strong>Todo Title:</strong> {item.title}
        </h1>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};

export default Todo;
