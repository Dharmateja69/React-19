const trends = [
  { id: 1, name: "#WebDevelopment", tweets: "120K Tweets" },
  { id: 2, name: "#ReactJS", tweets: "85K Tweets" },
  { id: 3, name: "#JavaScript", tweets: "95K Tweets" },
  { id: 4, name: "#Frontend", tweets: "60K Tweets" },
];

const Trends = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold text-lg mb-4">Todays Top Trends</h3>
      <ul>
        {trends.map((index) => (
          <li key={index.id}>
            {index.name}---
            <span className="font-sans font-semibold">{index.tweets}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trends;
