import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          className="flex-grow px-4 py-2 text-black border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={itemVariants}
              transition={{ duration: 0.3 }}
              className="bg-white text-black px-4 py-2 rounded shadow flex justify-between items-center"
            >
              <span>{task}</span>
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Todolist;
