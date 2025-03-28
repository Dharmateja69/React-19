import { useEffect, useState } from "react";

const Food = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const result = await response.json();
      setData(result.meals);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-5 p-5 min-h-screen bg-gray-500">
      <h1 className="text-2xl font-bold text-center">Food</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="border border-blue-500 p-4 bg-white rounded w-full max-w-lg mx-auto"
      >
        <div className="flex flex-row space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[300px] h-[50px] bg-white text-black rounded px-3 border border-gray-300"
            placeholder="Enter the Recipe Name..."
          />
        </div>
      </form>

      <div className="max-h-[500px] overflow-y-auto space-y-4 p-2 border border-gray-300 rounded w-full max-w-lg mx-auto bg-white">
        {data
          .filter((items: any) =>
            items.strMeal.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((items: any) => (
            <div
              key={items.idMeal}
              className="flex flex-row space-x-3 items-center text-black border border-gray-200 p-2 rounded"
            >
              <img
                src={items.strMealThumb}
                alt={items.strMeal}
                className="w-[100px] h-[100px] rounded"
              />
              <p className="text-lg font-medium">{items.strMeal}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Food;
