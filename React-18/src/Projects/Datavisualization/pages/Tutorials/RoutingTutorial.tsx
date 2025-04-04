import { useNavigate } from "react-router-dom";

const RoutingTutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-gray-800 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">React Router Basics</h2>
      <p className="mb-4">
        React Router enables navigation between different pages without
        refreshing the browser.
      </p>
      <p className="mb-4">
        This app uses <strong>React Router</strong> to manage multiple pages,
        such as the dashboard, tutorials, and charts.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RoutingTutorial;
