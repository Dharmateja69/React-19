import { useQuizStore } from "../Store";

const Question = () => {
  const {
    currentQuestion,
    questions,
    selectAnswer,
    answers,
    nextQuestion,
    prevQuestion,
    showScore,
  } = useQuizStore();
  if (showScore) return null; // Hide question when score is displayed
  const questionData = questions[currentQuestion];
  return (
    <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">{questionData.question}</h2>
      <div className="flex flex-col gap-4 ">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn hover:bg-slate-500 ${
              answers[currentQuestion] === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => selectAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevQuestion}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded-lg"
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
