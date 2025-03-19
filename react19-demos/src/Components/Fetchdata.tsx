import { use } from "react";

const fetchdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res.json());
  return res.json();
};

const Fetchdata = () => {
  const data = use(fetchdata()); // ✅ Correct way to use `use()`

  return <div>{data.title}</div>; // ✅ Fixed JSX return statement
};

export default Fetchdata;
