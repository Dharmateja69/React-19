import { useEffect, useState } from "react";
interface Todoprops {
  id: number;
  title: string;
  body: string;
}

const WithoutFetchHook = () => {
  const [data, setdata] = useState<Todoprops[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todoprops[]) => setdata(data));
  }, []);
  return (
    <>
      {data &&
        data.map((index) => {
          return <p key={index.id}>{index.title}</p>;
        })}
    </>
  );
};

export default WithoutFetchHook;
