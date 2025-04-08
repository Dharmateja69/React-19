interface Toodprops {
  todo: { id: number; title: string };
}

const Todo = ({ todo }: Toodprops) => {
  return (
    <>
      <h1>TodoId:{todo.id}</h1>
      <p>Todo Title:{todo.title}</p>
    </>
  );
};

export default Todo;
