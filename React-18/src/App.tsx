import QuizLayout from "./Projects/QuizApp/Components/QuizLayout";
import Sidebar from "./Projects/QuizApp/Components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-500">
      <Sidebar />
      <QuizLayout />
    </div>
  );
};

export default App;
