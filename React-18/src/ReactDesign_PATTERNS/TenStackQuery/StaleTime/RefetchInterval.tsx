import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const fetchData = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error("Network rsponse was not ok");
  return res.json();
};
const RefetchInterval = () => {
  const [id, setid] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["sidhu", id],
    queryFn: () => fetchData(id),
    refetchInterval: 5000,
  });
  //   we have used the useeffect because after the refetcintervale will be changing the id so that instead of old data we will be able to get new data.
  useEffect(() => {
    const interval = setInterval(() => {
      setid((previd) => (previd < 200 ? previd + 1 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>There is some error...</div>;
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        className="px-10 py-5 bg-black text-white"
        onClick={() => setid(200 > id ? id + 1 : 1)}
      >
        Next
      </button>
    </div>
  );
};

export default RefetchInterval;
