import { useQuizStore } from "../Store";
import Question from "./Question";

const QuizLayout = () => {
  const { questions, showScore } = useQuizStore();
  return (
    <div className="w-4/5 flex items-center justify-center p-5 bg-black">
      {/* main content */}
      {!showScore ? (
        <Question />
      ) : (
        <div className="text-center text-xl text-white font-semibold">
          Quiz Completed! 🎉 Your Score: {useQuizStore.getState().score}/
          {questions.length}
        </div>
      )}
    </div>
  );
};

export default QuizLayout;
