import { useState } from "react";
import { useExpenses } from "./store";

const Expenses = () => {
  const [description, setdescription] = useState("");
  const [amount, setamount] = useState("");
  const { expenses, addExpense, removeExpense } = useExpenses();
  const total = useExpenses((state) => state.totalAmount());

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() && !amount) {
      alert("Please enter a description and amount");
      return;
    } else {
      addExpense(description, Number(amount));
      setdescription("");
      setamount(0);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <form onSubmit={handlesubmit}>
        <div className="w-[400px] h-[400px] bg-black border border-solid flex flex-col items-center justify-center space-y-4 rounded-lg shadow-md p-6">
          {/* Text Input */}
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            className="w-full px-4 py-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setdescription(e.target.value)}
          />

          {/* Number Input */}
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            className="w-full px-4 py-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setamount(e.target.value)}
          />

          {/* Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            type="submit"
          >
            Add Expense
          </button>
          <section className="bg-green-600 text-size-2xl text-white font-bold py-3 px-4 rounded-md">
            ExpenesTracker:{total}
          </section>
        </div>
      </form>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="w-[400px] h-[100px] bg-black border border-solid flex flex-row items-center justify-center space-x-20 rounded-lg shadow-md p-6 overflow-x-auto"
        >
          <p className="text-white">{`${expense.description}: ${expense.amount}`}</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            onClick={() => removeExpense(expense.id)}
          >
            Remove Expense
          </button>
        </div>
      ))}
      {/* <section>
        <p>
          `${description}:${amount}`
        </p>
      </section>
      <section>`TotalExpense:{totalamount}`</section> */}
    </div>
  );
};

export default Expenses;
