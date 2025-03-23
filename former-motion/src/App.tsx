import { motion } from "framer-motion";
import { useState } from "react";
import { variants } from "./Components/variants";

const App = () => {
  const [isvsiable, setisvisiable] = useState(true);
  return (
    <div>
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={isvsiable ? "visible" : "hidden"}
        exit="exit"
        transition={{ duration: 1 }}
        onClick={() => setisvisiable(!isvsiable)}
      ></motion.div>
    </div>
  );
};

export default App;
