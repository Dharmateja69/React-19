import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchdo = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const FetchOneitem = () => {
  const [id, setid] = useState(1);
  const { data } = useQuery({
    queryKey: ["sidhu", id],
    queryFn: () => fetchdo(id),
  });
  const handclick = () => {
    setid((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button className="py-6 px-10 bg-black text-white" onClick={handclick}>
        Next
      </button>
    </div>
  );
};

export default FetchOneitem;
