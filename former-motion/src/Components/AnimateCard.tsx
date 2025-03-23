import { motion } from "framer-motion";

const AnimateCard = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1.1,
            opacity: 1,
            y: -200,
            backgroundColor: "greenyellow",
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing Card</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimateCard;
