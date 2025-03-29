import { usePasswordGeneratorStore } from "./Store";

const Passwordgenerator = () => {
  const {
    setIncludeLowercase,
    setIncludeNumbers,
    setIncludeUppercase,
    setIncludeSymbols,
    setLength,
    generatePassword,
    generatedPassword,
  } = usePasswordGeneratorStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generatePassword();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-visible">
      <h1 className="text-2xl font-bold mb-4">Password Generator ❣️</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-[400px] h-auto bg-black border border-solid flex flex-col items-center justify-center space-y-4 rounded-lg shadow-md p-6">
          {/* Text Input */}
          <p className="text-white">Password Length</p>
          <input
            type="number"
            min="1"
            placeholder="Enter the length of the password..."
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Checkboxes */}
          <div className="flex flex-col space-y-2 w-full text-white">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              <span>Include Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              <span>Include Symbols</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
              <span>Include Uppercase Letters</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
              <span>Include Lowercase Letters</span>
            </label>
          </div>

          {/* Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            type="submit"
          >
            Generate Password
          </button>

          {/* Generated Password */}
          {generatedPassword && (
            <div className="w-full bg-gray-300 text-black px-4 py-2 rounded-md break-words overflow-x-auto whitespace-pre-wrap">
              {generatedPassword}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Passwordgenerator;
