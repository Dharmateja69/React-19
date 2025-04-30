import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//Fetching data from axios
const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};
const WithTenstackQuery = () => {
  const data = useQuery({ queryKey: ["sidhu"], queryFn: fetchData });
  console.log(data);
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default WithTenstackQuery;
