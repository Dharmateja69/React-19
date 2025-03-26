import { motion } from "framer-motion";
import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.button
        className="px-4 py-2 bg-white text-black flex justify-center items-center rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? "-" : "+"}
      </motion.button>

      {open && (
        <motion.div
          className="w-[300px] bg-slate-500 text-white rounded p-3 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <p className="font-serif text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            delectus, nam harum ipsa quasi, dolore voluptatem tenetur odit
            laboriosam odio omnis pariatur eius magni cupiditate saepe
            accusantium assumenda nisi incidunt.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Accordion;
