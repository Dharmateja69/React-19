import { useQuery } from "@tanstack/react-query";
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};
const StaleTime = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sidhu"],
    queryFn: fetchData,
    staleTime: 50000,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured:{error.message}</div>;
  return (
    <div>
      <h1>Data,sidhu</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StaleTime;
// staleTime is the amount of time (in milliseconds) that React Query considers fetched data to be fresh (not stale).
