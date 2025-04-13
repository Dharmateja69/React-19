import { useEffect, useState } from "react";

const Datafetcher = ({ users }: any) => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // simulate a delay using setTimeout
        setTimeout(async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (response.ok) {
            const data = await response.json();
            setUsers(data);
            setLoading(false); // hide loader
          } else {
            console.error("Error fetching users");
            setLoading(false);
          }
        }, 2000); // delay of 2 seconds
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        user.map((user, index) => <div key={index}>{users(user)}</div>)
      )}
    </>
  );
};

export default Datafetcher;
