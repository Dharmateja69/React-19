import React, { useState } from "react";

const initialTrendsList = [
  { quote: "Just Do It", following: false },
  { quote: "Think Different", following: true },
  { quote: "Because You're Worth It", following: false },
  { quote: "Impossible is Nothing", following: true },
  { quote: "The Ultimate Driving Machine", following: false },
  { quote: "Have a Break, Have a KitKat", following: true },
];

const Trends = () => {
  const [trendsList, setTrendsList] = useState(initialTrendsList);

  const toggleFollow = (index) => {
    const updatedList = [...trendsList];
    updatedList[index].following = !updatedList[index].following;
    setTrendsList(updatedList);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Trending Brands</h2>
      <ul className="space-y-4">
        {trendsList.map((trend, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-yellow-50 p-4 rounded shadow"
          >
            <span className="text-lg">{trend.quote}</span>
            <button
              onClick={() => toggleFollow(index)}
              className={`px-4 py-2 rounded border transition duration-200 ${
                trend.following
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-400"
              }`}
            >
              {trend.following ? "Followed" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trends;
