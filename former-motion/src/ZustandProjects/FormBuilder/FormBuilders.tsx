import { useState } from "react";
import { useFormbuilder } from "./store"; // adjust path as needed

const FormBuilders = () => {
  const [selectedtype, setselectedtype] = useState("text");
  const [description, setDescription] = useState("");

  const { fields, addfield, removefield, updatefield } = useFormbuilder();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Form Builders</h1>

      <form
        className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          addfield(selectedtype, description);
          setDescription(""); // Clear input after submit
        }}
      >
        {/* Description Input */}
        <input
          type="text"
          placeholder="Enter the description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Select Input */}
        <select
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedtype}
          onChange={(e) => setselectedtype(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="textarea">Textarea</option>
          <option value="date">Date</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Render Fields Dynamically */}
      {fields.map((field) => (
        <div
          key={field.id}
          className="mt-4 bg-gray-100 p-4 rounded-md w-full max-w-md"
        >
          <label className="block mb-2 text-sm font-medium text-gray-700">
            {field.description ||
              `${
                field.type.charAt(0).toUpperCase() + field.type.slice(1)
              } Field`}
          </label>

          {field.type === "textarea" ? (
            <textarea
              value={field.value}
              placeholder={field.description}
              onChange={(e) => updatefield(field.id, e.target.value)}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              type={field.type}
              value={field.value}
              placeholder={field.description}
              onChange={(e) => updatefield(field.id, e.target.value)}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button
            type="button"
            onClick={() => removefield(field.id)}
            className="mt-2 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FormBuilders;
