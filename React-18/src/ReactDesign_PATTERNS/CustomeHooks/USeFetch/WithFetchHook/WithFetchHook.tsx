import UseFetch from "../UseFetch";
interface Todoprops {
  id: number;
  title: string;
  body: string;
}

const WithFetchHook = () => {
  const [data, isloading, error] = UseFetch<Todoprops[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (isloading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching todo:{error.message}</p>;
  }

  return (
    <ul>
      {data && data.map((index) => <li key={index.id}>{index.title}</li>)}
    </ul>
  );
};

export default WithFetchHook;
