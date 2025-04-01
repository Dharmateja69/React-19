import { useQuizStore } from "../Store";

const Sidebar = () => {
  const { currentQuestion, questions } = useQuizStore();
  return (
    <div className="w-1/5  bg-gray-800 text-white p-5 text-center border border-solid">
      <h2 className="text-xl font-bold mb-4">Quiz Progress</h2>
      {/* Show current question progress  */}
      <p className="text-lg">
        Question {currentQuestion + 1} of {questions.length}
      </p>
      {/* Sidebar Navigation Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        {questions.map((_, i) => (
          <button
            key={i}
            className={`p-2 rounded-md ${
              currentQuestion === i ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => useQuizStore.setState({ currentQuestion: i })}
          >
            {" "}
            Q{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
