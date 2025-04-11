import { useEffect, useState } from "react";

const UseFetch = <T,>(url: string): [T | null, boolean, any] => {
  const [data, setdata] = useState<T | null>(null);
  const [isloading, setisloading] = useState<boolean>(true);
  const [error, seterror] = useState<any>(null);

  useEffect(() => {
    const fetchdata = async () => {
      setisloading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = (await response.json()) as T;
        setdata(result);
      } catch (error) {
        console.error("Fetch error: ", error);
        seterror(error);
        setdata(null);
      } finally {
        setisloading(false);
      }
    };
    fetchdata();
  }, [url]);
  return [data, isloading, error];
};

export default UseFetch;
