const topic = ["NextJS", "TypeScript", "CSSTricks", "FullStack"];

const Topics = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semmibold text-lg mb-4">Topics For you</h3>
      <div className="flex flex-wrap space-y-2 grp-2">
        {topic.map((topic, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Topics;
