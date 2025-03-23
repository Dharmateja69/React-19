import { motion } from "framer-motion";
const App = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 100 }}></motion.div>
      <motion.div className="box" animate={{ y: 20 }}></motion.div>
      <motion.div className="box" animate={{ rotateX: 20 }}></motion.div>
      <motion.div className="box" animate={{ rotateY: 20 }}></motion.div>
      <motion.div className="box" animate={{ scaleX: 20 }}></motion.div>
      <motion.div className="box" animate={{ scaleY: 20 }}></motion.div>
      <motion.div className="box" animate={{ scaleZ: 20 }}></motion.div>
      <motion.div className="box" animate={{ scale: 2 }}></motion.div>
      //increases the size of the elemenet
      <motion.div className="box" animate={{ skewX: 20 }}></motion.div>
      <motion.div className="box" animate={{ skewY: 20 }}></motion.div>// used
      to tilt
      <motion.div className="box" animate={{ skew: 20 }}></motion.div> */}
      <motion.div
        className="box"
        // initial={{ x: 0 }}
        // animate={{ x: 200 }}
        // transition={{ delay: 2 }}
        // transition={{ delay: 5 }}
        // transition={{ duration: 1 }}
        animate={{ scale: [1, 2, 2, 3, 4, 3, 2, 1] }}
        transition={{ duration: 5 }}
      />
    </div>
  );
};

export default App;
