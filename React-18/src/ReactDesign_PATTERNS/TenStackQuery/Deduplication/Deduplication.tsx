import { useQuery } from "@tanstack/react-query";
const getrandomnumber = () => {
  return Promise.resolve(Math.random());
  //   React Query (useQuery) expects queryFn to return a Promise — like when fetching from an API.
  // Since Math.random() is a synchronous value, you can't just return it directly — it must be in a Promise for React Query to handle it properly.
};
const Deduplication = () => {
  const { data } = useQuery({ queryKey: ["sidhu"], queryFn: getrandomnumber });
  return (
    <div>
      <h1>Data</h1>
      <pre>The getrandomnumber is :${data}</pre>
    </div>
  );
};

export default Deduplication;
