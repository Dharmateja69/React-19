interface Todoprps {
  a: number;
  b: number;
  c: { name: string };
}
const TodoList = ({ a, b, c }: Todoprps) => {
  return (
    <div>
      <h1>A:{a}</h1>
      <h1>B:{b}</h1>
      <h1>C:{c.name}</h1>
    </div>
  );
};

export default TodoList;
